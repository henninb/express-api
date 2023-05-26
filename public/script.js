var xhr = new XMLHttpRequest();
xhr.open('GET', '/api/cookie', true);
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      var response = xhr.responseText;
      console.log(response);
    } else {
      // Handle error response
    }
  }
};
xhr.send();

// Add this JavaScript code to your script.js file or include it inline in your HTML file

// Get the form element
// const form = document.querySelector('form');
//
// form.addEventListener('submit', async (event) => {
//   event.preventDefault(); // Prevent the form from submitting normally
//
//   // Get the form data
//   const formData = new FormData(form);
//
//   try {
//     // Send the login request
//     const response = await fetch('/api/login', {
//       method: 'POST',
//       body: formData,
//     });
//
//     if (response.ok) {
//       // Login successful, do something (e.g., redirect to a new page)
//       window.location.href = '/dashboard';
//     } else {
//       // Login failed, display the error message
//       const data = await response.json();
//       const errorMessage = data.error;
//
//       const errorElement = document.querySelector('.error-message');
//       errorElement.textContent = errorMessage;
//     }
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// });

// // Add a submit event listener to the form
// form.addEventListener('submit', async (event) => {
//   event.preventDefault(); // Prevent the form from submitting normally
//
//   // Get the form data
//   const formData = new FormData(form);
//
//   try {
//     // Send the login request
//     const response = await fetch('/api/login', {
//       method: 'POST',
//       body: formData,
//     });
//
//     if (response.ok) {
//       // Login successful, do something (e.g., redirect to a new page)
//       window.location.href = '/dashboard';
//     } else {
//       // Login failed, display the error message
//       const data = await response.json();
//       const errorMessage = data.error;
//
//       const errorElement = document.querySelector('.error-message');
//       errorElement.textContent = errorMessage;
//     }
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// });
