async function loginUser(){
let user =JSON.stringify({
  'email':document.getElementById("email").value,
  'password':document.getElementById("password").value
});
 console.log(user);
let options = {method: "POST", body: user, headers:{"Content-Type": "application/json"}}
fetch('https://propertyproliteapi.herokuapp.com/api/v2/users/login', options)
.then(function(response) {
return response.json();
})
.then(function(myJson) {
console.log(myJson);

})
  }
