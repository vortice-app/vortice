var config = {
	type: Phaser.AUTO,
	width: 1920,
	height: 1080,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: {
		preload: boot,
		
	}
};
var jeu = new Phaser.Game(config);
console.log(jeu.state)
// Ces lignes doivent être effacées avant d'être placé sur l'arcade
// *** Ajoutez des noms pour définir le nombre de joueur ***
var nomsJoueurs = [];
var noms;
noms = prompt("Nom du joueur :");
nomsJoueurs[0] = noms;

// NE PAS MODIFIER le reste du code
var nombreJoueurs = nomsJoueurs.length;
var manettes = [];


function boot(){	
	
	var etatDemarrer = function(){};

	etatDemarrer.prototype = {

		preload: function() {

			this.load.image( 'chargement_img', 'ressources/images/chargement.png' );

		},

		create: function() {
			// effacer la boucle FOR avant de placer dans l'arcade
			// for( var i = 1; i <= nombreJoueurs; i++){
			// 	manettes[i] = new Manette(i);
			// }
			
			//this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
			jeu.stage.smoothed = false;
			jeu.state.start('etatChargement');

		}

	};
	

	jeu.state.add('etatChargement', etatChargement);
	jeu.state.add('etatMenu', etatMenu);
	jeu.state.add('etatJeu', etatJeu);
	jeu.state.add('etatGG', etatGG);
	jeu.state.add('etatRecords', etatRecords);
	jeu.state.add('etatDemarrer', etatDemarrer);

	jeu.state.start('etatDemarrer');
}

// Cette ligne doit être effacée avant d'être placé sur l'arcade
boot();

