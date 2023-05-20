import React from 'react';
import ProductList from '../components/ProductList';
import CategoryMenu from '../components/CategoryMenu';
import PromotionalPage from '../components/PromotionalPage';
import Cart from '../components/Cart';
import SearchBox from '../components/search-field/search-field';
import Contact from '../components/Contact/Contact';
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

  return (
    <div className="container">
      <CategoryMenu />

      <SearchBox
        className="store-search-box"
        onChangeHandler={onSearchChange}
        placeholder="BeastFinder 🔍"
      />

      <ProductList searchField={searchField} creatures={filteredCreatures} />

      <PromotionalPage />
      <Cart />
      <Contact />
    </div>
  );
};

export default Home;
