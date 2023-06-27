// Initialize the variables needed for this task
let firstName, lastName, the_email, the_password, the_claim_button, the_trial_button;

// declared the variables
firstName = document.querySelector("#first_name");
lastName = document.querySelector("#last_name").value;
the_email = document.querySelector("#email").value;
the_password = document.querySelector("#password").value;
the_claim_button = document.querySelector("#claim_btn");
the_trial_button = document.querySelector("#trial_btn");


function claimFunction(e) {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}!\nYour details have been verified!`)
}
the_claim_button.addEventListener("click", claimFunction);

// Trial plan
function tryFunction() {
  alert(`Thank you for signing up to the 7 days trial plan.`);
}

the_trial_button.addEventListener("click", tryFunction);