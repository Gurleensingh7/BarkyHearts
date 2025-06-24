import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/post/contact", formData);
      if (res.status === 201) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Failed to send message:", err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <section className="contact-section">
      <div className="container"><br />
        <h2 className="contact-heading text-center mb-4">Get in Touch</h2>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <h4><b>Contact Information</b></h4>
            <p className='para'><strong>Address:</strong> 123 Pet Street, Animal City</p>
            <p className='para'><strong>Phone:</strong> +91-123-456-7890</p>
            <p className='para'><strong>Email:</strong> info@BarkyHearts.com</p>
            <p className='para'>We’re here to answer your queries and support your pet care journey.</p>
            <img src="https://i.redd.it/mprpd2v99qg71.jpg" alt="" className="contact-img" />
          </div>
          <div className="col-lg-6">
            <h4><b>Send Us a Message</b></h4><br />
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" className="form-control" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea className="form-control" name="message" rows={4} placeholder="Write your message here" value={formData.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-danger Submit_button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
