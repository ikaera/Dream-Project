import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <div className='search-container'>
    <div className="search-box__input-container">
      <TextField
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
        autoComplete="on"
      />
    </div>
  </div>
);

export default SearchBox;
