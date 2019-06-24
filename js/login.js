//
//http://127.0.0.1:3000/api/v2/users/

async function loginUser(){

try{
  let user =JSON.stringify({
    'email':document.getElementById("email").value,
    'password':document.getElementById("password").value
  });
 let options = {method: "POST", body: user, headers:{"Content-Type": "application/json"}}
 fetch('https://propertyproliteapi.herokuapp.com/api/v2/users/login', options)
 .then(function(response) {
     console.log(response);
  return response.json();

 })
 .then(function(myJson) {
 console.log(myJson);
localStorage.setItem('user',myJson);
console.log(localStorage.getItem('user'));
// window.location.href = '../index.html'

 })
}catch(e){

  console.log(e);


}
console.log(localStorage.getItem('user'));

  }


// Lat long

// -1.2240615,36.900340899999996
