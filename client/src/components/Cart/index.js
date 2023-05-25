import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';
import Button from '@mui/material/Button';

// Load Stripe library asynchronously
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [zombieDiscountApplied, setZombieDiscountApplied] = useState(false);

  useEffect(() => {
    if (data) {
      stripePromise.then(res => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      console.log('Hello');
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;

    state.cart.forEach(item => {
      sum += item.price * item.purchaseQuantity;
    });

    if (discountApplied && promoCode === 'CARLSON40') {
      sum *= 0.6;
    }

    if (zombieDiscountApplied) {
      const zombieItem = state.cart.find(item => item.name === 'Zombie');
      if (zombieItem && state.cart.length > 1) {
        const zombieItemDiscount = zombieItem.price * zombieItem.purchaseQuantity;
        sum -= zombieItemDiscount;
      }
    }

    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = state.cart.map(item => item._id);

    getCheckout({
      variables: { products: productIds },
    });
  }

  function handlePromoCodeChange(event) {
    setPromoCode(event.target.value);
  }

  function applyPromoCode() {
    if (promoCode === 'CARLSON40') {
      setDiscountApplied(true);
      setZombieDiscountApplied(false); // Reset zombie discount when another promo code is applied
    } else if (promoCode === 'ZOMBIEPALOOZA') {
      setZombieDiscountApplied(true);
      setDiscountApplied(false); // Reset other discount when zombie discount is applied
    } else {
      setDiscountApplied(false);
      setZombieDiscountApplied(false);
    }
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map(item => (
            <CartItem key={item._id} item={item} />
          ))}

          {zombieDiscountApplied && state.cart.length > 1 && (
            <p>Promotion applied: You get a FREE zombie!</p>
          )}

          <div className="promo-code-container">
            <input
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={handlePromoCodeChange}
            />
            <button onClick={applyPromoCode}>Apply</button>
          </div>

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <Button onClick={submitCheckout}>Checkout</Button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="caution">
            ⚠️
          </span>
          There are no mythical creatures in your cart yet!
          <span role="img" aria-label="caution">
            ⚠️
          </span>
        </h3>
      )}
    </div>
  );
};

export default Cart;
