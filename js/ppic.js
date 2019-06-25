function updatePpic(){
  let p = document.getElementById("avatar");
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
localStorage.setItem('ppc',);

let ppic =JSON.stringify({
  'url':myJson.secure_url
});

let options = {method: "PATCH", body: ppic, headers:{"Content-Type": "application/json"}}
fetch(`https://propertyproliteapi.herokuapp.com/api/v2/users/${localStorage.getItem('user_id')}`, options)
.then(function(response) {
return response.json();
})
.then(function(myJson) {

window.location.href = 'profile.html'

})

})


}