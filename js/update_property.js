function store(id){
localStorage.setItem('id',id);
console.log(localStorage.getItem('id'));
window.location.href = 'update-property.html';
}
function updateProperty(){
  let p = document.getElementById("propImg");
  let propImg = p.files[0];
  url = 'https://api.cloudinary.com/v1_1/hezzie/image/upload';
  uploadPreset = 'cieprwth';
  let fd = new FormData();
  fd.append("upload_preset", uploadPreset);
  fd.append("file", propImg);
  config = {headers: { "X-Requested-With": "XMLHttpRequest" },method: "POST", body: fd};

fetch(url, config)
.then(function(response) {
return response.json();
})
.then(function(myJson) {
let property =JSON.stringify({
  url:myJson.secure_url,
  'category':document.getElementById("category").value,
  'name':document.getElementById("name").value,
  'reason':document.getElementById("reason").value,
  'price':document.getElementById("price").value,
  'state':document.getElementById("state").value,
  'city':document.getElementById("city").value,
  'address':document.getElementById("address").value,
  'map':document.getElementById("map").value,
  'description':document.getElementById("description").value
});
 console.log(property);
let options = {method: "PUT", body: property, headers:{"Content-Type": "application/json"}}
fetch(`https://propertyproliteapi.herokuapp.com/api/v1/properties/${localStorage.getItem('id')}`, options)
.then(function(response) {
return response.json();
})
.then(function(myJson) {
console.log(myJson);
localStorage.removeItem('id');
window.location.href = 'profile.html'

})
});
}
