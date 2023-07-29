/*
//   1. all fields must be filled
//   2. validate email field http://tobiloba.com  tobiloba  --- email doesn't exist
//   3. password must contain uppercase and a symbol, 6/7, password is weak
//   4. button route to the login/anyname  <a href="login.html">Claim free trial</a>
//   5. <a href="index.html">Sign out</a>
// */
// // Initialize the variables needed for this task
let firstName,
  lastName,
  the_email,
  the_password,
  the_claim_button,
  the_trial_button,
  the_form,
  the_intro_name

// // declared the buttons
the_form = document.querySelector('form')
the_claim_button = document.querySelector('#claim_btn')
the_trial_button = document.querySelector('#trial_btn')
the_intro_name = document.querySelector('.intro-name')

// declared the variables for the input field
firstName = document.querySelector('#first_name')
lastName = document.querySelector('#last_name')
the_email = document.querySelector('#email')
the_password = document.querySelector('#password')

// Function to store the first name in localStorage and redirect to "signup.html"
const redirectToSignup = (firstName) => {
  localStorage.setItem('userName', firstName)
  location.replace('signup.html')
}

// Function to perform input field validation and show appropriate error messages
const validateFields = () => {
  const firstName = document.getElementById('first_name')
  const lastName = document.getElementById('last_name')
  const email = document.getElementById('email')
  const password = document.getElementById('password')

  // Clear previous error messages
  const errorMessages = document.querySelectorAll('.error-message')
  errorMessages.forEach((errorMessage) => (errorMessage.textContent = ''))
  
  let isValid = true
  // Validate First Name
  if (firstName.value.trim() === '') {
    document.querySelector('.fn_lab').textContent = 'Fill in your First Name!' //display error
    document.querySelector(".fn_lab").style.color = "#FF0000";
    document.querySelector(".fn_lab").style.fontSize = "11px";
    isValid = false;
    firstName.blur();
    firstName.style.border = "1px solid red";
  }
  else {
    firstName.focus();
    firstName.style.border = "1px solid green";
  }

  // Validate Last Name
  if (lastName.value.trim() === '') {
    document.querySelector('.ln_lab').textContent = 'Fill in your Last Name!';
    document.querySelector('.ln_lab').style.color = "#FF0000";
    document.querySelector('.ln_lab').style.fontSize = "11px";
    isValid = false;
    lastName.blur();
    lastName.style.border = "1px solid red";
  }
  else {
    lastName.focus();
    lastName.style.border = "1px solid green";
  }

  // Validate Email
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (!email.value.match(emailFormat)) {
    document.querySelector('.email_lab').textContent =
      'Invalid Email! Please enter a valid email';
    document.querySelector(".email_lab").style.color = "#FF0000";
    document.querySelector(".email_lab").style.fontSize = "11px";
    isValid = false;
    email.blur();
    email.style.border = "1px solid red";
  }
  else{
    email.focus();
    email.style.border = "1px solid green";
  }

  // Validate Password
  const passwordFormat =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
  if (!password.value.match(passwordFormat)) {
    document.querySelector('.password_lab').textContent =
      'Password must contain uppercase, symbol, and be at least 6 characters';
    document.querySelector('.password_lab').style.color = "#FF0000";
    document.querySelector('.password_lab').style.fontSize = "11px";
    isValid = false;
    password.blur();
    password.style.border = "1px solid red";
  }
  else{
    password.focus();
    password.style.border = "1px solid green";
  }
  
  if (isValid) {
    redirectToSignup(firstName.value)
  }
}
const dhdhd ={
  "firstName": firstName.value //type in by the user
}

// Function for the claim button click event
const claimFunction = (e) => {
  e.preventDefault()
  validateFields()
}

the_claim_button.addEventListener('click', claimFunction) //sign in
the_trial_button.addEventListener('click', claimFunction) //try free

// console.log(window.location.href)