setTimeout(function() {
    $('#navblob').fadeOut('slow');
}, 1000);

const nav = document.getElementById("#navblob");


// This handler will be executed every time the cursor
// is moved over a different list item
nav.addEventListener(
  "mouseover",
  (event) => {
nav.fadeIn('slow')
  },
  false,
);
