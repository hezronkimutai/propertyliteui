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
        text += '<div class="prop">'+
                `<img src=${content.data[i].url} />`+
                `<p id="update" onclick="storeP(${content.data[i].id})">${content.data[i].name}</p>`+
                `<p id="update" onclick="store(${content.data[i].id})">Update Property</p>`+
                `<p id="delete" onclick="deleteProperty(${content.data[i].id})">Delete Property</p>`+
              '</div>'
      }
          document.getElementById("featured").innerHTML = text;
    }   
  }
  
  window.onload = getProperties;