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
window.location.href = 'login.html'
}
