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
