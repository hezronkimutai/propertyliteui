
function getProperties(){
  fetch('https://propertyproliteapi.herokuapp.com/api/v2/properties')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson)
  var text = "";
  var i;
  for (i = 0; i < myJson.data.length; i++) {
    text += '<div class="prop">'+
            `<img src=${myJson.data[i].url} />`+
            `<p>${myJson.data[i].name}</p>`+
            `<p id="update" onclick="store(${myJson.data[i].id})">Update Property</p>`+
            `<p id="delete" onclick="deleteProperty(${myJson.data[i].id})">Delete Property</p>`+
          '</div>'
  }
      document.getElementById("featured").innerHTML = text;

    });
    document.getElementById('ppicc').setAttribute("src", localStorage.getItem('ppc'))
}

function deleteProperty(id){
  fetch(`https://propertyproliteapi.herokuapp.com/api/v2/properties/${id}`, {
    method: 'DELETE'
  })
  .then(res => res.text()) // OR res.json()
  .then(res => {
    console.log(res)
    window.location.href = 'profile.html'
  })


}


function getProperties(){
  fetch('https://propertyproliteapi.herokuapp.com/api/v2/properties/')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson)
  var text = "";
  var i;
  for (i = 0; i < myJson.data.length; i++) {
    text += '<div class="prop">'+
            `<img src=${myJson.data[i].url} />`+
            `<p>${myJson.data[i].name}</p>`+
            `<p id="update" onclick="store(${myJson.data[i].id})">Update Property</p>`+
            `<p id="delete" onclick="deleteProperty(${myJson.data[i].id})">Delete Property</p>`+
          '</div>'
  }
      document.getElementById("featured").innerHTML = text;

    });
    document.getElementById('ppicc').setAttribute("src", localStorage.getItem('ppc'))
}
// <li>Username: Hezzie</li>
// <li>Name: Hezron kimutai</li>
// <li>email: hez@gmail.com</li>
// <li>Phone: 0977898890</li>
window.onload = getProperties, userInfo;
