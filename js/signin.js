const parseJwt = (token) => {
    const base64HeaderUrl = token.split('.')[0];
    const base64Header = base64HeaderUrl.replace('-', '+').replace('_', '/');
    const headerData = JSON.parse(window.atob(base64Header));

    // Get Token payload and date's
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const dataJWT = JSON.parse(window.atob(base64));
    dataJWT.header = headerData;

// TODO: add expiration at check ...


    return dataJWT;

}

const signin = async() => {
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
      const jwtDecoded = parseJwt(content.token) ;
      localStorage.setItem('token',content.token );
      if(jwtDecoded)
      {
          console.log(jwtDecoded)
          localStorage.setItem('owner',jwtDecoded.id );
          
      }   
      window.location.href = '../index.html'
    }   
  }
  