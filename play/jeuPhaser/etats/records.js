var etatRecords = function(){};

etatRecords.prototype = {
	preload: function(){
		this.infoJoueurs = {};
		for( var i = 1; i < joueurs.length; i++){
			this.infoJoueurs["joueur" + i + "n"] = joueurs[i].nom;
			this.infoJoueurs["joueur" + i + "p"] = joueurs[i].distanceRecord;
		}
		this.infoJoueurs.jeuPresent = "jeuJs/triangle_phaser";
		
		this.records = this.chargerRecords(this.infoJoueurs);
		
		//Ajoute l'arrière plan du jeu
		this.arrierePlan = jeu.add.sprite(0, 0, 'ciel');

	},
	
	create: function(){
		
		this.titre = jeu.add.text(jeu.camera.width * 0.5, 100, "Les records", {font:"80px verdana", fill:"#888"});
		this.titre.anchor.setTo(0.5);
		this.sousTitre = jeu.add.text(jeu.camera.width * 0.5, this.titre.y + this.titre.height - 20, "La légende du triangle", {font:"50px verdana", fill:"#666"});
		this.sousTitre.anchor.setTo(0.5);
		this.joueurPointsTXT = jeu.add.text(100, jeu.world.height - 100, "Ton record : " + joueurs[1].distanceRecord, {font:"40px verdana", fill:"#fff"});
		
	},
	
	chargerRecords: function(infoJoueurs) {
		
		$.ajax({
			url: "/php/chargerRecords.php",
			type: "POST",
			async: true, 
			data: 	infoJoueurs,
			dataType: "html",

			success: function(data) {
				afficherRecords(data);
			}
		});
		
		function afficherRecords(data){
			this.records = JSON.parse(data);
			
			this.boitesTexte = [];
			
			this.boitesTexte[0] = jeu.add.text(300, 300, "Noms", { font: "50px verdana", fill: "#fff", align: "center", fontWeight: "bold"  })
			this.boitesTexte[1] = jeu.add.text(960, 300, "Records", { font: "50px verdana", fill: "#fff", align: "center", fontWeight: "bold"  })
			this.boitesTexte[2] = jeu.add.text(1440, 300, "Année", { font: "50px verdana", fill: "#fff", align: "center", fontWeight: "bold"  })
			this.boitesTexte[0].anchor.setTo(0.5);
			this.boitesTexte[1].anchor.setTo(0.5);
			this.boitesTexte[2].anchor.setTo(0.5);

			for(var r in this.records){
				
				var c = this.records[r];
				
				if(c.nouveau == 1){
					var couleur = "#00FF00";
				}else{
					var couleur = "#FFFFFF";
				}
				this.texteTemp = jeu.add.text(this.boitesTexte[0].x - this.boitesTexte[0].width * 0.5, 400 + ( r * 50), c.nom, { font: "50px verdana", fill: couleur, align: "left" } );
				this.texteTemp.anchor.setTo(0, 0.5);
				this.boitesTexte.push( this.texteTemp);
				
				if(c.record < 10000){
					this.zeros = "0";
				}
				if(c.record < 1000){
					this.zeros += "0";
				}
				if(c.record < 100){
					this.zeros += "0";
				}
				if(c.record < 10){
					this.zeros += "0"
				}
				
				this.texteTemp = jeu.add.text(960, 400 + ( r * 50), this.zeros + c.record, { font: "50px verdana", fill: couleur, align: "center" } );
				this.texteTemp.anchor.setTo(0.5); 
				this.boitesTexte.push( this.texteTemp );
				
				this.texteTemp = jeu.add.text(1440, 400 + ( r * 50), c.annee, { font: "50px verdana", fill: couleur, align: "center" } );
				this.texteTemp.anchor.setTo(0.5);
				this.boitesTexte.push( this.textTemp );
				
			}
				
		}

	}

};