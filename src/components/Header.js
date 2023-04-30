import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <img src="https://media.istockphoto.com/id/1264397558/vector/hourglass-icon-vector-sand-clock-sign-for-your-web-site-design-logo-app-ui-illustration.jpg?s=170667a&w=0&k=20&c=ZwJOpWRfXwguYmuSfzBDzqizff49Ayn1uiugFVuthNw=" alt="Logo" className="navbar-logo" />
          <h1 className="navbar-title">Foodverse</h1>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">Menu</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">Cart</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
