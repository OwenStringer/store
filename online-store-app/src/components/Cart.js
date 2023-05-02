import React, { useContext, useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
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

  const handleCheckout = async () => {
    const lineItems = cart.map(item => ({
      price: item.price,
      quantity: item.quantity,
    }));


    const stripeEndpoint = process.env.NODE_ENV === 'production'
      ? 'https://snoozyzone.com/create-checkout-session'
      : 'http://localhost:3000/create-checkout-session';

    const response = await fetch(stripeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        lineItems,
        successUrl: 'https://snoozyzone.com/success',
        cancelUrl: 'https://snoozyzone.com/cancel',
      })
    });

    const session = await response.json();

    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    });

    if (result.error) {
      console.error(result.error.message);
    }
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
        <button className="cart-checkout" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
