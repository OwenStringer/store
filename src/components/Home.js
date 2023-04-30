import React from 'react';
import '../css/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to Foodverse</h1>
        <p>Experience gourmet flavors that exceed all expectations with every bite.</p>
        <a href="/products">Take a Bite</a>
      </div>



      <div className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"I've been a loyal customer of Foodverse for years. Their food is always fresh and delicious, and their customer service is top-notch!"</p>
          <h3>John Smith</h3>
        </div>
        <div className="testimonial">
          <p>"I recently discovered Foodverse and I'm blown away by the quality of their food. I've already recommended them to all my friends!"</p>
          <h3>Jane Doe</h3>
        </div>
        <div className="testimonial">
          <p>"Foodverse has made meal planning so much easier for me. I love their selection of healthy and convenient options!"</p>
          <h3>Bob Johnson</h3>
        </div>
      </div>

      <div className="about-section">
        <h2>About Us</h2>
        <p>Foodverse was founded in 2005 with a mission to bring gourmet flavors to everyday meals. We believe that food should be delicious, convenient, and affordable. That's why we offer a wide selection of fresh and frozen meals, snacks, and desserts that are ready to eat or easy to prepare.</p>
        <p>Our team of experienced chefs and nutritionists carefully selects and prepares each item on our menu, using only the highest-quality ingredients. We're committed to providing our customers with the best possible experience, from our easy online ordering system to our friendly customer service.</p>
        <p>Thank you for choosing Foodverse for all your meal needs. We look forward to serving you!</p>
      </div>

      <div className="services-section">
        <h2>Our Services</h2>
        <div className="service">
          <i className="fas fa-truck"></i>
          <h3>Fast and Reliable Delivery</h3>
          <p>Our dedicated delivery team ensures that your orders arrive fresh and on time, every time.</p>
        </div>
        <div className="service">
          <i className="fas fa-utensils"></i>
          <h3>Customizable Menus</h3>
          <p>We offer a variety of customizable menus to fit your specific needs and preferences. Whether you're looking for vegan, gluten-free, or low-carb options, we've got you covered.</p>
        </div>
        <div className="service">
          <i className="fas fa-headset"></i>
          <h3>24/7 Customer Support</h3>
          <p>Our friendly customer support team is available 24/7 to answer any questions or concerns you may have.</p>
        </div>
      </div>
      <div className="contact-section">
    <h2>Contact Us</h2>
    <form>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </div>

  <div className="location-section">
    <h2>Our Locations</h2>
    <div className="location">
      <i className="fas fa-map-marker-alt"></i>
      <h3>Headquarters</h3>
      <p>Albuquerque, USA</p>
    </div>
    <div className="location">
      <i className="fas fa-map-marker-alt"></i>
      <h3>Branch Office</h3>
      <p>Albuquerque, USA</p>
    </div>
    <div className="location">
      <i className="fas fa-map-marker-alt"></i>
      <h3>Distribution Center</h3>
      <p>Albuquerque, USA</p>
    </div>
  </div>

  <div className="subscribe-section">
    <h2 className='black'>Subscribe to Our Weekly Food Newsletter</h2>
    <form>
      <input type="email" placeholder="Your Email" />
      <button type="submit">Subscribe</button>
    </form>
  </div>
</div>
);
};

export default Home;