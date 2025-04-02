import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (could be an API call to send the form data)
    console.log(formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for contacting us!');
  };

  return (
    <div className="contact-us">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please fill out the form below or contact us directly.</p>

        <div className="contact-info">
          <p><strong>Email:</strong> support@example.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
        </div>

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

          <button type="submit" className="cta-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
