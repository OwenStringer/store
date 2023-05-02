import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import Login from './components/Login';
import Footer from './components/Footer';
import CartProvider from './contexts/CartContext';
import '../src/App.css'
const App = () => {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomeWithFooter />} />
          <Route path="/products" element={<ProductsWithFooter />} />
          <Route path="/cart" element={<CartWithFooter />} />
          <Route path="/login" element={<LoginWithFooter />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

const HomeWithFooter = () => {
  return (
    <>
      <Home />
    </>
  );
};

const ProductsWithFooter = () => {
  return (
    <>
      <Products />
    </>
  );
};

const CartWithFooter = () => {
  const location = useLocation();

  return (
    <>
      <Cart />
      {location.pathname !== '/cart' && <Footer />}
    </>
  );
};

const LoginWithFooter = () => {
  const location = useLocation();

  return (
    <>
      <Login />
      {location.pathname !== '/login' && <Footer />}
    </>
  );
};

export default App;