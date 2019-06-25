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


function getP(){
  console.log(localStorage.getItem('user').id);
      let dd =  `<img src="${localStorage.getItem('thisPimg')}">`+
              `<p>${localStorage.getItem('thisPdes')}</p>`+
              `<p><a href="viewmap.html">View location</a></p>`

      document.getElementById("sprop").innerHTML = dd;



}

window.onload = getP;
