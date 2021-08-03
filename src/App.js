import React, { useState } from 'react';
import './App.css';

import Container from 'components/Container';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Modal from 'components/Modal';
import { fetchImagesWithQuery } from 'services/fetchImages';
import LoaderOn from 'components/Loader';
import contextProps from 'context/context';

const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  const onOpenModal = e => {
    setModalImg(e.target.dataset.source);
    setShowModal(true);
    setModalAlt(e.target.attributes.alt.textContent);
  };

  const onSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    fetchImagesWithQuery(searchQuery, 1)
      .then(response => setImages(response.data.hits))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  };

  const onLoadMore = () => {
    setIsLoading(true);

    fetchImagesWithQuery(searchQuery, currentPage + 1)
      .then(response => {
        setImages(prevState => [...prevState, ...response.data.hits]);
        setCurrentPage(prevState => prevState + 1);
      })
      .catch(error => setError(error))
      .finally(() => {
        setIsLoading(false);
        window.scrollTo({
          top: document.querySelector('#imagesList').scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  const onCloseModal = e => {
    if (e.target.nodeName !== 'IMG') {
      setShowModal(false);
      setModalImg('');
      setModalAlt('');
    }
    document.body.classList.remove('is-open');
  };

  const onSetQuery = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <contextProps.Provider
      value={{ modalImg, error, modalAlt, images, onOpenModal }}
    >
      <Container>
        <Searchbar
          onSubmit={onSubmit}
          onSetQuery={onSetQuery}
          searchQuery={searchQuery}
        />
        <ImageGallery />
        {isLoading && <LoaderOn />}
        {images.length > 11 && <Button onLoadMore={onLoadMore} />}
        {showModal && <Modal onCloseModal={onCloseModal} />}
      </Container>
    </contextProps.Provider>
  );
};

export default App;
//------------------------------------------common-state-method--------------------------------------------------------------
// const App = () => {
//   const initialState = {
//     images: [],
//     currentPage: 1,
//     searchQuery: '',
//     isLoading: false,
//     error: null,
//     showModal: false,
//     modalImg: '',
//     modalAlt: '',
//   };

//   const [state, setState] = useState(initialState);
//   const { searchQuery, currentPage, images, isLoading, showModal } = state;

//   const onOpenModal = e => {
//     setState(prev => ({
//       ...prev,
//       modalImg: e.target.dataset.source,
//       showModal: true,
//       modalAlt: e.target.attributes.alt.textContent,
//     }));
//   };

//   const onSubmit = e => {
//     e.preventDefault();
//     setState(prev => ({ ...prev, isLoading: true }));
//     fetchImagesWithQuery(searchQuery, 1)
//       .then(response =>
//         setState(prev => ({ ...prev, images: response.data.hits })),
//       )
//       .catch(error => setState(prev => ({ ...prev, error })))
//       .finally(() => setState(prev => ({ ...prev, isLoading: false })));
//   };

//   const onLoadMore = () => {
//     setState(prev => ({ ...prev, isLoading: true }));

//     fetchImagesWithQuery(searchQuery, currentPage + 1)
//       .then(response =>
//         setState(prevState => ({
//           ...prevState,
//           images: [...prevState.images, ...response.data.hits],
//           currentPage: prevState.currentPage + 1,
//         })),
//       )
//       .catch(error => setState(prev => ({ ...prev, error })))
//       .finally(() => {
//         setState(prev => ({ ...prev, isLoading: false }));
//         window.scrollTo({
//           top: document.querySelector('#imagesList').scrollHeight,
//           behavior: 'smooth',
//         });
//       });
//   };

//   const onCloseModal = e => {
//     if (e.target.nodeName !== 'IMG') {
//       setState(prev => ({
//         ...prev,
//         showModal: false,
//         modalImg: '',
//         modalAlt: '',
//       }));
//     }
//     document.body.classList.remove('is-open');
//   };

//   const onSetQuery = e => {
//     setState(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   return (
//     <contextProps.Provider value={{ ...state, onOpenModal }}>
//       <Container>
//         <Searchbar
//           onSubmit={onSubmit}
//           onSetQuery={onSetQuery}
//           searchQuery={searchQuery}
//         />
//         <ImageGallery />
//         {isLoading && <LoaderOn />}
//         {images.length > 11 && <Button onLoadMore={onLoadMore} />}
//         {showModal && <Modal onCloseModal={onCloseModal} />}
//       </Container>
//     </contextProps.Provider>
//   );
// };

// export default App;
