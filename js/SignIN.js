// const form = document.getElementById('form');
// const email = document.getElementById('admin_email');
// const password = document.getElementById('admin_password');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     validateInputs();
// });

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInputs = () => {
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
    
//     if(usernameValue === '') {
//         setError(username, 'Username is required');
//     } else {
//         setSuccess(username);
//     }

//     if(emailValue === '') {
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     } else {
//         setSuccess(email);
//     }

//     if(passwordValue === '') {
//         setError(password, 'Password is required');
//     } else if (passwordValue.length < 8 ) {
//         setError(password, 'Password must be at least 8 character.')
//     } else {
//         setSuccess(password);
//     }

// };

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