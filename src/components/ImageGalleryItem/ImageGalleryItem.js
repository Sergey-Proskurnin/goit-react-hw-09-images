import React, { useContext } from 'react';

import s from './ImageGalleryItem.module.css';
import contextProps from 'context/context';

const ImageGalleryItem = () => {
  const { images, onOpenModal } = useContext(contextProps);

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
};

export default ImageGalleryItem;
