import React from 'react';

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <div className={`search-box ${className}`}>
    <div className="search-box__input-container">
      <input
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
        autoComplete="on"
      />
    </div>
  </div>
);

export default SearchBox;
