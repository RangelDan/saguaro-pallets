const validateName = (name) => {
    // Check if name is provided and is at least 2 characters long
    if (!name || name.length < 2) {
      return 'Name must be at least 2 characters long';
    }
    return null; // Validation passed
  };
  
  const validateEmail = (email) => {
    // Check if email is provided and is valid format
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Invalid email format';
    }
    return null; // Validation passed
  };
  
  const validateMessage = (message) => {
    // Check if message is provided and does not exceed 250 characters
    if (!message || message.length > 600) {
      return 'Message must be provided and should not exceed 600 characters';
    }
    return null; // Validation passed
  };
  
  export { validateName, validateEmail, validateMessage };
  