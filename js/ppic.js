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
localStorage.setItem('ppc',myJson.secure_url);

})


}
