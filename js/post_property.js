async function createProperty(){
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

console.log(myJson);
window.location.href = 'profile.html'

  }
