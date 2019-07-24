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
        <div>
            <img src='${content.data[i].imageurl}'>
        </div>
        <div>
            <ul>
                <li>sell</li>
                <li>9500</li>
            </ul>
        </div>
    </div>`
      }
          document.getElementById("featured").innerHTML = text;
    }   
  }
  
  window.onload = getProperties;