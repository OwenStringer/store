import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 10.99,
    image: '/product1.jpg'
  },
  {
    id: 2,
    name: 'Product 2',
    price: 24.99,
    image: '/product2.jpg'
  }
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      const updatedCart = cartItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedCart);
    } else {
      const newCartItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const removeItemFromCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      if (existingItem.quantity === 1) {
        const updatedCart = cartItems.filter(item => item.id !== product.id);
        setCartItems(updatedCart);
      } else {
        const updatedCart = cartItems.map(item => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        setCartItems(updatedCart);
      }
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => removeItemFromCart(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addItemToCart(item)}>+</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <p>Total Price: ${calculateTotalPrice()}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
