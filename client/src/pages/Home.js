import React from 'react';
import ProductList from '../components/ProductList';
import CategoryMenu from '../components/CategoryMenu';
import PromotionalPage from '../components/PromotionalPage';
import Cart from '../components/Cart';
import SearchBox from '../components/search-field/search-field';
import { useState, useEffect } from 'react';

const Home = () => {
  const [searchField, setSearchField] = useState('');
  const [creatures, setCreatures] = useState([]);
  const [filteredCreatures, setFilterCreatures] = useState(creatures);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setCreatures(users));
  }, []);

  useEffect(() => {
    const newFilteredCreatures = creatures.filter(creature => {
      return creature.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterCreatures(newFilteredCreatures);
  }, [creatures, searchField]);

  const onSearchChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  console.log(searchField);
  return (
    <div className="container">
      <CategoryMenu />
      {/* <form autocomplete="on"> */}
      <SearchBox
        className="store-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search inventory"
      />
      {/* </form> */}
      <ProductList searchField={searchField} creatures={filteredCreatures} />
      <PromotionalPage />
      <Cart />
    </div>
  );
};

export default Home;
