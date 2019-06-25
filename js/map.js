function myMap() {
  console.log(localStorage.getItem('thisPmap'))
  let latitude = parseFloat(localStorage.getItem('thisPmap').split(',')[0], 10);
  let longitude = parseFloat(localStorage.getItem('thisPmap').split(',')[1], 10);
  var myLatLng = new google.maps.LatLng(latitude, longitude);

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
window.onload =  myMap;
