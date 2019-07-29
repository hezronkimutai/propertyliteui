

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
      <div class="roww" id="roww">
        <input type="text" id="type" name="type" placeholder="Your type.." required>
        <button onclick="updatePP(${content.data.id})">submit</button>
    </div>
    <div class="rowww" id="rowww">
    <input type="text" id="address" name="address" placeholder="Your address.." required>
    <button onclick="updatePP(${content.data.id})">submit</button>
</div>
      <div>
          <img src='${content.data.imageurl}'>
      </div>
      <div class="flag">
      <button onclick="deleteP(${content.data.id})">delete</button>
      <button onclick="getProperty(${content.data.id})"><a href="property.html">Property</a></button>
          <ul>
          
              <li>${content.data.type} <button onclick="updateP(${content.data.id})">edit</button></li>
              <li>${content.data.price} <button onclick="updatePPP(${content.data.id})">edit</button></li>
          </ul>
      </div>
  </div>`
    }
    if(!localStorage.getItem('token')){
      document.getElementById("logout").style.display = 'none'
    }
        document.getElementById("featured").innerHTML = text;
  }  
   function updateP(id){
    if(document.getElementById("roww").style.display == 'none'){
      document.getElementById("roww").style.display = 'block'
    }else{
      document.getElementById("roww").style.display = 'none'
    }
   }
   function updatePPP(id){
    if(document.getElementById("rowww").style.display == 'none'){
      document.getElementById("rowww").style.display = 'block'
    }else{
      document.getElementById("rowww").style.display = 'none'
    }
   }
   function updatePP(id){
    let property ={
      'type':document.getElementById("type").value,
      'address':document.getElementById("address").value
    };
    let l ={}
    let lucky = Object.keys(property).filter(function(key) {
      if(property[key] !=""){
        return key
      }
    });
    lucky.forEach(e => {
      l[e] = property[e]
    });
    let options = {method: "PATCH", body: JSON.stringify(l), headers:{"Content-Type": "application/json",'Authorization':'Bearer ' + localStorage.getItem('token')}}
fetch(`https://propertyproliteapi.herokuapp.com/api/v2/property/${id}`, options)
window.location.href = 'property.html'
   }
window.onload = getP;
