import React from 'react';
import '../css/Footer.css'; // import your own custom stylesheet for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-logo">Foodverse</h2>
          <p>
           Here at Foodverse, we're passionate about exceeding your expectations with the highest quality ingredients, expertly crafted dishes, and exceptional service.
          </p>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="footer-section footer-bottom">
        &copy; 2023 YourStore. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
