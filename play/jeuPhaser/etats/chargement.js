var etatChargement = function(){};

var joueurs = [];

etatChargement.prototype = {
	
	preload: function(){
		
		// Affiche "Chargement des ressources au centre de l'écran
		var titre = this.add.text(jeu.world.centerX, jeu.world.centerY, "Chargement des ressources", { font: "28px Arial", fill: "#00ff00" });
			titre.anchor.setTo(0.5);

		// Affiche la barre de chargement 
		var barreChargement = this.add.sprite(jeu.world.centerX, jeu.world.centerY + titre.height + 40, 'chargement_img');
			barreChargement.anchor.setTo(0.5);
		this.load.setPreloadSprite(barreChargement);
		
		// Chargement des sons
		//this.load.audio( 'explosion_son',	'ressources/audio/explosion2.ogg');
        jeu.load.audio('music', 'ressources/audio/mixup.wav');
        jeu.load.audio('jump', 'ressources/audio/jump.wav');
        jeu.load.audio('fin', 'ressources/audio/fin.wav');
		
		// Chargement des images pour les lutins
       
        jeu.load.image('tiles', 'ressources/images/tuiles.png');
        jeu.load.image('finish', 'ressources/images/finish.png');
        jeu.load.image('description', 'ressources/images/Description.png');
        jeu.load.image('Bravo', 'ressources/images/Bravo.png');
      
       
		// Chargement des images d'animation pour les lutins
		//this.load.spritesheet( 'triangle', 		'ressources/images/triangle.png', 44, 80, 11);
        jeu.load.spritesheet('dude', 'ressources/images/spritesheet.png', 54, 70);
        jeu.load.spritesheet('secret', 'ressources/images/secret.png', 54, 70);
        jeu.load.spritesheet('roche', 'ressources/images/roches.png', 32, 32);
        jeu.load.spritesheet('echelle', 'ressources/images/echelle.png', 66, 224);
        jeu.load.spritesheet('echelle cassée', 'ressources/images/echelle cassée.png', 67, 128);
        jeu.load.spritesheet('score', 'ressources/images/score.png', 32, 32);
		// Chargement des scripts pour les objets du jeu
		//this.load.script(	'navette_obj',		'ressources/scripts/Navette.js'	);
	
		
		// Chargement des niveaux
		//this.load.tilemap( 'niveau1', 'ressources/tilemap/niveau1.json', null, Phaser.Tilemap.TILED_JSON );
        jeu.load.tilemap('map', 'ressources/images/stage.json', null, Phaser.Tilemap.TILED_JSON);
		
		// Chargement de l'information pour la physique des objects pour P2
		//this.load.physics( 'infoPourPhysique', 'ressources/scripts/physiques.json');
	},
	
	create: function(){
		
		this.state.start('etatMenu');
		
	}
}