function storeP(id){
      window.location.href = 'property.html'
}

function getP(){
      let dd =  `<img src="${localStorage.getItem('thisPimg')}">`+
              `<p>${localStorage.getItem('thisPdes')}</p>`+
              `<p><a href="viewmap.html">View location</a></p>`

      document.getElementById("sprop").innerHTML = dd;

}

window.onload = getP;
