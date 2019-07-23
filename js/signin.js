async function signin(){
  let user =JSON.stringify({
    'email':document.getElementById("email").value,
    'password':document.getElementById("password").value
  });
  let options = {method: "POST", body: user, headers:{"Content-Type": "application/json"}}
    const rawResponse = await fetch('https://propertyproliteapi.herokuapp.com/api/v2/auth/signin', options);
    const content = await rawResponse.json();
    console.log(content);
    if(content.status !== 201){
      return document.getElementById('error').innerHTML = content.Error
    }else{
      window.location.href = '../index.html'
    }   
  }
  