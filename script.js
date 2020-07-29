const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwor2 = document.getElementById("passwor2");


// Show input error massege
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show input succsess massege
function showSuccsess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check email is valid

function checkEmail(imput) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(imput.value.trim())) {
    showSuccsess(imput);
  } else {
    showError(imput, "Email is not valid");
  }


}

// checkFilds

function checkRequired(imputArr) {
  imputArr.forEach(function(imput) {
    if (imput.value.trim() === "") {
      showError(imput, `${ getFildName(imput) } Is required`);
    } else {
      showSuccsess(imput);
    }
  });
}


// Check length function

function checkLendth(imput, min, max) {
  if (imput.value.length < min) {
    showError(imput, `${ getFildName(imput) } must be longer then ${min}`);
  } else if (imput.value.length > max) {
    showError(imput, `${ getFildName(imput) } can't be longer then ${max}`);
  } else {
    showSuccsess(imput);
  }
}

// Check passwords mathc

function checkPasswodsMatch(imput1, imput2) {
  if (imput1.value !== imput2.value) {
    showError(imput2, "Passwords not match");
  } else {
    showSuccsess(imput2);
  }
}


// Get imput name wich first latter  Upper case

function getFildName(imput) {
  return imput.id.charAt(0).toUpperCase() + imput.id.slice(1);
}


// Event Listeners

form.addEventListener("submit", function(e) {
  event.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLendth(username, 3, 10);
  checkLendth(password, 6, 12);
  checkEmail(email);
  checkPasswodsMatch(password, password2);

});