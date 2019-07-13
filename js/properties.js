var prdata = [
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
function getProperties(){
  var text = "";
  var categories="";
  var i;
  for (i = 0; i < prdata.length; i++) {
    text += '<div class="prop">'+
            `<img src=${prdata[i].url} >`+
            `<p id="update" onclick="storeP(${prdata[i].id})">${prdata[i].name}</p>`+
            `</p></div>`

    categories +=`<a href="#">`+
                  prdata[i].category +
                  `</a>`

    // console.log(prdata[i]);
  }



  if(!localStorage.getItem('token')){
    var  nav=`<li>
                <div class="dropdown">
                  <div class="dropbtn">Categories</div>
                  <div class="dropdown-content" id="categories">
                  </div>
                </div>
              </li>
              <li><a href="properties.html">properties</a></li>
              <li><a href="login.html">login</a></li>
              <li><a href="signup.html">signup</a></li>`
    var  message = `<li> Invalid credentials </li>`

    document.getElementById("nav").innerHTML = nav;
  }else{
    var  nav=`<li>
                <div class="dropdown">
                  <div class="dropbtn">Categories</div>
                  <div class="dropdown-content" id="categories">
                  </div>
                </div>
              </li>
              <li><a href="post-property.html">Post property</a></li>
              <li><a href="profile.html">Profile</a></li>
                <li id = "logout" onclick="logoutUser()">logout</li>`

    var  message = `<li> Login succesful </li>`

    document.getElementById("nav").innerHTML = nav;
  }
  console.log(document.getElementById("featured"))

      document.getElementById("featured").innerHTML = text;
      document.getElementById("categories").innerHTML = categories;

}





window.onload = getProperties;
