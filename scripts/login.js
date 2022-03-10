function login(){
  document.querySelector("form").addEventListener("submit", signin);

  var regdUsers = JSON.parse(localStorage.getItem("userDataBase"));

  function signin(event) {
    event.preventDefault();
    var user = document.getElementById("user_name").value;
    var pass = document.getElementById("user_password").value;
var count = 0;
    for (var i = 0; i < regdUsers.length; i++) {
     // console.log(regdUsers[i].userName, regdUsers[i].passwd);
      if (regdUsers[i].userName == user && regdUsers[i].passwd == pass) {
        count ++ ;
      }
    }
    if(count == 0){
      alert(`invalid Credentials`);
      window.location.href = `signup.html`;
    }else{
      alert(`login sucessful`);
      window.location.href = `index.html`;
    }
  }


}