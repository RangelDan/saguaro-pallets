const validateName = (name) => {
    // Check if name is provided and is at least 2 characters long
    if (!name || name.length < 2) {
      return 'Name must be at least 2 characters long';
    }
    return null;
  };
  
  const validateEmail = (email) => {
    // Check if email is provided and is valid format
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Invalid email format';
    }
    return null;
  };
  
  const validateMessage = (message) => {
    // Check if message is provided and does not exceed 250 characters
    if (!message || message.length > 600) {
      return 'Message must be provided and should not exceed 600 characters';
    }
    return null;
  };

  const validatePhone = (phone) => {
    // Check if Phone is provided and is at least 2 characters long
    if (!phone || phone.length < 10) {
      return 'Invalid phone number';
    }
    return null;
  };
  
  export { validateName, validateEmail, validateMessage, validatePhone };
  