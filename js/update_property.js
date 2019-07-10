function store(id){
localStorage.setItem('id',id);
console.log(localStorage.getItem('id'));
window.location.href = 'update-property.html';
}
function updateProperty(){

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
window.location.href = 'profile.html'
}
