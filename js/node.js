// Get modal element
var modal = document.getElementById("simpleModal");
// Get open modal button
var modalBtn = document.getElementById("msgButton");
// Get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];
// Get the Boheman Video
var video = document.getElementById("Boheman-video");

// for the login form
// Get  the modal element
var loginForm = document.getElementById("login-form");
// Get the modal button
var formOpenBtn = document.getElementsByClassName("msgButton")[1];
// Get the close button of the login form
var closeF = document.getElementById("close");
// Get the submit button of the login form
var submitForm = document.getElementById("submit");

// listen for a open/ appear click
modalBtn.addEventListener("click", openModal);
// listen for a close/disappear click
closeBtn.addEventListener("click", closeModal);
// listen to outside click
window.addEventListener("click", clickOutside);

// function to open modal
function openModal() {
  modal.style.display = "block";
  video.style.display = "none";
}

// function to close modal
function closeModal() {
  modal.style.display = "none";
  video.style.display = "block";
}

// function to close modal if outside click
function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
    video.style.display = "block";
  }
}

// listen for open click
formOpenBtn.addEventListener("click", openLogin);
// listen for close button click
closeF.addEventListener("click", closeForm);
// listen for outside click from line
window.addEventListener("click", clickOutsideForm);
// Listen for the click on the submit button of the login form
submitForm.addEventListener("click", submitMsg);

// function to open login form when clicked
function openLogin() {
  loginForm.style.display = "block";
}

// function to close the form
function closeForm() {
  loginForm.style.display = "none";
  // resets the entry entered in login
  document.getElementById("form-modal-content").reset();
}

// function to close the form on outside click
function clickOutsideForm(e) {
  if (e.target == loginForm) {
    loginForm.style.display = "none";
  }
}
// function that gives message when submit is pressed
function submitMsg() {
  // Get the input types of the login form
  var name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  if (name == "" || email == "") {
    alert("empty");
  } else {
    alert("You will be logged in soon!");
  }
}

// for the login form
// Get  the modal element
var loginForm = document.getElementById("login-form");
// Get the modal button
var formOpenBtn = document.getElementsByClassName("msgButton")[1];
// Get the close button of the login form
var closeF = document.getElementById("close");
// Get the submit button of the login form
var submitForm = document.getElementById("submit");

// listen for open click
formOpenBtn.addEventListener("click", openLogin);
// listen for close button click
closeF.addEventListener("click", closeForm);
// listen for outside click from line
window.addEventListener("click", clickOutsideForm);
// Listen for the click on the submit button of the login form
submitForm.addEventListener("click", submitMsg);

// function to open login form when clicked
function openLogin() {
  loginForm.style.display = "block";
}

// function to close the form
function closeForm() {
  loginForm.style.display = "none";
  // resets the entry entered in login
  document.getElementById("form-modal-content").reset();
}

// function to close the form on outside click
function clickOutsideForm(e) {
  if (e.target == loginForm) {
    loginForm.style.display = "none";
  }
}
// function that gives message when submit is pressed
function submitMsg() {
  // Get the input types of the login form
  var name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  if (name == "" || email == "") {
    alert("empty");
  } else {
    alert("You will be logged in soon!");
  }
}
