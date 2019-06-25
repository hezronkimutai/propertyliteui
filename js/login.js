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
  return response.json();

 })
 .then(function(myJson) {
localStorage.setItem('token',myJson.token);
localStorage.setItem('username',myJson.data[0].username);
localStorage.setItem('firstname',myJson.data[0].firstname);
localStorage.setItem('secondname',myJson.data[0].secondname);
localStorage.setItem('email',myJson.data[0].email);
localStorage.setItem('phonenumber',myJson.data[0].phonenumber);
localStorage.setItem('user_id',myJson.data[0].id);
localStorage.setItem('ppc',myJson.data[0].profilepic);
window.location.href = '../index.html'
console.log(localStorage.getItem('ppc'))

 })
}catch(e){

  console.log(e);


}

  }
