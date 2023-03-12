// Oregon Trail

var page2 = [
	"You can spend all your money before you start your trip - or you can save some of your cash to spend along the way at forts when you run out of food and other supplies.<br /><br />However, items cost more at the forts. You can also go hunting along the way to get more food. Whenever you have to use your trusty rifle, you will be told to type in a word that sounds like a gunshot.<br /><br />The faster you type in the word and press the RETURN key, the better the chance you will have of hitting your target.<br /><br />At each turn, all items, except bullets, are shown in dollar amounts. When you are asked to enter a dollar amount, dont use a '$'.<br /><br />"];

document.addEventListener("keydown", function(event) {
	if(event.keyCode === 13) {
		document.getElementById("intro").innerHTML = page2;
	}
});

