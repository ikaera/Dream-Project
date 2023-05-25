import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  // Function to remove an item from the cart
  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });
  };

  // Function to handle quantity increment
  const incrementQuantity = () => {
    const newQuantity = item.purchaseQuantity + 1;
    if (newQuantity <= item.quantity) {
      updateQuantity(newQuantity);
    }
  };

  // Function to handle quantity decrement
  const decrementQuantity = () => {
    const newQuantity = item.purchaseQuantity - 1;
    if (newQuantity >= 1) {
      updateQuantity(newQuantity);
    }
  };

  // Function to update the quantity in the cart
  const updateQuantity = newQuantity => {
    if (newQuantity === 0) {
      // If quantity becomes 0, remove the item from the cart
      removeFromCart(item);
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: newQuantity
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: newQuantity });
    }
  };

  // Render the cart item
  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <button onClick={decrementQuantity}>-</button>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            readOnly
          />
          <button onClick={incrementQuantity}>+</button>
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
