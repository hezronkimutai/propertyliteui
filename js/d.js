function storeP(id){
  fetch(`https://propertyproliteapi.herokuapp.com/api/v2/properties/${id}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson){
      localStorage.setItem('thisPimg',myJson.data[0].url);
      localStorage.setItem('thisPdes',myJson.data[0].description);
//       let c = localStorage.getItem('thisP')
// console.log("_________________",myJson.data[0],c)
        window.location.href = 'property.html'

    })

}


function getP(){
  ;
      let text =  `<img src="${localStorage.getItem('thisPimg')}">`+
              `<p>${localStorage.getItem('thisPdes')}</p>`+
              `<p><a href="viewmap.html">View location</a></p>`

      document.getElementById("sprop").innerHTML = text;



}

window.onload = getP;
