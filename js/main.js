




function getProperties(){
  fetch('https://propertyproliteapi.herokuapp.com/api/v2/properties')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson)
  var text = "";
  var slides ="";
  var i;
  for (i = 0; i < myJson.data.length; i++) {
    text += '<div class="prop">'+
            `<img src=${myJson.data[i].url} />`+
        `<p id="update" onclick="storeP(${myJson.data[i].id})">${myJson.data[i].name}</p>`+
          '</div>'

    slides += `<img class="mySlides" src="${myJson.data[i].url}">`

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
    setTimeout(carousel, 3000); // Change image every 2 seconds
    }


      // document.getElementById("slides").innerHTML = ;

    });
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
        window.location.href = 'UI/property.html'

    })

}


window.onload = getProperties;
