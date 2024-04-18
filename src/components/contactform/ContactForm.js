'use client'

import React, { useState } from 'react';

const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const maxLength = 600; // max length of message field validation
  const remainingChar = maxLength - formData.message.length;

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let res = null;
    try {
      res = await sendEmail(formData);
    } catch (error) {
      console.error('Error sending email:', error);
    }

    if (res === 'success') {
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setIsSuccess(true);
      setError(false);
      console.log(res);
    } else {
      setError(res);
      setIsSuccess(false);
      console.log(res);
    }
  };

  return (
    <div style={{
      background: '#f8f8f8',
      padding: '20px',
      textAlign: 'center',
      boxSizing: 'border-box',
    }}>
      <h2 style={{fontSize: '2rem'}}>Contact us</h2>
      <form action="/submit_form" method="POST" style={{ textAlign: 'center' }}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          required style={{
            width: '90%', 
            margin: '10px 0', 
            padding: '10px'
          }} 
        />
        <input 
          type="phone" 
          name="phone" 
          placeholder="Your Phone" 
          required style={{
            width: '90%', 
            margin: '10px 0', 
            padding: '10px'
          }} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          required style={{
            width: '90%', 
            margin: '10px 0', 
            padding: '10px'
          }} 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          required style={{
            width: '90%', 
            margin: '10px 0', 
            padding: '10px',
            height: '200px'
          }}
        />
        <button type="submit" style={{
          padding: '10px 20px', 
          backgroundColor: '#0066A2', 
          color: 'white', 
          border: 'none', 
          cursor: 'pointer'
        }}>
          Send message
        </button>
      </form>
    </div>
  );
}
  
  export default ContactForm;
  