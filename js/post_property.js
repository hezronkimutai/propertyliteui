async function Submit(){
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
let options = {method: "POST", body: property, headers:{"Content-Type": "application/json"}}
fetch('https://propertyproliteapi.herokuapp.com/api/v2/properties/post-property', options)
.then(function(response) {
return response.json();
})
.then(function(myJson) {
console.log(myJson);

})
});
  }
