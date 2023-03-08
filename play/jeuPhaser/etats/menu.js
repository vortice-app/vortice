var etatMenu = function(){};
var enter;
etatMenu.prototype = {
	
	create: function() {
		
        this.doc = jeu.add.sprite(0, 0, 'description');
        
        var texte = jeu.add.text(100, 100, "Version 0.1.0", {font:"30px verdana", fill:"#888"});
		var texte2 = jeu.add.text(100, 200, "Menu", {font:"30px verdana", fill:"#888"});
		var texte2 = jeu.add.text(800, 1000, "Q pour continuer", {font:"30px verdana", fill:"#fff"});
        
        //noms = prompt("Nom du joueur :");
		//nomsJoueurs[0] = noms;
		
		enter = jeu.input.keyboard.addKey(Phaser.Keyboard.Q);
		enter.onDown.add(this.demarrer, this);
		
	},
	
	demarrer: function(){
		this.state.start('etatJeu');
	}
	
};