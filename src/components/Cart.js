import React, { useContext, useEffect, useState } from 'react';
import '../css/Cart.css'; // import your own custom stylesheet for styling
import CartItem from './CartItem';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const calculateTotal = () => {
    let total = 0;
    cart.forEach(item => {
      if (item.price && item.quantity) {
        total += item.price * item.quantity;
      }
    });
    return total.toFixed(2);
  };
  
  

  useEffect(() => {
    // Update the cart items state with the items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItems) {
      setCart(cartItems);
    }
  }, [setCart]);

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Your Shopping Cart</h2>
        <p>You have {cart.length} item(s) in your cart</p>
      </div>
      <div className="cart-items">
        {cart.map(item => (
          <CartItem key={item._id} item={item} />
        ))}
      </div>
      <div className="cart-footer">
        <p className="cart-total">Total: ${calculateTotal()}</p>
        <button className="cart-checkout">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
