
function getProperties(){
  fetch('https://propertyproliteapi.herokuapp.com/api/v2/properties')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
  var text = "";
  var i;
  for (i = 0; i < myJson.data.length; i++) {
    text += '<div class="prop">'+
            `<a href='UI/property.html'>`+
            `<img src=${myJson.data[i].url} />`+
            `<p>${myJson.data[i].name}</p>`
            +'</a>'+
          '</div>'
  }
      document.getElementById("featured").innerHTML = text;

    });
}
window.onload = getProperties;
