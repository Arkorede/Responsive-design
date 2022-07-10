var form = document.getElementById("form");
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var email = document.getElementById("email");
var password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  var firstnameValue = firstname.value.trim();
  var lastnameValue = lastname.value.trim();
  var emailValue = email.value.trim();
  var passwordValue = password.value.trim();

  if (firstnameValue === "") {
    setErrorFor(firstname, "First Name cannot be empty");
  }

  if (lastnameValue === "") {
    setErrorFor(lastname, "Last Name cannot be empty");
  }

  if (emailValue === "") {
    setErrorFor(email, "Looks like this is not an email");
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be empty");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}
