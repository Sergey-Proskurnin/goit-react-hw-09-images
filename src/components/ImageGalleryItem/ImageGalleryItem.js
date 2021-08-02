import React from 'react';
import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';
import contextProps from 'context/context';

const ImageGalleryItem = () => {
  return (
    <contextProps.Consumer>
      {({ images, onOpenModal }) => {
        return images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <li key={id} onClick={onOpenModal} className={s.ImageGalleryItem}>
            <img
              src={webformatURL}
              alt={tags}
              data-source={largeImageURL}
              className={s.ImageGalleryItemImage}
            />
          </li>
        ));
      }}
    </contextProps.Consumer>
  );
};
ImageGalleryItem.propTypes = {
  onOpenModal: PropTypes.func,
};
export default ImageGalleryItem;
