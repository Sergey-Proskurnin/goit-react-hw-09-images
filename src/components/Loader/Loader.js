import React from 'react';
import Loader from 'react-loader-spinner';

import s from './Loader.module.css';

const LoaderOn = () => {
  return (
    <div className={s.Loader}>
      <Loader type="Audio" color="#00BFFF" height={150} width={150} />
    </div>
  );
};

export default LoaderOn;
