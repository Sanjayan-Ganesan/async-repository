
function main(){


document.querySelector("form").addEventListener("submit", formSubmit);
var userStack = JSON.parse(localStorage.getItem("userDataBase")) || [];
function formSubmit(event) {
  event.preventDefault();
  var user = document.getElementById("name").value;
  var mbl = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;

  var userData = {
    emailAdd: email,
    passwd: pass,
    userName: user,
    mblNum: mbl,
  };

  userStack.push(userData);

  console.log(userStack);
  localStorage.setItem("userDataBase", JSON.stringify(userStack));
  alert("signup success");
  window.location.href = "login.html";
}
}

