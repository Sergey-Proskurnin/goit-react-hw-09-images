import React from 'react';
import PropTypes from 'prop-types';

import s from './Button.module.css';

const Button = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} className={s.Button} type="button">
      Load more
    </button>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
export default Button;
