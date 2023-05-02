import React, { useState, useEffect } from 'react';
import '../css/Products.css'; // import your own custom stylesheet for styling

import ProductCard from '../components/ProductCard';
import products from '../components/catalog';

const Products = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items data from localStorage
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(savedCartItems);
  }, []);

  return (
    <div className="products">
      <div className="products-header">
        <h2>Menu</h2>
        <p>Find food for any occassion</p>
      </div>
      <div className="products-list">
        {products.map(product => (
          <ProductCard key={product._id} product={product} cartItems={cartItems} setCartItems={setCartItems} />
        ))}
      </div>
    </div>
  );
}

export default Products;
