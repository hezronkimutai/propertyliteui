

var mdata = [
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
   "url": "images/img3.jpg",
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
   "url": "images/img1.jpg",
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
   "url":"images/img2.jpg",
   "id": 2729
 }
]

function getProperties(){
  var text = "";
  var slides ="";
  var i;
  for (i = 0; i < mdata.length; i++) {
    text += '<div class="prop">'+
            `<img src=${mdata[i].url} />`+
        `<p id="update" onclick="storeP(${mdata[i].id})">${mdata[i].name}</p>`+
          '</div>'

    slides += `<img class="mySlides" src="${mdata[i].url}">`

  }

  if(!localStorage.getItem('token')){
    var  nav=`<li><a href="UI/properties.html">properties</a></li>
              <li><a href="UI/login.html">login</a></li>
              <li><a href="UI/signup.html">signup</a></li>`
    var  message = `<li> Invalid credentials </li>`

    document.getElementById("nav").innerHTML = nav;
  }else{
    var  nav=`<li><a href="UI/properties.html">properties</a></li>
              <li><a href="UI/post-property.html">Post property</a></li>
              <li><a href="UI/profile.html">Profile</a></li>
                  <li id = "logout" onclick="logoutUserI()">logout</li>`
    var  message = `<li> Login succesful </li>`

    document.getElementById("nav").innerHTML = nav;
  }
      document.getElementById("featured").innerHTML = text;
      document.getElementById("slides").innerHTML = slides;
    var myIndex = 0;
    carousel();

    function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
    }
}

function storeP(id){
      localStorage.setItem('thisPimg',mdata[0].url);
      localStorage.setItem('thisPdes',mdata[0].description);
      localStorage.setItem('thisPmap',mdata[0].map);
      window.location.href = 'UI/property.html'
}


window.onload = getProperties;
