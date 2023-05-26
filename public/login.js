const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the form data
  const formData = new FormData(form);

  try {
    // console.log(JSON.stringify(formData));
    //const { email, password } = formData;
    const email = formData.get('email');
    const password = formData.get('password');
    console.log(email);
    console.log(password);
    console.log('parms above');
    // Send the login request
    // const response = await fetch('/api/login', {
    //   method: 'POST',
    //   body: formData,
    // });

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    });

    if (response.ok) {
      // Login successful, do something (e.g., redirect to a new page)
      window.location.href = '/dashboard.html';
    } else {
      // Login failed, display the error message
      const data = await response.json();
      const errorMessage = data.error;

      const errorElement = document.querySelector('.error-message');
      errorElement.textContent = errorMessage;
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});
