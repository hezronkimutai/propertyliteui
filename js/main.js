const getProperties = async() => {
  let options = {method: "GET", headers:{"Content-Type": "application/json"}}
    const rawResponse = await fetch('https://propertyproliteapi.herokuapp.com/api/v2/property', options);
    const content = await rawResponse.json();
    console.log(content);
    if(content.status !== 200){
      return document.getElementById('error').innerHTML = content.Error
    }else{
      var text = "";
      var i;
      for (i = 0; i < content.data.length; i++) {
        text +=  `<div class="card">
        <div class="img">
            <img src='${content.data[i].imageurl}'>
        </div>
        <div class="flag">
            <ul>
                <li>sell</li>
                <li>9500</li>
            </ul>
        </div>
    </div>`
      }
      if(localStorage.getItem('token')){
        document.getElementById("loggedout").style.display = 'none'
        document.getElementById("loggedoutI").style.display = 'none'
        document.getElementById("loggedout1").style.display = 'none'
        document.getElementById("loggedoutI1").style.display = 'none'
      }else{
        document.getElementById("loggedin").style.display = 'none'
        document.getElementById("logout").style.display = 'none'
        document.getElementById("loggedin1").style.display = 'none'
        document.getElementById("logout1").style.display = 'none'
      }
          document.getElementById("featured").innerHTML = text;
    }   
  }
  function media(){
   
    if(document.getElementById("nav-small-screen").style.display == 'none'){
      document.getElementById("nav-small-screen").style.display = 'block'
      window.scrollTo(-20, -20);
    }else{
      document.getElementById("nav-small-screen").style.display = 'none'
      window.scrollTo(-20, -20);
    }
    
  }

  window.onload = getProperties;