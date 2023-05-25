function validateForm() {
    const email = document.getElementById("admin_email").value;
    const password = document.getElementById("admin_password").value;
  
    if (email === "") {
      alert("Email is required.");
      return false;
    } else if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (password === "") {
      alert("Password is required.");
      return false;
    } else if (!isValidPassword(password)) {
      alert("Password must contain at least 8 characters.");
      return false;
    }
  
    return true;
  }
  
  function isValidEmail(email) {
    // Basic email validation using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidPassword(password) {
    return password.length >= 8;
  }
