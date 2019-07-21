const createUser = async() => {
let user =JSON.stringify({
  'firstname':document.getElementById("firstname").value,
  'lastname':document.getElementById("lastname").value,
  'username':document.getElementById("username").value,
  'email':document.getElementById("email").value,
  'phonenumber':document.getElementById("phonenumber").value,
  'address':document.getElementById('address').value,
  'password':document.getElementById("password").value,
  'confirmpassword':document.getElementById("confirmpassword").value
});
let options = {method: "POST", body: user, headers:{"Content-Type": "application/json"}}
  const rawResponse = await fetch('https://propertyproliteapi.herokuapp.com/api/v2/auth/signup', options);
  const content = await rawResponse.json();
  console.log(content);
  if(content.status !== 201){
    return document.getElementById('error').innerHTML = content.Error
  }else{
    window.location.href = 'signin.html'
  }
  
  
}
