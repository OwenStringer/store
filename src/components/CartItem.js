import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  const handleRemove = () => {
    removeFromCart(item);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="cart-item-footer">
          <span className="cart-item-price">${item.price}</span>
          {/* <span className="cart-item-quantity">Quantity: {item.quantity}</span> */}
          <button className="cart-item-remove" onClick={handleRemove}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
