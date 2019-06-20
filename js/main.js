
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


function myMap() {
  var myLatLng = new google.maps.LatLng(51.508742,-0.120850);

var mapProp= {
  center:myLatLng,
  zoom:5,
};
var pam =document.getElementById("googleMap")
var map = new google.maps.Map(pam,mapProp);
var marker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  title: 'Hello World!'
});
}

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
window.onload = getProperties,myMap, carousel;
