const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const submit = document.querySelector("button");
const form = document.querySelector("form");

function checkMatch(e) {
  if (password.value !== passwordConfirm.value) {
    e.preventDefault();
    passwordConfirm.setCustomValidity("Passwords must match.");
    passwordConfirm.reportValidity();
  } else {
    passwordConfirm.setCustomValidity("");
  }
}

form.onsubmit = checkMatch;