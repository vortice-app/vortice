var etatGG = function(){};

etatGG.prototype = {
	
	create: function() {
		
        this.fin = jeu.add.audio('fin');
        this.fin.volume = 0.1;
        this.fin.play();
        
        this.bravo = jeu.add.sprite(0, 0, 'Bravo');
        
        var texte = jeu.add.text(100, 100, "Version 0.1.0", {font:"30px verdana", fill:"#888"});
		var texte2 = jeu.add.text(100, 200, "GG", {font:"30px verdana", fill:"#888"});
		var texte2 = jeu.add.text(800, 0, "Q pour rejouer", {font:"30px verdana", fill:"#000000"});
		
        enter.onDown.add(this.demarrer, this);
	},
	
	demarrer: function(){
		this.fin.destroy();
        this.state.start('etatJeu');
	}
	
};