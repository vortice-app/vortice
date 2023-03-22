var backend = "aHR0cHM6Ly9tYXRocGxheWdyb3VuZC5jbG91ZC9zZXJ2aWNlLw==";
var url = atob(backend);
var roblox = "aHR0cHM6Ly9reGQuZm0vcm9ibG94";
var krunker = "aHR0cHM6Ly9icm93c2VyZnBzLmNvbS8=";
var BBstars = "aHR0cHM6Ly8za2gwLmdpdGh1Yi5pby9wcm9qZWN0cy9iYXNrZXRiYWxsLXN0YXJzL2luZGV4Lmh0bWw=";

var buttonArr21 = [

  {
    "name": "Asteroids",
    "img": "play/asteroids/asteroids.jpg",
    "url": "asteroids/",
    
  },
  {
    "name": "Circus Charlie",
    "img": "circus/src/assets/icons/app_icon_1024x1024.png",
    "url": "circus/",
    
  },
  {
    "name": "Coil",
    "img": "/coil/favicon.ico",
    "url": "coil/",
    
  },
  {
    "name": "Digger",
    "img": "digger/digger.png",
    "url": "digger/",
    
  },

  {
    "name": "TDonkey Kong",
    "img": "donkeykong/donkeykong.jpeg",
    "url": "donkeykong/",
    
  },
  {
    "name": "Duckhunt",
    "img": "duckhunt/src/assets/images/dog/laugh/1.png",
    "url": "duckhunt/dist/",
    
  },
  {
    "name": "Tsunami Fighter",
    "img": "thumbnails/na.png",
    "url": "gfiles/gfiles/flash/?swf=tsunamifighter.swf",
    
  },
  ]
  buttonArr21.sort(function(a, b) {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      
  // sort in an ascending order
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
  var currentdomain = window.location.hostname;
  var launcherURL = "/play/"+currentdomain;
      buttonArr21.forEach(function(arrayItem21) {
  
          //searchArr.push(arrayItem.name);
          let link2 = arrayItem21.url;
          let name2 = arrayItem21.name;
          document.getElementById('buttonDiv').innerHTML += `<div style="width: 150px;"class="span1 animals"><div style="padding-top: 5px;border-radius: 25px 25px 25px 25px;" class="card"><a href='gfiles/gfiles/lanucher/index.html?url=${arrayItem21.url}'><img width="145" height="145"style="border-radius: 25px;max-width:145px;max-height:145px;width:145px;height:145px" data-src="${arrayItem21.img}" class="lazy" style="width:100%"></a><p3 style="text-transform: uppercase;">${arrayItem21.name}</p3></div></div>`;
  
  
          
      } );



      //important!
      //game switch
     
  document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');
  var twoone = document.getElementById('buttonDiv21');
  var none = document.getElementById('buttonDiv');
  checkbox.addEventListener('change', function (){})
});

function randomlink() {
//console.log(Object.keys(randomlinks)[Math.floor(Math.random()*Object.keys(randomlinks).length)]);
console.log(randomlinks[ Math.floor(Math.random() * randomlinks.length) ]['link']);
window.location=randomlinks[ Math.floor(Math.random() * randomlinks.length) ]['link'];

}

