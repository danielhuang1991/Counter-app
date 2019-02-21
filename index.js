window.onload = function() {
  document.getElementById("signup").onclick = function() {
    fnLogin();
  };
};

function fnLogin() {
  var fname = document.getElementById("inputFN");
  var lname = document.getElementById("inputLN");
  var pass = document.getElementById("inputPassword");
  var cpass = document.getElementById("ConfirmPassword");
  var email = document.getElementById("inputEmail");

  var pass1 = document.getElementById("inputPassword").value;
  var cpass1 = document.getElementById("ConfirmPassword").value;
  var checkbox = document.getElementById("gridCheck");

  if (!checkbox.checked) {
    alert("Please accpet and check before submit the sign-up form!");
    return;
  }

  if (fname.value.length > 10 || fname.value.length < 1) {
    fname.style.backgroundColor = "red";
    window.alert("Please enter 1-10 characters for the First name!");
    return;
  }

  if (lname.value.length > 10 || lname.value.length < 1) {
    lname.style.backgroundColor = "red";
    window.alert(" Please enter 1-10 characters for the Last name!");
    return;
  }

  if (email.value.length < 1) {
    email.style.backgroundColor = "red";
    window.alert("Please enter email address!");
    return;
  }
  if (email.value != "") {
    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    isok = reg.test(email.value);
    if (!isok) {
      alert("The mailbox format is incorrect, please re-enter!");
      email.style.backgroundColor = "red";
      return false;
    }
  }
  if (pass.value.length > 20 || pass.value.length < 6) {
    pass.style.backgroundColor = "red";
    window.alert("Please enter 6-20 characters for the password!");
    return;
  }
  if (cpass.value.length > 20 || cpass.value.length < 6) {
    cpass.style.backgroundColor = "red";
    window.alert("Please enter 6-20 characters for the password!");
    return;
  }

  if (cpass1 != pass1) {
    window.alert("Password doesn't match");
    pass.style.backgroundColor = "red";
    cpass.style.backgroundColor = "red";
    return;
  }

  window.alert("Form is successfully submitted");
}

function myFunctionfoucs1() {
  var fname = document.getElementById("inputFN");
  fname.style.background = "white";
}
function myFunctionfoucs2() {
  var lname = document.getElementById("inputLN");
  lname.style.background = "white";
}

function myFunctionfoucs4() {
  var pass = document.getElementById("inputPassword");
  pass.style.background = "white";
}

function myFunctionfoucs5() {
  var cpass = document.getElementById("ConfirmPassword");
  cpass.style.background = "white";
}

function myFunctionfoucs3() {
  var email = document.getElementById("inputEmail");
  email.style.background = "white";
}
