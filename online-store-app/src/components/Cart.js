import React, { useContext, useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import '../css/Cart.css'; // import your own custom stylesheet for styling
import CartItem from './CartItem';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [stripe, setStripe] = useState(null); // Stripe instance

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
    if (!stripe) return; // Check if Stripe instance is loaded

    // Create an array of line items from the cart
    const lineItems = cart.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          description: item.description,
          images: [item.image],
        },
        unit_amount: item.price * 100, // Stripe requires price in cents
      },
      quantity: item.quantity,
    }));

    // Create a Stripe checkout session
    const response = await fetch('https://snoozyzone.com/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ lineItems }),
    });

    const session = await response.json();

    if (session && session.id) {
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        console.error(error);
      }
    } else {
      console.error('Invalid session response:', session);
    }
  };



  useEffect(() => {
    // Load Stripe instance when the component mounts
    // Load Stripe instance when the component mounts
    const loadStripeInstance = async () => {
      const stripeInstance = await loadStripe('pk_live_51MuqejBiBZ9iIPDEe73MV85u1ZakSpdXde8Z9TmXrR9e6yCiREuLEzJoldkjyK3tEBo4vtur2tMInFBN8DbRNvNy00dBDWUISH');
      setStripe(stripeInstance);
    };

    loadStripeInstance();
  }, []);

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