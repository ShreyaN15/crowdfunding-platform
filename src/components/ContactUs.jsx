import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" }); // Clear form
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <p>Have questions? Get in touch with us!</p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="form-control" />
        </div>
        
        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-control" />
        </div>
        
        <div className="mb-3">
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required className="form-control"></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
};

export default Contact;
