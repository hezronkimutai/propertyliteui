var pdata = [
  {
   "category": "Sifn fgle room",
   "name": "Houscbhfxce",
   "reason": "renfhfcbct",
   "price": "7000",
   "state": "tancbvbczania",
   "city": "arusha",
   "address": "76768",
   "map": "90800,89900",
   "description": "Very coovbvbvl house",
   "url": "../images/img3.jpg",
   "id": 3751
 },
 {
   "category": "Sifn fgle room",
   "name": "Houscbhfxce",
   "reason": "renfhfcbct",
   "price": "7000",
   "state": "tancbvbczania",
   "city": "arusha",
   "address": "76768",
   "map": "90800,89900",
   "description": "Very coovbvbvl house",
   "url": "../images/img1.jpg",
   "id": 4172
 },
 {
   "category": "",
   "name": "Houscbhfxce",
   "reason": "renfhfcbct",
   "price": "7000",
   "state": "tancbvbczania",
   "city": "arusha",
   "address": "76768",
   "map": "90800,89900",
   "description": "Very coovbvbvl house",
   "url":"../images/img2.jpg",
   "id": 2729
 }
]
function deleteProperty(id){
  window.location.href = 'profile.html'
}


function getProperties(){
  var text = "";
  var i;
  for (i = 0; i < pdata.length; i++) {
    text += '<div class="prop">'+
            `<img src=${pdata[i].url} />`+
            `<p id="update" onclick="storeP(${pdata[i].id})">${pdata[i].name}</p>`+
            `<p id="update" onclick="store(${pdata[i].id})">Update Property</p>`+
            `<p id="delete" onclick="deleteProperty(${pdata[i].id})">Delete Property</p>`+
          '</div>'
  }
  let userInfo =  `<li>${localStorage.getItem('username')}</li>
    <li>${localStorage.getItem('firstname')} ${localStorage.getItem('secondname')}</li>
    <li>${localStorage.getItem('email')}</li>
    <li>${localStorage.getItem('phonenumber')}</li>`
    document.getElementById("userInfo").innerHTML = userInfo;
      document.getElementById("featured").innerHTML = text;


    document.getElementById('ppicc').setAttribute("src", localStorage.getItem('ppc'))

}

function storeP(id){
      localStorage.setItem('thisPimg',pdata[0].url);
      localStorage.setItem('thisPdes',pdata[0].description);
      localStorage.setItem('thisPmap',pdata[0].map);
      window.location.href = 'property.html'

}

window.onload = getProperties;
