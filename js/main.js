
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
            `<a href='UI/property.html'>`+
            `<img src=${myJson.data[i].url} />`+
            `<p>${myJson.data[i].name}</p>`
            +'</a>'+
          '</div>'
  
  }
  console.log(localStorage.getItem('myCat'))

  if(localStorage.getItem('myCat')!='tom'){
    var  nav=`<li><a href="UI/properties.html">properties</a></li>
              <li><a href="UI/login.html">login</a></li>
              <li><a href="UI/signup.html">signup</a></li>`
    var  message = `<li> Invalid credentials </li>`

    document.getElementById("nav").innerHTML = nav;
  }else{
    var  nav=`<li><a href="UI/properties.html">properties</a></li>
              <li><a href="UI/post-property.html">Post property</a></li>
              <li><a href="UI/profile.html">Profile</a></li>
                  <li id = "logout" onclick="logoutUser()">logout</li>`
    var  message = `<li> Login succesful </li>`

    document.getElementById("nav").innerHTML = nav;
  }
      document.getElementById("featured").innerHTML = text;

    });
}



window.onload = getProperties,carousel;
