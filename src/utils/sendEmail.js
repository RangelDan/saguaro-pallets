import React from "react";
import emailjs from "@emailjs/browser";
import DOMPurify from 'dompurify';
import { validateEmail, validateMessage, validateName, validatePhone } from '@/utils/validation'

const sendEmail = async (formData, csrfToken) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_USER_ID;


  try {
    // Validate form data
    if (!formData || !formData.name || !formData.message  || !formData.phone) {
      return 'Incomplete form data';
    }
    
    const emailValidMsg = validateEmail(formData.email)
    const nameValidMsg = validateName(formData.name)
    const mesgValidMsg = validateMessage(formData.message)
    const phoneValidMsg = validatePhone(formData.phone)

    if (emailValidMsg != null) {
      return emailValidMsg
    } 
    if (nameValidMsg != null) {
      return nameValidMsg
    } 
    if (mesgValidMsg != null) {
      return mesgValidMsg
    } 
    if (phoneValidMsg != null) {
      return phoneValidMsg
    } 


    // Sanitize input data using DOMPurify to prevent XSS attacks
    const templateParams = {
      from_name: sanitizeInput(formData.name),
      message: sanitizeInput(formData.message),
      from_email: sanitizeInput(formData.email),
      phone_number: sanitizeInput(formData.phone),
    };

    // Protect against CSRF
    if (csrfToken !== process.env.CSRF_TOKEN) {
      throw new Error('CSRF detected');
    }

    const emailParams = {
      serviceID: serviceId,
      templateID: templateId,
      publicKey: userId,
      templateParams: templateParams
    };

    // Send the email
    // UNCOMMENT WHEN EMAILJS IS SET UP
    await emailjs.send(emailParams.serviceID, emailParams.templateID, emailParams.templateParams, emailParams.publicKey);

    console.log('Email sent successfully!');
    return 'success'
    // Optionally, you can redirect the user or show a success message here
  } catch (error) {
    console.error('Error sending email:', error);
    return 'error'
    // Handle error, show an error message, or redirect the user accordingly
  }
};

const sanitizeInput = (input) => {
  // Use DOMPurify to sanitize input and prevent XSS attacks
  return DOMPurify.sanitize(input);
};

export default sendEmail;
