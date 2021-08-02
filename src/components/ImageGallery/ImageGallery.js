import React from 'react';

import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = () => {
  return (
    <ul className={s.ImageGallery} id="imagesList">
      <ImageGalleryItem />
    </ul>
  );
};

export default ImageGallery;
