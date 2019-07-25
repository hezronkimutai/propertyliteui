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
let options = {method: "POST", body: property, headers:{"Content-Type": "application/json",'Authorization':'Bearer ' + localStorage.getItem('token')}}
fetch('https://propertyproliteapi.herokuapp.com/api/v2/property', options)
.then(function(response) {
return response.json();
})
.then(function(myJson) {
console.log(myJson);
if(myJson.status !== 201){
  return document.getElementById('error').innerHTML = myJson.Error
}else{
  window.location.href = 'profile.html'
}
})
});
  }
