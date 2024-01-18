document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
   
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
   
    // Perform validation and authentication here
   
    if (email === '' || password === '') {
       alert('Email and password are required');
    } else {
       alert('Login successful');
    }
   });