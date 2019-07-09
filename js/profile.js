//
// function getProperties(){
//   fetch('https://propertyproliteapi.herokuapp.com/api/v2/properties')
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(myJson) {
//       console.log(myJson)
//   var text = "";
//   var i;
//   for (i = 0; i < myJson.data.length; i++) {
//     text += '<div class="prop">'+
//             `<img src=${myJson.data[i].url} />`+
//             `<p>${myJson.data[i].name}</p>`+
//             // `<p id="update" onclick="store(${myJson.data[i].id})">Update Property</p>`+
//             `<p id="delete" onclick="deleteProperty(${myJson.data[i].id})">Delete Property</p>`+
//           '</div>'
//   }
//       document.getElementById("featured").innerHTML = text;
//
//     });
//     document.getElementById('ppicc').setAttribute("src", localStorage.getItem('ppc'))
// }

function deleteProperty(id){
  fetch(`https://propertyproliteapi.herokuapp.com/api/v1/properties/${id}`, {
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
    console.log("---------------------")
    text += '<div class="prop">'+
            `<img src=${myJson.data[i].url} />`+
            `<p id="update" onclick="storeP(${myJson.data[i].id})">${myJson.data[i].name}</p>`+
            `<p id="update" onclick="store(${myJson.data[i].id})">Update Property</p>`+
            `<p id="delete" onclick="deleteProperty(${myJson.data[i].id})">Delete Property</p>`+
          '</div>'
  }
  let userInfo =  `<li>${localStorage.getItem('username')}</li>
    <li>${localStorage.getItem('firstname')} ${localStorage.getItem('secondname')}</li>
    <li>${localStorage.getItem('email')}</li>
    <li>${localStorage.getItem('phonenumber')}</li>`
    document.getElementById("userInfo").innerHTML = userInfo;
      document.getElementById("featured").innerHTML = text;

    });


    document.getElementById('ppicc').setAttribute("src", localStorage.getItem('ppc'))

}

function storeP(id){
  console.log(id)
  fetch(`https://propertyproliteapi.herokuapp.com/api/v2/properties/${id}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson){
      localStorage.setItem('thisPimg',myJson.data[0].url);
      localStorage.setItem('thisPdes',myJson.data[0].description);
      localStorage.setItem('thisPmap',myJson.data[0].map);
//       let c = localStorage.getItem('thisP')
// console.log("_________________",myJson.data[0],c)
        window.location.href = 'property.html'

    })

}

window.onload = getProperties;
