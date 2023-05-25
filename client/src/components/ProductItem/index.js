import React from 'react';
import { Link } from 'react-router-dom';
import { pluralize } from '../../utils/helpers';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import Button from '@mui/material/Button';
import './style.css';
// import dragon from '../../../public/images'

function ProductItem({ item }) {
  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price, quantity } = item;

  const { cart, discount, promotion } = state;

  // Function to add an item to the cart

  const addToCart = () => {
    // Check if the item is already in the cart

    const itemInCart = cart.find(cartItem => cartItem._id === _id);

    if (itemInCart) {
      // If item is already in the cart, update quantity
      if(itemInCart.quantity === itemInCart.purchaseQuantity){
        return
      }
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });

      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      // If item is not in the cart, add it with a quantity of 1
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });

      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };

  function displayDiscount() {
    // console.log(name, promotion);
    if (name.includes(promotion) && promotion) {
      let originalPrice = (price / discount).toFixed(2);
      let percentage = (1 - discount) * 100;
      return (
        <>
          {' '}
          <span className="original-price">${originalPrice} </span>
          <span className="discount">({percentage.toFixed()}%OFF) </span>
        </>
      );
    }
    return '';
  }

  return (
    <div className="card product">
      <Link to={`/products/${_id}`}>
        <img alt={name} src={`/images/${image}`} />
        <p>{name}</p>
      </Link>
      <div>
        <div>
          {quantity} {pluralize('item', quantity)} in stock
        </div>
        {displayDiscount()}
        <span>${price}</span>
      </div>
      <Button onClick={addToCart} variant="contained" size="small">
        Add to cart
      </Button>
    </div>
  );
}

export default ProductItem;
