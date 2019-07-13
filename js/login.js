var ldata= {
    "firstName": "hezron",
    "secondName": "kimutai",
    "userName": "hezzie",
    "email": "hez@gmail.com",
    "phoneNumber": "0937892356",
    "password": "reqfhgtfhfgjfg",
    "profilePic": "",
    "id": 3742,
    "token": "reqfhgtfhfgjfg"
  }
async function loginUser(){

try{
  let user =JSON.stringify({
    'email':document.getElementById("email").value,
    'password':document.getElementById("password").value
  });
localStorage.setItem('token',ldata.token);
localStorage.setItem('username',ldata.username);
localStorage.setItem('firstname',ldata.firstname);
localStorage.setItem('secondname',ldata.secondname);
localStorage.setItem('email',ldata.email);
localStorage.setItem('phonenumber',ldata.phonenumber);
localStorage.setItem('user_id',ldata.id);
localStorage.setItem('ppc',ldata.profilepic);
window.location.href = '../index.html'
console.log(localStorage.getItem('ppc'))

}catch(e){

  console.log(e);


}

  }
