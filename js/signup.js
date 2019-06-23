async function createUser(){
let user =JSON.stringify({
  'firstName':document.getElementById("firstName").value,
  'secondName':document.getElementById("secondName").value,
  'userName':document.getElementById("userName").value,
  'email':document.getElementById("email").value,
  'phoneNumber':document.getElementById("phoneNumber").value,
  'password':document.getElementById("password").value,
  'confirmPassword':document.getElementById("confirmPassword").value
});
 console.log(user);
let options = {method: "POST", body: user, headers:{"Content-Type": "application/json"}}
fetch('https://propertyproliteapi.herokuapp.com/api/v2/users/signup', options)
.then(function(response) {
return response.json();
})
.then(function(myJson) {
console.log(myJson);
window.location.href = 'login.html'

})
  }
