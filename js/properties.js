
function getProperties(){
  fetch('https://propertyproliteapi.herokuapp.com/api/v2/properties')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      // console.log(myJson.data)
  var text = "";
  var categories="";
  var i;
  for (i = 0; i < myJson.data.length; i++) {
    text += '<div class="prop">'+
            `<img src=${myJson.data[i].url} >`+
            `<p id="update" onclick="storeP(${myJson.data[i].id})">${myJson.data[i].name}</p>`+
            `</p></div>`

    categories +=`<a href="#">`+
                  myJson.data[i].category +
                  `</a>`

    // console.log(myJson.data[i]);
  }



  if(!localStorage.getItem('user')){
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
    });
}





window.onload = getProperties;
