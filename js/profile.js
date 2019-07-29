const getProperties = async() => {
  let options = {method: "GET", headers:{"Content-Type": "application/json"}}
    const rawResponse = await fetch('https://propertyproliteapi.herokuapp.com/api/v2/property', options);
    const content = await rawResponse.json();
    console.log(content);
    if(content.status !== 200){
      return document.getElementById('error').innerHTML = content.Error
    }else{
      var myProperties = content.data.filter(function(item) {
          return item.owner == localStorage.getItem('owner');
        
      });
      var text = "";
      var i;
      for (i = 0; i < myProperties.length; i++) {
        console.log("==========",myProperties[i].id)
        text +=  `
        <div class="card">
        
        <div>
            <img src='${myProperties[i].imageurl}'>
        </div>
        <div class="flag">
        <button onclick="deleteP(${myProperties[i].id})">delete</button>
        <button onclick="getProperty(${myProperties[i].id})"><a href="property.html">Property</a></button>
            <ul>
            
                <li>sell</li>
                <li>9500</li>
            </ul>
        </div>
    </div>`
      }
      if(!localStorage.getItem('token')){
        document.getElementById("logout").style.display = 'none'
      }
          document.getElementById("featured").innerHTML = text;
    }  
          document.getElementById("featured").innerHTML = text;
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
  function deleteP(id){
   
    let options = {method: "DELETE", headers:{"Content-Type": "application/json",'Authorization':'Bearer ' + localStorage.getItem('token')}}
    fetch(`https://propertyproliteapi.herokuapp.com/api/v2/property/${id}`, options)
    .then(function(response) {
    return response.json();
    })
    .then(function(myJson) {
    console.log(myJson);
    if(myJson.status != 201){
      return document.getElementById('error').innerHTML = myJson.Error
    }else{
      window.location.href = 'profile.html'
    }
    })
    
  }
  async function getProperty(id){
    console.log("---------------",id)
    localStorage.setItem('thisPid',id );
    // window.location.href = 'property.html'
  
    
  }
  
  window.onload = getProperties;