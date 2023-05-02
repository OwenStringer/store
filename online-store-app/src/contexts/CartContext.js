import React, { createContext, useState } from 'react';

export const CartContext = createContext({
  cart: [],
  setCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem._id === item._id);
  
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  
    localStorage.setItem('cartItems', JSON.stringify([...cart, { ...item, quantity: 1 }]));
  };
  
  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem !== item));
  
    localStorage.setItem('cartItems', JSON.stringify(cart.filter((cartItem) => cartItem !== item)));
  };
  
  const clearCart = () => {
    setCart([]);
  
    localStorage.removeItem('cartItems');
  };
  

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};


export default CartProvider;