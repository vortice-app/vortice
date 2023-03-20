var backend = "aHR0cHM6Ly9tYXRocGxheWdyb3VuZC5jbG91ZC9zZXJ2aWNlLw==";
var url = atob(backend);

var buttonArr21 = [
  
    

  {
    "name": "Asteroids",
    "url": "/play/asteroids/",
    "img": "/play/asteroids/asteroids.jpg",
},
{
  "name": "Circus Charlie",
  "url": "/play/circus/",
  "img": "/play/circus/circus.jpg",
},
{
  "name": "Coil",
  "url": "/play/coil/",
  "img": "/play/coil/coil.jpg",
},
{
  "name": "Digger",
  "url": "/play/digger/",
  "img": "/play/asteroids/asteroids.jpg",
},
]

function randomlink() {
//console.log(Object.keys(randomlinks)[Math.floor(Math.random()*Object.keys(randomlinks).length)]);
console.log(randomlinks[ Math.floor(Math.random() * randomlinks.length) ]['link']);
window.location=randomlinks[ Math.floor(Math.random() * randomlinks.length) ]['link'];

}

