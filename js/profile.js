
function getProperties(){
  fetch('http://localhost:3000/api/v1/properties')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson)
  var text = "";
  var i;
  for (i = 0; i < myJson.length; i++) {
    text += '<div class="prop">'+
            `<a href='UI/property.html'>`+
            `<img src=${myJson[i].url} />`+
            `<p>${myJson[i].name}</p>`
            +'</a>'+
          '</div>'
  }
      document.getElementById("featured").innerHTML = text;

    });
}
window.onload = getProperties;
