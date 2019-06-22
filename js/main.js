
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}



function getProperties(){
  fetch('https://propertyproliteapi.herokuapp.com/api/v2/properties')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson.data)
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
window.onload = getProperties, carousel;
