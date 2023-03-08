var jeu = new Phaser.Game(600, 600);
var vitesse = 10;
var jumpTimer =  2;

var grimpeur = {
    
    preload : function () {
    //chargement images
        jeu.load.tilemap('map', 'assets/stage.json', null, Phaser.Tilemap.TILED_JSON);
        jeu.load.image('tiles', 'assets/tuiles.png');
      
        jeu.load.spritesheet('dude', 'assets/spritesheet.png', 54, 70);
        jeu.load.spritesheet('roche', 'assets/roches.png', 32, 32);
        jeu.load.spritesheet('echelle', 'assets/echelle.png', 66, 224);
        jeu.load.spritesheet('echelle cassée', 'assets/echelle cassée.png', 67, 128);
        jeu.load.spritesheet('score', 'assets/score.png', 32, 32);
    },
    
    create : function () {
        //Physics général
        jeu.physics.startSystem(Phaser.Physics.P2JS);
        jeu.physics.p2.world.defaultContactMaterial.friction = 100;
        
        //layers
        this.map = jeu.add.tilemap('map');
        this.map.addTilesetImage('tuiles', 'tiles');
        this.map.createLayer('ciel');
        this.map.createLayer('nuages');
        
        this.colision = this.map.createLayer('colision');
        this.colision.resizeWorld();
        jeu.physics.p2.applyDamping = false; 

        //echelles layer
        this.echelles = jeu.add.group();
        this.echelles.enableBody = true;
        
        this.map.createFromObjects('echelle', 78, 'echelle', 0, true, false, this.echelles);
        
        //Objets score
        this.scores = jeu.add.group();
        this.scores.enableBody = true;
        this.map.createFromObjects('score', 80, 'score', 0, true, false, this.scores);
        this.scores.visible = true;
        
        
        //echelles cassées layer
        this.echellesCassées = jeu.add.group();
        this.echellesCassées.enableBody = true;
        
        this.map.createFromObjects('fake', 79, 'echelle cassée', 0, true, false, this.echellesCassées);
        
        //collision
        this.map.setCollision(13, true, this.colision); 
        //this.map.setCollision(70, false, this.echelle);
        
        this.tiles = jeu.physics.p2.convertTilemap(this.map, this.colision);
        
        this.tiles.forEach( function( tile ) {
            
            jeu.physics.p2.enable(tile);
            
        }); 
        
//        this.tuilesEchelle = jeu.physics.p2.convertTilemap(this.map, this.echelle);
//        
//        this.tuilesEchelle.forEach( function( tile ) {
//            console.log(tile);
//            jeu.physics.p2.enable(tile);
//            
//        }); 
        // gravity
        jeu.physics.p2.gravity.y = 1000;
        
        // player
        this.player = jeu.add.sprite(75, 3133.10, 'dude');
        this.player.manette = manettes [1];
        jeu.camera.follow(this.player);
        jeu.physics.p2.enable(this.player);
        this.player.body.debug = false;
        this.player.body.fixedRotation = true;
        this.player.body.mass = 20;
        this.player.body.restitution = 0.0;
           
        this.player.animations.add('right', [1, 2, 3, 4], 16, false);
        this.player.animations.add('left', [7, 8, 9, 10], 16, false);
        this.player.animations.add('haut', [5, 11], 6, false);
//        this.player.animations.add('saut left', [12], 16, true);
//        this.player.animations.add('saut right', [13], 16, true);
//        this.player.animations.add('stop left', [0], 16, true);
//        this.player.animations.add('stop right', [6], 16, true);
        
        //this.facing = 'left';
        
        // cursors
        this.cursors= jeu.input.keyboard.createCursorKeys();
        
        jeu.physics.p2.setBoundsToWorld(true, true, true, true, false);
        this.jumpButton = jeu.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        //groupe de roches
        this.roches = jeu.add.group();
        this.rochesInverses = jeu.add.group();
        
       
        //ajout de roches
        this.timer = jeu.time.events.loop(5000, this.ajouterRoche, this, 1923, 3155);
        this.timer2 = jeu.time.events.loop(5000, this.ajouterRocheInverse, this, -2, 2935);
        this.timer3 = jeu.time.events.loop(5000, this.ajouterRoche, this, 2000, 2715);
        this.timer4 = jeu.time.events.loop(5000, this.ajouterRocheInverse, this, -2, 2495);
        this.timer5 = jeu.time.events.loop(5000, this.ajouterRoche, this, 2000, 2275);
        this.timer6 = jeu.time.events.loop(5000, this.ajouterRocheInverse, this, -2, 2055);
        this.timer7 = jeu.time.events.loop(5000, this.ajouterRoche, this, 2000, 1835);
        this.timer8 = jeu.time.events.loop(5000, this.ajouterRocheInverse, this, -2, 1615);
        this.timer9 = jeu.time.events.loop(5000, this.ajouterRoche, this, 2000, 1395);
        this.timer10 = jeu.time.events.loop(5000, this.ajouterRocheInverse, this, -2, 1175);
        this.timer11 = jeu.time.events.loop(5000, this.ajouterRoche, this, 2000, 955);
        this.timer12 = jeu.time.events.loop(5000, this.ajouterRocheInverse, this, -2, 735);
        this.timer13 = jeu.time.events.loop(5000, this.ajouterRoche, this, 2000, 515);
        this.timer14 = jeu.time.events.loop(5000, this.ajouterRocheInverse, this, -2, 295);
       
        
        
        //lives
        this.lives = 5;
        this.livesString = 'Lives : ';
        this.livesText = jeu.add.text(10, 10, this.livesString + this.lives, { font: '34px Arial', fill: '#fff' });
        this.livesText.fixedToCamera = true;
        
        //game over
        this.stateText = jeu.add.text(300, 300,' ', { font: '84px Arial', fill: '#fff' });
        this.stateText.anchor.setTo(0.5, 0.5);
        this.stateText.fixedToCamera = true;
        this.stateText.visible = false;
        
        //temps
        this.chrono = 60;
        this.chronoString = 'Temps : ';
        this.chronoText = jeu.add.text(400, 10, this.chronoString + this.chrono, { font: '34px Arial', fill: '#fff' });
        this.chronoText.fixedToCamera = true;
        this.temps = jeu.time.events.loop(1000, this.tempsDeJeu, this);
        
        //score
        this.score = 0;
        this.scoreString = 'Score : ';
        this.scoreText = jeu.add.text(200, 10, this.scoreString + this.score, { font: '34px Arial', fill: '#fff' });
        this.scoreText.fixedToCamera = true;
        
        //bonus
//        this.bonus = 0;
//        this.bonusString = 'Bonus : ';
//        this.bonusText = jeu.add.text(400, 10, this.bonusString + this.bonus, { font: '34px Arial', fill: '#f00f0f' });
//        this.bonusText.fixedToCamera = true;
//        //this.tempsBonus = jeu.time.events.loop(1000, this.tempsDeJeu, this);
//        this.bonusText.visible = false;
        // Pour monter
        
          
        
      
    },
    
    update : function () {
      
        //console.log(this.roches.length);
        //console.log(this.bonus);
     
        
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
                this.chrono = 0;
                this.roches.destroy();
                this.stateText.text =" GAME OVER \n Click to restart";
                this.stateText.visible = true;

                jeu.input.onTap.addOnce(this.restartGame,this);
                }
                
            }
        }, this);
        
        this.rochesInverses.forEach(function(rocheInverse){

            if (this.checkOverlap(this.player, rocheInverse))
            {
                rocheInverse.destroy();

                if (this.lives > 0) {
                this.lives -= 1;
                this.livesText.text = this.livesString + this.lives;
                }

                if (this.lives == 0)
                {
                this.player.kill();
                rocheInverse.kill();
                this.chrono = 0;
                this.rochesInverses.destroy();
                this.stateText.text =" GAME OVER \n Click to restart";
                this.stateText.visible = true;

                jeu.input.onTap.addOnce(this.restartGame,this);
                }
                
            }
        }, this);
        
        this.scores.forEach(function(score) {
            
            if (this.checkOverlap(this.player, score)) {
                
                score.destroy();
                this.score += 1;
                this.scoreText.text = this.scoreString + this.score;
            }
                
        }, this);
        

        this.echelles.forEach(function(echelle) {
            
            if (this.checkOverlap(this.player, echelle)) {
                    
                this.player.body.data.gravityScale = 0.0001;
                if (this.cursors.up.isDown) {
                    
                    this.player.animations.play('haut', 6, false);
                    this.player.body.y += -6 ;
                }
                
            }
                
        }, this, this.player.body.data.gravityScale = 1);
        
     
        if (this.lives == 0)
        {
            this.chronoText.text = this.chronoString + 0;
    }
        
    
    this.roches.forEach( function( roche ) {
             
            roche.body.x -= 5;     
            
        });
    this.rochesInverses.forEach( function( rocheInverse ) {
             
            rocheInverse.body.x += 5;     
            
        });
        
    if (this.player.manette.gauche())
    {
    	this.player.body.x -= vitesse;
        this.player.animations.play('left');
//        if (this.facing != 'left')
//        {
//            this.player.animations.play('left');
//            this.facing = 'left';
//        }
    }
    else if (this.player.manette.droite())
    {
        this.player.body.x += vitesse;
        this.player.animations.play('right');
//        if (this.facing != 'right')
//        {
//            this.player.animations.play('right');
//            this.facing = 'right';
//        }
    }
//    else {
//        if(this.facing = 'left'){
//            this.player.animations.play('stop');
//        }
//    }

    if (this.jumpButton.isDown && jeu.time.now > jumpTimer){
        
        this.player.animations.play('saut left');
        this.player.body.velocity.y = -350;
        jumpTimer = jeu.time.now + 750 
    }
               
    },
    
    //function temps
    tempsDeJeu : function () {
            if (this.chrono > 0) {
            this.chrono -= 1;
            this.chronoText.text = this.chronoString + this.chrono;
            }
        
        if (this.chrono == 0)
        {
            
                this.player.kill();
                this.lives = 0;
                this.livesText.text = this.livesString + this.lives;
                this.stateText.text =" GAME OVER \n Click to restart";
                this.stateText.visible = true;

                jeu.input.onTap.addOnce(this.restartGame,this);
            //this.chronoText.visible = false;
//            this.bonus = this.score;
//            this.bonusText.visible = true;
//            
//            if (this.bonus > 0) {
//            this.score -= 1;
//            this.bonusText.text = this.bonusString + this.score;
//            }
//            
            
//            if(this.bonus == 0) {
//                this.player.kill();
//                this.lives = 0;
//                this.livesText.text = this.livesString + this.lives;
//                this.stateText.text =" GAME OVER \n Click to restart";
//                this.stateText.visible = true;
//
//            jeu.input.onTap.addOnce(this.restartGame,this);
//        }
        }
    },
    
   
   
    // creer les roches
    ajouterRoche : function (positionx, positiony) {
        var roche;
        roche = jeu.add.sprite(positionx, positiony, 'roche');
        roche.animations.add('roule', [0, 1, 2, 3, 4, 5, 6, 7, 8]);
        roche.animations.play('roule', 10, true);
        jeu.physics.p2.enable(roche); 
        roche.body.static = true;
        roche.body.collideWorldBounds = false;
        roche.body.debug = true;
        
        
        this.roches.add(roche);
        
        roche.checkWorldBounds = true;
        roche.outOfBoundsKill = true;
        
       
    },
    
    //ajouter roches inverses
    ajouterRocheInverse : function (positionx, positiony){
        var rocheInverse;
        rocheInverse = jeu.add.sprite(positionx, positiony, 'roche');
        rocheInverse.animations.add('roule', [0, 1, 2, 3, 4, 5, 6, 7, 8]);
        rocheInverse.animations.play('roule', 10, true);
        jeu.physics.p2.enable(rocheInverse); 
        rocheInverse.body.static = true;
        rocheInverse.body.collideWorldBounds = false;
        rocheInverse.body.debug = true;
        
        this.rochesInverses.add(rocheInverse);
        
        rocheInverse.checkWorldBounds = true;
        rocheInverse.outOfBoundsKill = true;
    },
   
    //Overlap
    checkOverlap : function(spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },

    //restart
    restartGame : function () {
        
        jeu.state.start('grimpeur');
    }
    
    //rendue
//   render : function () {
//       
//    jeu.debug.cameraInfo(jeu.camera, 32, 32);
//    jeu.debug.spriteCoords(this.player, 32, 500);
//}

};
//game state
jeu.state.add('grimpeur', grimpeur);
jeu.state.start('grimpeur');