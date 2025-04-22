// src/pages/Contact.js
import React, { useState } from 'react';
import '../styles/Contact.css'; // assuming you create a Contact.css for custom styles

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-description">
        If you want to get to know me more or have any questions feel free to reach out below or follow my socials!
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit" className="submit-button">Send Message</button>
      </form>

      <div className="social-media-links">
        <h2>Follow me on</h2>
        <ul>
          <li><a href="https://www.tiktok.com/@burnttbiscuit?_t=ZP-8vjKdoW5zzC&_r=1://twitter.com" target="_blank" rel="noopener noreferrer">Tiktok</a></li>
          <li><a href="https://www.instagram.com/briannajes/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/brianna-jesionowski-5937a01b9" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
