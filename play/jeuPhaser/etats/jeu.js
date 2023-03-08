/*
	Ceci est le fichier où tu vas créer ton jeu
*/

var etatJeu = function () {};

var gauche;
var droite;
var haut;
var bas;
var saut;

etatJeu.prototype = {

	create: function () {
		var nombreDeJoueurTexte = jeu.add.text(100, 100, "Le nombre de joueur : " + nombreJoueurs, {font:"30px verdana", fill:"#888"});
		var nomsDesJoueurs = jeu.add.text(100, 200, "Le nom des joueurs : " + nomsJoueurs, {font:"30px verdana", fill:"#888"});
      
        //Physics général
        jeu.physics.startSystem(Phaser.Physics.P2JS);
        
        //  Register the keys.
	this.leftKey = jeu.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.rightKey = jeu.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    this.upKey = jeu.input.keyboard.addKey(Phaser.Keyboard.UP);
	this.downKey = jeu.input.keyboard.addKey(Phaser.Keyboard.DOWN);
	this.spaceKey = jeu.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    //  Stop the following keys from propagating up to the browser
    jeu.input.keyboard.addKeyCapture([ Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT, Phaser.Keyboard.SPACEBAR ]);
	

        //Music
        //ajouter l'audio (music)
        this.music = jeu.add.audio('music');
        //ajouter l'audio (jump)
        this.jump = jeu.add.audio('jump');
        //faire jouer la music en boucle
        this.music.loop = true;
        //regler le volume de la music
        this.music.volume = 0.5;
        //faire jouer la music
        this.music.play();
        
        //layers
        //ajouter la tilemap
        this.map = jeu.add.tilemap('map');
        //ajouter les tileset
        this.map.addTilesetImage('tuiles', 'tiles');
        this.map.addTilesetImage('finish', 'finish');
        //ajouter les layers
        this.map.createLayer('ciel');
        this.map.createLayer('nuages');
        //layer de colision
        this.colision = this.map.createLayer('colision');
        //le monde prende la taille de ce layer
        this.colision.resizeWorld();
        jeu.physics.p2.applyDamping = false; 

        //echelles layer
        this.echelles = jeu.add.group();
        //activer leur corps
        this.echelles.enableBody = true;
        //ajouter echelle object layer
        this.map.createFromObjects('echelle', 78, 'echelle', 0, true, false, this.echelles);
        
        //Objets score
        this.scores = jeu.add.group();
        //activer leur corps
        this.scores.enableBody = true;
        //ajouter score object layer
        this.map.createFromObjects('score', 80, 'score', 0, true, false, this.scores);
        //le mettre visible
        this.scores.visible = true;
        // le mettre transparent
        this.scores.alpha = 0;
        
        
        //echelles cassées layer
        this.echellesCassées = jeu.add.group();
        this.echellesCassées.enableBody = true;
        
        this.map.createFromObjects('fake', 79, 'echelle cassée', 0, true, false, this.echellesCassées);
        
        //collision avec id
        this.map.setCollision(13, true, this.colision); 
        //convertir en tilemap
        this.tiles = jeu.physics.p2.convertTilemap(this.map, this.colision);
        //activer la physique sur chaque tile
        this.tiles.forEach( function( tile ) {
            
            jeu.physics.p2.enable(tile);
            
        }); 

        // gravitée
        jeu.physics.p2.gravity.y = 1000;
        
        // joueur
              if(nomsJoueurs[0] == ['Valentin Magot2016']){
            
                this.player = jeu.add.sprite(75, 200.5, 'secret');
                
        }else {
            //ajout du sprite
            this.player = jeu.add.sprite(75, 3133.10, 'dude');
        }
        //definir les commandes
        this.player.manette = manettes [1];


        

        gauche = jeu.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        droite = jeu.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        haut = jeu.input.keyboard.addKey(Phaser.Keyboard.UP);
        bas = jeu.input.keyboard.addKey(Phaser.Keyboard.BAS);
        saut = jeu.input.keyboard.addKey(Phaser.Keyboard.SPACE);
        
        //caméra suit le joueur
        jeu.camera.follow(this.player);
        //jeu.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON);
        //activer la physique sur le joueur
        jeu.physics.p2.enable(this.player);
        //debug
        this.player.body.debug = false;
        //fixer la rotation
        this.player.body.fixedRotation = true;
        //ajout d'une masse
        this.player.body.mass = 20;
        //rebondissement
        this.player.body.restitution = 0.0;
        //ajout des animations   
        this.player.animations.add('right', [1, 2, 3, 4], 16, false);
        this.player.animations.add('left', [7, 8, 9, 10], 16, false);
        this.player.animations.add('haut', [5, 11], 6, false);
        this.player.animations.add('stop left', [0], 16, true);
        this.player.animations.add('stop right', [6], 16, true);
    
        //initialisation de variables
        this.facing = 'right';
        this.jumpTimer = 0;
        //limite du monde
        jeu.physics.p2.setBoundsToWorld(true, true, true, true, false);    
        //groupe de roches
        this.roches = jeu.add.group();
        //groupe des roches inverses
        this.rochesInverses = jeu.add.group();
        
       
        //ajout de roches dans une boucle qui les fait apparètre celon un temps en milliseconde te une position
        this.timer = jeu.time.events.loop(5000, this.ajouterRoche, this, 1923, 3155);
        this.timer2 = jeu.time.events.loop(5000, this.ajouterRocheInverse, this, -2, 2925);
        this.timer3 = jeu.time.events.loop(5000, this.ajouterRoche, this, 1923, 2700);
        this.timer4 = jeu.time.events.loop(4500, this.ajouterRocheInverse, this, -2, 2480);
        this.timer5 = jeu.time.events.loop(4500, this.ajouterRoche, this, 1923, 2250);
        this.timer6 = jeu.time.events.loop(4000, this.ajouterRocheInverse, this, -2, 2040);
        this.timer7 = jeu.time.events.loop(4000, this.ajouterRoche, this, 1923, 1810);
        this.timer8 = jeu.time.events.loop(4000, this.ajouterRocheInverse, this, -2, 1590);
        this.timer9 = jeu.time.events.loop(3000, this.ajouterRoche, this, 1923, 1360);
        this.timer10 = jeu.time.events.loop(2500, this.ajouterRocheInverse, this, -2, 1150);
        this.timer11 = jeu.time.events.loop(2000, this.ajouterRoche, this, 1923, 910);
        this.timer12 = jeu.time.events.loop(1500, this.ajouterRocheInverse, this, -2, 695);
        this.timer13 = jeu.time.events.loop(1500, this.ajouterRoche, this, 1923, 460);
        this.timer14 = jeu.time.events.loop(1500, this.ajouterRocheInverse, this, -2, 250);
       
        
        
        //Vies
        //intialisation de la variable vie + celle du texte
        this.lives = 5;
        this.livesString = 'Vies : ';
        //ajout du text au jeu
        this.livesText = jeu.add.text(100, 10, this.livesString + this.lives, { font: '34px Arial', fill: '#fff' });
        //le fixer à la caméra
        this.livesText.fixedToCamera = true;
       
        //**PAREIL POUR TOUT LES AUTRES TEXT**
        
        //game over
        this.stateText = jeu.add.text(1000, 500,' ', { font: '84px Arial', fill: '#fff' });
        this.stateText.anchor.setTo(0.5, 0.5);
        this.stateText.fixedToCamera = true;
        this.stateText.visible = false;
        
        //temps
        this.chrono = 60;
        this.chronoString = 'Temps : ';
        this.chronoText = jeu.add.text(1700, 10, this.chronoString + this.chrono, { font: '34px Arial', fill: '#fff' });
        this.chronoText.fixedToCamera = true;
        //appelez la fonction tempsDeJeu
        this.temps = jeu.time.events.loop(1000, this.tempsDeJeu, this);
        
        //score
        this.score = 0;
        this.scoreString = 'Score : ';
        this.scoreText = jeu.add.text(800, 10, this.scoreString + this.score, { font: '34px Arial', fill: '#fff' });
        this.scoreText.fixedToCamera = true;

                
        //1679.10
        //221.10
    },

	update: function () {
        

        // if(this.player.manette.e()){
        //     //console.log(this.player.body.x);
        //     console.log(this.player.body.y);
        // }
        //easter egg probablement à enlever pour mettre sur l'arcade à cause de l'array nomsJoueurs
        if(nomsJoueurs[0] == ['Valentin Magot2016']){
            
            this.lives = 'Infini';
            this.livesText.text = this.livesString + this.lives;
        }
        
        //GG
        if(this.player.body.x >= 1679.10 && this.player.body.y <= 221.15){
            
            this.score += 1000000;
            //ajouter 10000000 au score si le joueur arrive à la fin
            this.music.destroy();
            //enlever la music
            jeu.state.start('etatGG');
            //appeler l'etat gg
        }
        
        
        //**EXACTEMENT PAREIL QUE ROCHESINVERS PLUS BAS**
        this.roches.forEach(function(roche){

            if (this.checkOverlap(this.player, roche))
            {
                roche.destroy();

                if (this.lives > 0) {
                this.lives -= 1;
                this.livesText.text = this.livesString + this.lives;
                }

                if (this.lives == 0)
                {
                this.player.kill();
                roche.kill();
                this.music.pause();
                this.chrono = 0;
                this.roches.destroy();
                this.rochesInverses.destroy();
                this.stateText.text ="      GAME OVER \n Q Pour Recommencer";
                this.stateText.visible = true;

                enter.onDown.add(this.redemarrer, this);
                }
                
            }
        }, this);
        
        this.rochesInverses.forEach(function(rocheInverse){
//applique sur chaque "enfant" de groupe rocheInverse
            if (this.checkOverlap(this.player, rocheInverse))
                //quand le joueur rentre en contactact avec chaque roche
            {
                rocheInverse.destroy();
                //detruit chauqe roches inverses
                if (this.lives > 0) {
                //quand les vies sont plus haute que 0
                this.lives -= 1;
                //enlever une vie au contact
                this.livesText.text = this.livesString + this.lives;
                //maj du text des vie à chaque contact
                }
                if (this.lives == 0)
                //quand les vies sont égales à 0
                {
                this.player.kill();
                //tuer le joueur
                rocheInverse.kill();
                //tuer la roche
                this.chrono = 0;
                //mettre le temps à 0
                this.rochesInverses.destroy();
                //détruires les rochesInverses
                this.roches.destroy();
                //détruires les roches
                this.music.pause();
                //arrêter la music
                this.stateText.text ="      GAME OVER \n Q Pour Recommencer";
                //text de fin de jeu
                this.stateText.visible = true;
                //le rendre visible
                enter.onDown.add(this.redemarrer, this);
                //ajouter le bouton: appuyer sur "q" pour redémarer
                }
                
            }
        }, this);
        
        this.scores.forEach(function(score) {
            //pour chaques "objet score"
            if (this.checkOverlap(this.player, score)) {
                //quand ils rentrent en contact
                score.destroy();
                //détruir l'objet 
                this.score += 50;
                //ajouter 50 points au score
                this.scoreText.text = this.scoreString + this.score;
                //maj du text score lors du contact
            }
                
        }, this);
        

        this.echelles.forEach(function(echelle) {
            //pour chques echelles
            if (this.checkOverlap(this.player, echelle)) {
                    //lors du contact
                //this.player.body.data.gravityScale = 0.0000000000001;
                //baisser l'echelle de gravité
                if (this.upKey.isDown) {
                    //quand la touche du haut est appuyer
                    this.player.animations.play('haut', 6, false);
                    //jouer l'animation haut
                    this.player.animations.stop('stop left', [0], 16, true);
                    //arreter l'animation gauche
                    this.player.animations.stop('stop right', [6], 16, true);
                    //arreter l'animation gauche
                    this.player.body.velocity.y = -200;
                    //le joueur de déplace vers le haut
                }
                //**PAREIL QUE POURL A TOUCHE DU HAUT MAIS VERS LE BAS**
                else if (this.downKey.isDown) {
                    
                    this.player.animations.play('haut', 6, false);
                    this.player.animations.stop('stop left', [0], 16, true);
                    this.player.animations.stop('stop right', [6], 16, true);
                    this.player.body.velocity.y = 100 ;
                    //le joueur de déplace vers le haut avec une vitesse deux fois moins grande que vers le haut
                }
                else {
                    this.player.body.velocity.y = 0;
                }
                
            }
                
        }, this, this.player.body.data.gravityScale = 1);
        //remetre l'echelle de gravité à la normal lorsqu'il n'y à plus contact
     
        if (this.lives == 0)
            //si les vies égale 0
        {
            this.chronoText.text = this.chronoString + 0;
            //mettre le chrono à 0
    }
        
    
    this.roches.forEach( function( roche ) {
             
            roche.body.x += -5;     
            //la vitesse et direcrion de chaque roches 
        });
    this.rochesInverses.forEach( function( rocheInverse ) {
             
            rocheInverse.body.x += 5;     
            //la vitesse et direcrion de chaque rochesInverses
        });    
      //deplacements du joueur
        if (this.leftKey.isDown)
            //si la touche de gauche est appuyé
    {
    	this.player.body.velocity.x = -500;
		//la vélocitée(vitesse) et direction du joueur
		if( this.checkSiPeutSauter() ){
            //si le joeur est en l'air + touche de gauche 
        	this.player.animations.play('left');
            //joer l'animation gauche
		}else{
			this.player.animations.stop('right');
			this.player.animations.stop('left');
            //si joueur en l'aire seuleument arrêter les animations gauche et droite
		}
        if (this.facing != 'left')
        {
            this.facing = 'left';
            console.log(this.facing);
        }//affiche dans la console la direction don't le joeur est orrienté
    }
    //**PAREIL QUE LA MANETTE DE GAUCHE**
    else if (this.rightKey.isDown)
    {
        this.player.body.velocity.x = 500;
        if( this.checkSiPeutSauter() ){
        	this.player.animations.play('right');
		}else{
			this.player.animations.stop('right');
			this.player.animations.stop('left');
			
		}
        if (this.facing != 'right')
        {
            this.facing = 'right';
            console.log(this.facing);
        }
        
    } else if ( this.player.frame != 5 &&  this.player.frame != 11 ){
        if (this.facing != 'right')
        {
        this.player.animations.play('stop right');
        this.player.animations.stop('left');
            this.player.animations.stop('right');
		      this.player.body.velocity.x = 0;
                this.facing = 'left';
                    //console.log(this.facing);
        }
        if (this.facing != 'left')
        {
        this.player.animations.play('stop left');
        this.player.animations.stop('left');
            this.player.animations.stop('right');
		      this.player.body.velocity.x = 0;
                this.facing = 'right';
                    //console.log(this.facing);
        }
		
		
    }


//SAUT
        if (this.spaceKey.isDown && this.checkSiPeutSauter() ){
        //quand la touche "q" est appuyer et que la fonction "chechSiPeutSauter" est validée
            this.player.body.velocity.y = -300;
            //la vitesse et la direction du jouer vers le haut
           if(this.facing != 'right'){
               //à gauche
               this.jump.play();
               //faire jouer la music du saut
               this.player.frame = 8;
               //appler l'image du saut
           }else if (this.facing != 'left'){
               //à droite
               this.jump.play();
               this.player.frame = 2;
               //pareil qu'à gauche mais à droite
           }
            
    }else {
        this.jump.stop();
        //enlver la music du saut quand la touche est plus appuyé
    }
        
    },
    
    //function temps
    tempsDeJeu : function () {
            if (this.chrono > 0) {
            //quand le temps est au dessus de 0
            this.chrono -= 1;
            //enlever 1
            this.chronoText.text = this.chronoString + this.chrono;
            //maj du text du temps
            }
        
        if (this.chrono == 0)
            //quand le chrono égale 0
        {
                this.player.kill();
                //tuer le joueur
                this.music.destroy();
                //enlever la music
                this.livesText.text = this.livesString + 0;
                //mettre le text des vies à 0
                this.stateText.text ="      GAME OVER \n Q Pour Recommencer";
                //le text de fin de jeu
                this.stateText.visible = true;
                //le rendre visible
                enter.onDown.add(this.redemarrer, this);
                //redemarrer quand la touche "q" est appuyé
            
        }
    },
    
    //easter egg
    secret : function(){
        this.player = jeu.add.sprite(75, 3133.10, 'secret');
        this.lives = 'Infini';
        this.livesText.text = this.livesString + this.lives;
    },
//secret
      
    //ajouter roche
    ajouterRoche : function (positionx, positiony) {
        //fonction ajouter une roche + position x et y
        var roche;
        //initialisation de la variable roche
        roche = jeu.add.sprite(positionx, positiony, 'roche');
        //ajout du lutin à la position x et y
        roche.animations.add('roule', [0, 1, 2, 3, 4, 5, 6, 7, 8]);
        //ajout de l'animation du lutin
        roche.animations.play('roule', 10, true);
        //lancer l'animation
        jeu.physics.p2.enable(roche);
        //activer la physique
        roche.body.static = true;
        //Pour qu'elle reste droite
        roche.body.collideWorldBounds = false;
        //traverse les mur du monde
        this.roches.add(roche);
        //ajouter au droupe this.rochees
        roche.checkWorldBounds = true;
        //vérifie si elle touche les contours du monde
        roche.outOfBoundsKill = true;
        //tue la roche si elle est en dehors du monde
    },
    
    //**EXACTEMENT PAREIL QUE AJOUTERROCHE**
    //ajouter roches inverses
    ajouterRocheInverse : function (positionx, positiony){
        var rocheInverse;
        rocheInverse = jeu.add.sprite(positionx, positiony, 'roche');
        rocheInverse.animations.add('roule', [0, 1, 2, 3, 4, 5, 6, 7, 8]);
        rocheInverse.animations.play('roule', 10, true);
        jeu.physics.p2.enable(rocheInverse); 
        rocheInverse.body.static = true;
        rocheInverse.body.collideWorldBounds = false;
        rocheInverse.body.debug = false;
        
        this.rochesInverses.add(rocheInverse);
        
        rocheInverse.checkWorldBounds = true;
        rocheInverse.outOfBoundsKill = true;
    },
    //fonction pour vérifié si le joeur saute(au dessus de mes capacités)
    checkSiPeutSauter: function () {

		var yAxis = p2.vec2.fromValues(0, 1);
		var result = false;

		for (var i = 0; i < jeu.physics.p2.world.narrowphase.contactEquations.length; i++)
		{
			var c = jeu.physics.p2.world.narrowphase.contactEquations[i];

			if (c.bodyA === this.player.body.data || c.bodyB === this.player.body.data)
			{
				var d = p2.vec2.dot(c.normalA, yAxis); // Normal dot Y-axis
				if (c.bodyA === this.player.body.data) d *= -1;
				if (d > 0.5) result = true;
			}
		}

		return result;
		
	},
    //Overlap
    //fonction pour vérifié si deux sprites se superposent
    checkOverlap : function(spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
        //ajout de contours aux sprites

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },
    
    redemarrer: function(){
        //fonction redémarer
        this.music.destroy();
        //arrêter la music
        this.state.start('etatJeu');
        //lanser l'etatJeu
	}
    
//    render : function () {
//
//    jeu.debug.cameraInfo(jeu.camera, 120, 32);
//    jeu.debug.spriteCoords(this.player, 120, 800);                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
//}
//    Bravo : function(){
//		this.state.start('etatGG');
//	}
    //pour avoir des info sur la position du joueur et de la caméra (optionel)

};