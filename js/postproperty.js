async function createProperty(){
  let imageurl = document.getElementById("imageurl").files[0];
  url = 'https://api.cloudinary.com/v1_1/hezzie/image/upload';
  uploadPreset = 'cieprwth';
  let fd = new FormData();
  fd.append("upload_preset", uploadPreset);
  fd.append("file", imageurl);
  config = {headers: { "X-Requested-With": "XMLHttpRequest" },method: "POST", body: fd};
  fetch(url, config)
  .then(function(response) {
  return response.json();
  })
  .then(function(myJson) {
  let property =JSON.stringify({
  imageurl:myJson.secure_url,
  'type':document.getElementById("type").value,
  'price':document.getElementById("price").value,
  'state':document.getElementById("state").value,
  'city':document.getElementById("city").value,
  'address':document.getElementById("address").value
});
console.log(property);
let options = {method: "POST", body: property, headers:{"Content-Type": "application/json",'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3RuYW1lIjoiaGV6cm9uIiwibGFzdG5hbWUiOiJraW11dGFpIiwidXNlcm5hbWUiOiJoanV5ZSIsImVtYWlsIjoiaGl1dWpAZ21haWwuY29tIiwicGhvbmVudW1iZXIiOiI4Nzc4Nzg4ODg4IiwiYWRkcmVzcyI6Ijk3OTc5MDc5MCIsImlzYWRtaW4iOnRydWUsInBhc3N3b3JkIjoiJDJiJDEwJHg2ZG45VC9oQVV1NWVlbHU4cFU1bS5TNXBIcWNuNDIuU3p3SmhIeGpOWE5Nd0FybzdSM0QyIiwicHJvZmlsZXBpYyI6bnVsbCwiY3JlYXRlZG9uIjoiMjAxOS0wNy0xOVQwNjozNjozOC44MDFaIiwiaWF0IjoxNTYzOTc5NDI4LCJleHAiOjE1NjQwNjU4Mjh9.1cg5nClANTdMlT6E-z_L0i0yd_17N9MQNCvrgSqNM7w'}}
fetch('https://propertyproliteapi.herokuapp.com/api/v2/property', options)
.then(function(response) {
return response.json();
})
.then(function(myJson) {
console.log(myJson);
// window.location.href = 'profile.html'

})
});
  }
