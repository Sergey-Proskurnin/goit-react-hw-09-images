import React from 'react';
import PropTypes from 'prop-types';

import s from './Searchbar.module.css';

const Searchbar = ({ onSetQuery, searchQuery, onSubmit }) => {
  return (
    <header className={s.Searchbar}>
      <form onSubmit={onSubmit} className={s.SearchForm}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          onInput={onSetQuery}
          name="searchQuery"
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSetQuery: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};
export default Searchbar;
