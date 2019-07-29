

async function getP(){
  console.log("------------------",localStorage.getItem('thisPid'))
  let options = {method: "GET", headers:{"Content-Type": "application/json"}}
  const rawResponse = await fetch(`https://propertyproliteapi.herokuapp.com/api/v2/property/${localStorage.getItem('thisPid')}`, options);
  const content = await rawResponse.json();
  console.log(content.data);
  if(content.status !== 200){
    return document.getElementById('error').innerHTML = content.Error
  }else{
  
    var text = "";
      text +=  `
      <div class="card">
      
      <div>
          <img src='${content.data.imageurl}'>
      </div>
      <div class="flag">
      <button onclick="deleteP(${content.data.id})">delete</button>
      <button onclick="getProperty(${content.data.id})"><a href="property.html">Property</a></button>
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
   
window.onload = getP;
