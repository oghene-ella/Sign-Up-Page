/*
  1. all fields must be filled
  2. validate email field http://tobiloba.com  tobiloba  --- email doesn't exist
  3. password must contain uppercase and a symbol, 6/7, password is weak
  4. button route to the login/anyname  <a href="login.html">Claim free trial</a>
  5. <a href="index.html">Sign out</a>
*/

// Initialize the variables needed for this task
let firstName,
  lastName,
  the_email,
  the_password,
  the_claim_button,
  the_trial_button,
  the_form

// declared the buttons
the_form = document.querySelector("form");
the_claim_button = document.querySelector("#claim_btn");
the_trial_button = document.querySelector("#trial_btn");

// created a function for the claim button
const claimFunction = (e) => {
  e.preventDefault();

  // declared the variables for the input field
  firstName = document.querySelector("#first_name");
  lastName = document.querySelector("#last_name");
  the_email = document.querySelector("#email");
  the_password = document.querySelector("#password");

  // if the first name and last name is empty
  if (firstName.value === "" || lastName.value === "") {
    // declaring the variable for the empty field
    let fn_label = document.querySelector(".fn_lab");
    fn_label.textContent = `Fill in your First Name!`;

    // styling it
    fn_label.style.color = "#FF0000";
    fn_label.style.fontSize = "11px";
    // .style.padding = "50px 10px 20px 30px";

    if (lastName.value === "") {
      // declaring the variable for the empty field
      let ln_label = document.querySelector(".ln_lab");
      ln_label.textContent = `Fill in your Last Name!`;
      ln_label.style.color = "#FF0000";
      ln_label.style.fontSize = "11px";
    }
  } 
  
  // if the email and password is empty
  else if (the_email.value === "" || the_password.value === "") {
    // declaring the variable for the empty field
    let email_label = document.querySelector(".email_lab");
    email_label.textContent = `Fill in your Email Address!`;
    email_label.style.color = "#FF0000";
    email_label.style.fontSize = "11px";

    if (the_password.value === "") {
      // declaring the variable for the empty field
      let password_label = document.querySelector(".password_lab");
      password_label.textContent = `Fill in your password!`;
      password_label.style.color = "#FF0000";
      password_label.style.fontSize = "11px";
    }
  }

  // if the input fields are not empty
  else if (
    firstName.value !== "" &&
    lastName.value !== "" &&
    the_email.value !== "" &&
    the_password.value !== ""
  ) {
    // changing the label for the first & last name
    let fn_label = document.querySelector(".fn_lab");
    fn_label.textContent = `Nice First Name!`;
    fn_label.style.color = "#008000";
    fn_label.style.fontSize = "11px";

    let ln_label = document.querySelector(".ln_lab");
    ln_label.textContent = `Nice Last Name!`;
    ln_label.style.color = "#008000";
    ln_label.style.fontSize = "11px";

    // checking for the strength and weakness of the password
    the_password = the_password.value;
    console.log(the_password.length);

    // initialize the password label
    let password_label = document.querySelector(".password_lab");

    if (the_password.length <= 7) {
      // declare the password label
      password_label.textContent = `Password is too weak! Try again!`;
      password_label.style.color = "#FF0000";
      password_label.style.fontSize = "11px";
    } else {
      password_label.textContent = `Password is very strong! Nice one!`;
      password_label.style.color = "#008000";
      password_label.style.fontSize = "11px";
    }

    // checking if its the right email format
    the_email = the_email.value;
    console.log(the_email);

    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // initialize the email label
    let email_label = document.querySelector(".email_lab");

    if (the_email.match(mailFormat)) {
      email_label.textContent = `You have entered a valid Email`;
      email_label.style.color = "#008000";
      email_label.style.fontSize = "11px";
    } else {
      email_label.textContent = `Invalid Email! Please enter a valid email`;
      email_label.style.color = "#FF0000";
      email_label.style.fontSize = "11px";
    }

    location.replace("signup.html");
    firstName = firstName.value;
    console.log("First Name: " + firstName)
    let myName = document.querySelector(".my-name");
    myName.textContent = `Hello ${firstName}, Welcome🌹`
  }
  // to reset the form after submission
  // the_form.reset();
}

// added an event listener to the claim button
the_claim_button.addEventListener("click", claimFunction);



// created a function for the trial button
const trialFunction = (e) => {
  e.preventDefault();
  location.replace("signup.html");
  firstName = firstName.value;
  console.log("First Name: " + firstName);
  let myName = document.querySelector(".my-name");
  myName.textContent = `Hello ${firstName}, Welcome🌹`;
}
the_trial_button.addEventListener("click", trialFunction);