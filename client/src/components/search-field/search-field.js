// import './search-box.styles.css';
const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={'search-box ${className}'}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
    autocomplete="on"
  />
);

export default SearchBox;
