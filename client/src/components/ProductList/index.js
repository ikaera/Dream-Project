import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import '../../App.css';

function ProductList({ searchField }) {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  // const addCupon = prod => {
  //   const product = { ...prod };
  //   if (product.name === 'Vampire') {
  //     product.price = 5.0;
  //   }
  //   console.log(product);
  //   return product;
  // };

  useEffect(() => {
    if (data) {
      const updateProducts = data.products; //.map(addCupon);
      dispatch({
        type: UPDATE_PRODUCTS,
        products: updateProducts,
      });
      data.products.forEach(product => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then(products => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      product => product.category._id === currentCategory,
    );
  }

  const filterBySearch = product => {
    return product.name.toLowerCase().includes(searchField.toLowerCase());
  };

  return (
    <div >
      <h2 className="products-title-bg">Our Products:</h2>
      {state.products.length ? (
        <div className="products">
          {filterProducts()
            .filter(filterBySearch)
            .map(product => (
              <ProductItem
                item={product}
                key={product._id}
                // _id={product._id}
                // image={product.image}
                // name={product.name}
                // price={product.price}
                // quantity={product.quantity}
              />
            ))}
        </div>
      ) : (
        <h3>You haven't added any mythical creatures yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
