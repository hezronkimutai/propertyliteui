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
        text +=  `<div class="card">
        <div>
            <img src='${myProperties[i].imageurl}'>
        </div>
        <div class="flag">
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
  
  
  window.onload = getProperties;