var buttonArr21 = [

  {
    "name": "Asteroids",
    "img": "asteroids/asteroids.jpg",
    "url": "asteroids/",
    
  },
  {
    "name": "Circus Charlie",
    "img": "circus/src/assets/icons/app_icon_1024x1024.png",
    "url": "circus/",
    
  },
  {
    "name": "Coil",
    "img": "coil/favicon.ico",
    "url": "coil/",
    
  },
  {
    "name": "Digger",
    "img": "digger/digger.png",
    "url": "digger/",
    
  },

  {
    "name": "Donkey Kong",
    "img": "donkeykong/donkeykong.jpeg",
    "url": "donkeykong/",
    
  },
  {
    "name": "Duck Hunt",
    "img": "duckhunt/src/assets/images/dog/laugh/1.png",
    "url": "duckhunt/dist/",
    
  },
  {
    "name": "HexGL",
    "img": "hexgl/icon_256.png",
    "url": "hexgl/",
    
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
          document.getElementById('buttonDiv').innerHTML += `<div style="width: 150px;"class="span1 animals"><div style="padding-top: 5px;border-radius: 25px 25px 25px 25px;" class="card"><a href='/play/${arrayItem21.url}'><img width="145" height="145"style="border-radius: 25px;max-width:145px;max-height:145px;width:145px;height:145px" data-src="${arrayItem21.img}" class="lazy" style="width:100%"></a><p3 style="text-transform: uppercase;">${arrayItem21.name}</p3></div></div>`;
  
  
          
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

