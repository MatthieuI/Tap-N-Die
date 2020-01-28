/* Valeurs */

let herosActif;
let vieHeros = 100;
let vieMaxHeros = 100; //pour ne pas dépasser la vie max du héros
let forceHeros = 10;
let forceMonstre = 1;
let vieMonstre = 100;
let vieBaseMonstre = 100;   //besoin pour augmenter la vie du monstre suivant
let vieMaxMonstre = 100;
let compteurMonstresTues = 0; //besoin pour augmenter la vie du monstre suivant
let or = 0;
let orGagne = 100;
let gemmes = 0;   
let gemmesGagnes = 10; 
let score = 0;
let potion = "";
let nombrePaysans = 0; 
let prixPaysan = 50;
let forcePaysan = 1;
let nombreMiliciens = 0; 
let prixMilicien = 110;
let forceMilicien = 3;
let nombreLanciers = 0; 
let prixLancier = 350;
let forceLancier = 5;
let nombreSoldats = 0; 
let prixSoldat = 1000;
let forceSoldat = 20;
let nombreFantassins = 0; //ajout 27/01
let prixFantassin = 2000;
let forceFantassin = 50;
let nombreGardes = 0; 
let prixGarde = 4000;
let forceGarde = 100;
let nombreGenerals = 0; 
let prixGeneral = 10000;
let forceGeneral = 200;
let nombrePretres = 0; 
let prixPretre = 20000;
let forcePretre = 500;
let nombreEnchanteresses = 0; 
let prixEnchanteresse = 40000;
let forceEnchanteresse = 1000;
let nombreSeigneurs = 0; 
let prixSeigneur = 100000;
let forceSeigneur = 2000;   //ajout 27/01
let multiplicateurAllies = 1;
let prixPvPlus = 50;
let prixAttaquePlus = 25;
let prixAttaqueAlliesPlus = 75;
let dispoCapacite = true;
let i = 30;
let potionChance = false;

/* Eléments du html */

let introduction = document.getElementById ("bienvenue");       //Louise // 
let boutonChoixheros = document.getElementById("boutonChoixHeros");     // Louise //
let choisirHeros = document.getElementById ("choisirHeros")     // Louise // 
let guerriere = document.getElementById ("guerriere") ;// Louise //
let archere = document.getElementById ("archere") ;// Louise //
let magicienne = document.getElementById ("magicienne") ;// Louise //
let voleur = document.getElementById ("voleur") ;// Louise //

let competence = document.getElementById ("competence");
/* Parametre */ 
let fermeture = document.getElementById ("fermeture");
let ecrou = document.getElementById ("ecrou");
let parametres = document.getElementById ("parametres");
let boutonCredits = document.getElementById ("boutonCredits");
let boutonReinitialiser = document.getElementById ("boutonReinitialiser"); 
let boutonHautsFaits = document.getElementById("boutonHautsFaits");
let boutonRetourHautFaits = document.getElementById("boutonRetourHautFaits");
let hautFaits = document.getElementById("hautFaits");
/* Crédits*/
let credits = document.getElementById ("credits")
let boutonRetourParametre = document.getElementById("boutonRetourParametre");
let boutiquePermanente = document.getElementById("boutiquePermanente");
let boutonBoutiquePermanente = document.getElementById("boutonBoutiquePermanente");
let boutonRetourBienvenue = document.getElementById("boutonRetourBienvenue");

let boutonRetour = document.getElementById("boutonRetour");     // Louise //
let boutonValider = document.getElementById ("boutonValider");  // Louise // 

let affichageNiveau = document.getElementById("niveauEnCours");
let affichageScore = document.getElementById("score");
let affichageOr = document.getElementById("compteurOr");
let affichageGemmes = document.getElementById ("compteurGemmes");
let affichageGemmes2 = document.getElementById ("compteurGemmesGagnes");
let boutonAttaquer = document.getElementById("monstre");
let page = document.getElementById("chargementJeu");
let heros = document.getElementById("affichageVieNombre");
let monstre = document.getElementById("monstre");
let ecranDefaite = document.getElementById("defaite");
let boutonRejouer = document.getElementById("rejouer");
let boutonAchatPotionVie = document.getElementById("acheterPotionVie");
let boutonAchatPotionForce = document.getElementById("acheterPotionForce");
let boutonAchatPotionChance = document.getElementById("acheterPotionChance");
let boutonUtiliserPotion = document.getElementById("potion");
let boutonAchatPaysan = document.getElementById("acheterPaysan");
let boutonAchatMilicien = document.getElementById("acheterMilicien");
let boutonAchatLancier = document.getElementById("acheterLancier");
let boutonAchatSoldat = document.getElementById("acheterSoldat");
let boutonAchatFantassin = document.getElementById("acheterFantassin"); //ajout 27/01
let boutonAchatGarde = document.getElementById("acheterGarde");
let boutonAchatGeneral = document.getElementById("acheterGeneral");
let boutonAchatPretre = document.getElementById("acheterPretre");
let boutonAchatEnchanteresse = document.getElementById("acheterEnchanteresse");
let boutonAchatSeigneur = document.getElementById("acheterSeigneur");   //ajout 27/01
let boutonAttaquePlus = document.getElementById("attaquePlus");
let boutonAttaqueAlliesPlus = document.getElementById("attaqueAlliesPlus");
let boutonPvPlus = document.getElementById("pvPlus");
let caserneAllies = document.getElementById("caserneAllies");  //ajout
let alliesFerme = document.getElementById("alliesFerme");
let caserneFerme = document.getElementById("caserneFerme");
let boutonFermerAllies = document.getElementById("fermerAllies");
let alliesDiv = document.getElementById("alliesDiv");
let casernePotions = document.getElementById("casernePotions"); //ajout
let potionsFerme = document.getElementById("potionsFerme");
let boutonFermerPotions = document.getElementById("fermerPotions");
let caserneBonus = document.getElementById("caserneBonus"); //ajout
let bonusFerme = document.getElementById("bonusFerme");
let boutonFermerBonus = document.getElementById("fermerBonus");

let hautFaitDebloque1 = false;
let hautFaitDebloque2 = false;
let hautFaitDebloque3 = false;
let hautFaitDebloque4 = false;
let hautFaitDebloque5 = false;
let hautFaitDebloque6 = false;
let hautFaitDebloque7 = false;
let hautFaitDebloque8 = false;
let hautFaitDebloque9 = false;
let hautFaitDebloque10 = false;
let hautFaitDebloque11 = false;
let hautFaitDebloque12 = false;
let hautFaitDebloque13 = false;
let hautFaitDebloque14 = false;
let hautFait1 = document.getElementById("hautFait1");
let hautFait2 = document.getElementById("hautFait2");
let hautFait3 = document.getElementById("hautFait3");
let hautFait4 = document.getElementById("hautFait4");
let hautFait5 = document.getElementById("hautFait5");
let hautFait6 = document.getElementById("hautFait6");
let hautFait7 = document.getElementById("hautFait7");
let hautFait8 = document.getElementById("hautFait8");
let hautFait9 = document.getElementById("hautFait9");
let hautFait10 = document.getElementById("hautFait10");
let hautFait11 = document.getElementById("hautFait11");
let hautFait12 = document.getElementById("hautFait12");
let hautFait13 = document.getElementById("hautFait13");
let hautFait14 = document.getElementById("hautFait14");

/* Chronos */

let chronoMonstre;
let chronoAllies = [];
let chronoArchere;
let chronoPoison;

/* Héros */

let guerriereObjet = {
    nom: "guerriere",
    capaciteSpeciale() {
        if (dispoCapacite===true) {
            vieMonstre -= (3*forceHeros);   
            verifierMortMonstre();                              // Attaque plus puissante
            clearInterval(chronoMonstre);                       // Le monstre arrête d'attaquer le héros
            setTimeout(fixerChronoMonstre, 5000);               // Le monstre n'attaque plus pendant 5sec puis reprend son attaque normale
            dispoCapacite = false;    
            setTimeout(reactiverCapacite, 30000);
            chronoCapacite = setInterval(capaciteRecharge, 1000);
            setTimeout(clearInterval, 30000, chronoCapacite);
        }            
    }
}


function capaciteRecharge() {  
    i--;
    competence.innerHTML = "";
    competence.innerHTML = "<p>" + i + "</p>";
    actualisationAffichage();
    if (i===0) {
        competence.innerHTML = `<img src="images/icones/arme2.png">` ;
        i = 30;
        }
    } 

let mageObjet = {
    nom : "mage",
    capaciteSpeciale() {
        if (dispoCapacite===true) {
            vieMonstre -= (10*forceHeros);                      // Attaque plus puissante
            verifierMortMonstre();
            dispoCapacite = false;    
            setTimeout(reactiverCapacite, 30000);
        }
    }
}

let archereObjet = {
    nom : "archere",
    capaciteSpeciale() {
        if (dispoCapacite===true) {
            chronoArchere = setInterval(degatsAuto, 100, forceHeros/5);
            setTimeout(clearInterval, 5000, chronoArchere);
            dispoCapacite = false;    
            setTimeout(reactiverCapacite, 30000);
        }
    }
}

function competenceVoleur() {
    attaquerMonstre();
    let critique = entierAleatoire(1, 100);
    if (critique<=10) {
        vieHeros += vieHeros/100;
        vieHeros = Math.round(vieHeros);
        if (vieHeros>vieMaxHeros) {vieHeros=vieMaxHeros}
    }    
    if (critique>=90) {
        or += or/100; 
        or = Math.round(or);
    }
}

function resetCapaciteVoleur() {
    boutonAttaquer.onclick = attaquerMonstre;
}


let voleurObjet = {
    nom : "voleur",
    capaciteSpeciale() {
        if (dispoCapacite===true) {
            boutonAttaquer.onclick = competenceVoleur;
            setTimeout(resetCapaciteVoleur, 10000);
            dispoCapacite = false;    
            setTimeout(reactiverCapacite, 30000);
        }
    }
}

function reactiverCapacite() {
    dispoCapacite = true;
}

function capaciteSpeciale() {
    herosActif.capaciteSpeciale();
}

competence.onclick = capaciteSpeciale;

/* Bugs et corrections :
- boutonUtiliserPotion.disabled = true;
- compléter la fonction rejouer; ??? a checker
- Faire un compteur de parties; 
*/

function ouvrirOngletBonus() {             //modif
    caserneFerme.style.display = "none";
    caserneBonus.style.display = "flex";
}
bonusFerme.onclick = ouvrirOngletBonus;

function fermerOngletBonus() {             //modif
    caserneFerme.style.display = "flex";
    caserneBonus.style.display = "none";
}
boutonFermerBonus.onclick = fermerOngletBonus;

function ouvrirOngletPotions() {             //modif
    caserneFerme.style.display = "none";
    casernePotions.style.display = "flex";
}
potionsFerme.onclick = ouvrirOngletPotions;

function fermerOngletPotions() {             //modif
    caserneFerme.style.display = "flex";
    casernePotions.style.display = "none";
}
boutonFermerPotions.onclick = fermerOngletPotions;

function ouvrirOngletAllies() {             //modif
    caserneFerme.style.display = "none";
    caserneAllies.style.display = "flex";
}
alliesFerme.onclick = ouvrirOngletAllies;

function fermerOngletAllies() {             //modif
    caserneFerme.style.display = "flex";
    caserneAllies.style.display = "none";
}
boutonFermerAllies.onclick = fermerOngletAllies;

function entierAleatoire(min,max) { /* MODIF BY YANN */
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

let aleatoire = entierAleatoire(1, 120);

/* fonctions */

function selectionneGuerriere() {                   // Louise // 
    guerriere.style.border = "3px solid #bb0b0b";   // Louise // 
    archere.style.border = "";// Louise // 
    magicienne.style.border = "";// Louise // 
    voleur.style.border = "";// Louise // 
    herosImage.innerHTML = `<img src="images/heros/warrior.png"> `;// Louise // 
    competence.innerHTML = `<img src="images/icones/arme2.png">` ;
    herosActif = guerriereObjet ;   
}
guerriere.onclick = selectionneGuerriere;           // Louise // 

function selectionneArchere() {                   // Louise // 
    archere.style.border = "3px solid #bb0b0b";   // Louise // 
    guerriere.style.border = "";// Louise // 
    magicienne.style.border = "";// Louise // 
    voleur.style.border = "";// Louise // 
    herosImage.innerHTML = `<img src="images/heros/archer.png"> `;// Louise //boutonAttaquer.onclick
    competence.innerHTML = `<img src="images/icones/arme2.png">` ;
    herosActif = archereObjet ;         // Louise // 
}
archere.onclick = selectionneArchere; 

function selectionneMagicienne() {                   // Louise // 
    magicienne.style.border = "3px solid #bb0b0b";   // Louise // 
    archere.style.border = "";// Louise // 
    guerriere.style.border = "";// Louise // 
    voleur.style.border = "";// Louise // 
    herosImage.innerHTML = `<img src="images/heros/mage.png"> `;// Louise //
    competence.innerHTML = `<img src="images/icones/capaheros.png">` ;
    herosActif = mageObjet ;      
}
magicienne.onclick = selectionneMagicienne;           // Louise // 

function selectionneVoleur() {                   // Louise // 
    voleur.style.border = "3px solid #bb0b0b";   // Louise // 
    archere.style.border = "";                   // Louise //    
    magicienne.style.border = "";   
    guerriere.style.border = "";       
    herosImage.innerHTML = `<img src="images/heros/rogue.png"> `;// Louise // 
    competence.innerHTML = `<img src="images/icones/alliees.png">` ;
    herosActif = voleurObjet ;      
}
voleur.onclick = selectionneVoleur;

function boutonHeros() {                       // Louise // 
    introduction.style.display = "none";       // Louise // 
    choisirHeros.style.display = "block";      // Louise //    
}
boutonChoixheros.onclick = boutonHeros;        // Louise // 

function retour () {                           // Louise // 
    introduction.style.display = "block";      // Louise // 
    choisirHeros.style.display = "none";       // Louise //   
}
boutonRetour.onclick = retour;                 // Louise // 

function valider () {                          // Louise // 
    introduction.style.display = "none";       // Louise // 
    choisirHeros.style.display = "none";       // Louise // 
    fixerChronoMonstre();                      //modif 26/01 matthieu
}
boutonValider.onclick = valider;               // Louise // 

///////////////////// PARAMETRE ///////////////////////////////////

function ouvrirParametre() {
    parametres.style.display = "block";      // Louise //  
}
ecrou.onclick = ouvrirParametre;

function fermerParametre() {
    parametres.style.display = "none";      // Louise //     
}
fermeture.onclick = fermerParametre;

function reinitialiser(){
    rejouer();
    parametres.style.display = "none";      // Louise //  
    choisirHeros.style.display = "block";   
    clearInterval(chronoMonstre);
}
boutonReinitialiser.onclick = reinitialiser;
//

function ouvrirCredits() {
    credits.style.display = "block";
}
boutonCredits.onclick = ouvrirCredits;
////////////////////////CREDITS///////////////////////////////////////////
function retourParametre () { 
    credits.style.display = "none";
}
boutonRetourParametre.onclick = retourParametre;

////////////////////////BOUTIQUE PERMANENTE///////////////////////////////////////////
function ouvrirBoutiquePermanente () {
    boutiquePermanente.style.display = "block";    
}
boutonBoutiquePermanente.onclick = ouvrirBoutiquePermanente;

function retourBienvenue () {
    boutiquePermanente.style.display = "none";     
}
boutonRetourBienvenue.onclick = retourBienvenue;

////////////////////////HAUT-FAITS///////////////////////////////////////////

function ouvrirHautFaits() {
    hautFaits.style.display = "block";
    if(hautFaitDebloque1) {
        hautFait1.style.opacity = 1;
    }
    if(hautFaitDebloque2) {
        hautFait2.style.opacity = 1;
    }
    if(hautFaitDebloque3) {
        hautFait3.style.opacity = 1;
    }
    if(hautFaitDebloque4) {
        hautFait4.style.opacity = 1;
    }
    if(hautFaitDebloque5) {
        hautFait5.style.opacity = 1;
    }
    if(hautFaitDebloque6) {
        hautFait6.style.opacity = 1;
    }
    if(hautFaitDebloque7) {
        hautFait7.style.opacity = 1;
    }
    if(hautFaitDebloque8) {
        hautFait8.style.opacity = 1;
    }
    if(hautFaitDebloque9) {
        hautFait9.style.opacity = 1;
    }
    if(hautFaitDebloque10) {
        hautFait10.style.opacity = 1;
    }
    if(hautFaitDebloque11) {
        hautFait11.style.opacity = 1;
    }
    if(hautFaitDebloque12) {
        hautFait12.style.opacity = 1;
    }
    if(hautFaitDebloque13) {
        hautFait13.style.opacity = 1;
    }
    if(hautFaitDebloque14) {
        hautFait14.style.opacity = 1;
    }
}
boutonHautsFaits.onclick = ouvrirHautFaits;

function fermerHautFaits() {
    hautFaits.style.display = "none";
}
boutonRetourHautFaits.onclick = fermerHautFaits;

function debloquageHautFaits() {
    if (((compteurMonstresTues+1) === 10) && (!(hautFaitDebloque1))) {
        gemmes += 40;
        hautFaitDebloque1 = true;
        alert("Vous avez battu votre premier élite. Vous gagnez 40 gemmes.");
    }
    else if (((compteurMonstresTues+1) === 25) && (!(hautFaitDebloque2))) {
        gemmes += 40;
        hautFaitDebloque2 = true;
        alert("Vous atteint le niveau 25. Vous gagnez 40 gemmes.");
    }
    else if (((compteurMonstresTues+1) === 50) && (!(hautFaitDebloque3))) {
        gemmes += 50;
        hautFaitDebloque3 = true;
        alert("Vous atteint le niveau 50. Vous gagnez 50 gemmes.");
    }
    else if (((compteurMonstresTues+1) === 75) && (!(hautFaitDebloque4))) {
        gemmes += 60;
        hautFaitDebloque4 = true;
        alert("Vous atteint le niveau 75. Vous gagnez 60 gemmes.");
    }
    else if (((compteurMonstresTues+1) === 100) && (!(hautFaitDebloque5))) {
        gemmes += 70;
        hautFaitDebloque5 = true;
        alert("Vous atteint le niveau 100. Vous gagnez 70 gemmes.");
    }
    else if (((compteurMonstresTues+1) === 300) && (!(hautFaitDebloque6))) {
        gemmes += 100;
        hautFaitDebloque6 = true;
        alert("Vous atteint le niveau 300. Vous gagnez 100 gemmes.");
    }
    else if (((compteurMonstresTues+1) === 500) && (!(hautFaitDebloque7))) {
        gemmes += 100;
        hautFaitDebloque7 = true;
        alert("Vous atteint le niveau 500. Vous gagnez 100 gemmes.");
    }
    else if (((compteurMonstresTues+1) === 700) && (!(hautFaitDebloque8))) {
        gemmes += 100;
        hautFaitDebloque8 = true;
        alert("Vous atteint le niveau 700. Vous gagnez 100 gemmes.");
    }
    else if (((compteurMonstresTues+1) === 900) && (!(hautFaitDebloque9))) {
        gemmes += 100;
        hautFaitDebloque9 = true;
        alert("Vous atteint le niveau 900. Vous gagnez 100 gemmes.");
    }
    else if (((compteurMonstresTues+1) === 200) && (!(hautFaitDebloque10))) {
        gemmes += 120;
        hautFaitDebloque10 = true;
        alert("Vous avez battu le premier boss. Vous gagnez 120 gemmes.");
    }
    else if (((compteurMonstresTues+1) === 400) && (!(hautFaitDebloque11))) {
        gemmes += 140;
        hautFaitDebloque11 = true;
        alert("Vous avez battu le deuxième boss. Vous gagnez 140 gemmes.");
    }
    else if (((compteurMonstresTues+1) === 600) && (!(hautFaitDebloque12))) {
        gemmes += 160;
        hautFaitDebloque12 = true;
        alert("Vous avez battu le troisième boss. Vous gagnez 160 gemmes.");
    }
    else if (((compteurMonstresTues+1) === 800) && (!(hautFaitDebloque13))) {
        gemmes += 180;
        hautFaitDebloque13 = true;
        alert("Vous avez battu le quatrième boss. Vous gagnez 180 gemmes.");
    }
    else if (((compteurMonstresTues+1) === 1000) && (!(hautFaitDebloque14))) {
        gemmes += 500;
        hautFaitDebloque14 = true;
        alert("Vous avez battu Chtulhu. Vous gagnez 500 gemmes.");
    }
}

////////////////////JEU///////////////////////////

function attaquerMonstre() {
    vieMonstre -= forceHeros;
    verifierMortMonstre();
}
boutonAttaquer.onclick = attaquerMonstre;

function evenementsAleatoires() {
    let chance = entierAleatoire(1,100);
    if (potionChance) {
        if (chance <= 20) {
            let evenement = entierAleatoire(1,9);
            if (evenement === 1 || evenement === 8){
                alert("Vous trouvez un coffre contenant 15 gemmes.");
                gemmes += 15;
            }
            else if (evenement === 2 || evenement === 7) {
                alert("Vous mangez un bon rôti, vos PV sont entièrement restaurés.");
                vieHeros = vieMaxHeros;
            }
            else if (evenement === 3 || evenement === 9){
                alert("Vous faites une sieste et vous vous sentez en forme. Votre force est augmentée de 50% pendant deux minutes.");
                let forceBase = forceHeros;
                forceHeros = forceHeros + (forceHeros/2);
                setTimeout(function(){forceHeros = forceBase;}, 120000);
            }
            else if (evenement === 4) {
                alert("Vous avez fait une indigestion, votre force est divisée par deux pendant deux minutes.")
                forceHeros /= 2;
                setTimeout(function(){forceHeros *= 2;}, 120000);
            }
            else if (evenement === 5) {
                alert("Un gobelin malicieux arrive sournoisement et vous vole une partie de votre or.");
                or = or - (or/10);
            }
            else if (evenement === 6) {
                alert("Vous mangez une baie non comestible, vous êtes empoisonné et perdez vos PV graduellement pendant 30 secondes.");
                chronoPoison = setInterval(poison, 1000);
                setTimeout(clearInterval, 30000, chronoPoison);
            }
        }
    }
    else {
        if (chance <= 5) {
            let evenement = entierAleatoire(1,6);
            if (evenement === 1){
                alert("Vous trouvez un coffre contenant 15 gemmes.");
                gemmes += 15;
            }
            else if (evenement === 2) {
                alert("Vous mangez un bon rôti, vos PV sont entièrement restaurés.");
                vieHeros = vieMaxHeros;
            }
            else if (evenement === 3){
                alert("Vous faites une sieste et vous vous sentez en forme. Votre force est augmentée de 50% pendant deux minutes.");
                let forceBase = forceHeros;
                forceHeros = forceHeros + (forceHeros/2);
                setTimeout(function(){forceHeros = forceBase;}, 120000);
            }
            else if (evenement === 4) {
                alert("Vous avez fait une indigestion, votre force est divisée par deux pendant deux minutes.")
                forceHeros /= 2;
                setTimeout(function(){forceHeros *= 2;}, 120000);
            }
            else if (evenement === 5) {
                alert("Un gobelin malicieux arrive sournoisement et vous vole une partie de votre or.");
                or = or - (or/10);
            }
            else if (evenement === 6) {
                alert("Vous mangez une baie non comestible, vous êtes empoisonné et perdez vos PV graduellement pendant 30 secondes.");
                chronoPoison = setInterval(poison, 1000);
                setTimeout(clearInterval, 30000, chronoPoison);
            }
        }
    }
}

function poison() {
    vieHeros -= (vieMaxHeros/100);
}

function verifierMortMonstre() {
    if(vieMonstre > 0) {    //pour ne pas passer en négatif
        actualisationAffichage();
    }
    else {
        compteurMonstresTues++;
        evenementsAleatoires();
        debloquageHautFaits();
        nouveauMonstre();   //action effectuée à la mort du monstre
    }
}

function attaquerHeros() {
    vieHeros -= forceMonstre;
    if (vieHeros > 0) { //pour ne pas passer en négatif
        actualisationAffichage();
    }
    else {
        heros.innerHTML = "<p>Le héros est mort.</p>";
        herosVieBarre.style.width = "0px"; /*MODIF BY YANN*/
        ecranDefaite.style.display = "block";   //affichage de la fenêtre de défaite
    }
}

function fixerChronoMonstre() {
    chronoMonstre = setInterval(attaquerHeros, 1000);   //timer entre chaque attaque du monstre (en ms)
}

function effacerAllies() {
    for(let j = 0; j < chronoAllies.length; j++) {
        clearInterval(chronoAllies[j]);
    }
}

function rejouer() {    //reset du jeu  //modif 26/01 matthieu //resolution bugs mineurs
    vieHeros = 100;
    vieMaxMonstre = 100;
    vieMonstre = 100;
    compteurMonstresTues = 0;
    or = 0;
    score = 0;
    gemmes += gemmesGagnes;
    clearInterval(chronoMonstre);
    forceMonstre = 1;
    effacerAllies();
    alliesDiv.innerHTML = "";
    potion = "";
    boutonUtiliserPotion.innerHTML = "";
    ecranDefaite.style.display = "none";    //on enlève la fenêtre de défaite
    actualisationAffichage();
    fixerChronoMonstre();
}
boutonRejouer.onclick = rejouer;

function nouveauMonstre() {
    vieMonstre = vieBaseMonstre + 15 * compteurMonstresTues;    //argumentation de la vie max du prochain monstre
    vieMaxMonstre = vieMonstre;
    if (compteurMonstresTues%5===0) {
      forceMonstre = forceMonstre*2;
    }
    aleatoire = entierAleatoire(1, 120);
    vieHeros += 10; //soin du héros
    if (vieHeros > vieMaxHeros) {   //on empeche le héros de regagner plus de vie que son maximum
        vieHeros = vieMaxHeros;
    }
    or += orGagne;
    score +=  orGagne + 1 * compteurMonstresTues;
    actualisationAffichage();
    clearInterval(chronoMonstre);   //on reset le timer
    fixerChronoMonstre();   
}

function actualisationAffichage() { //actualisation des valeurs affichées à l'écran
    monstre.innerHTML = `<img src="images/monstres/MonsterPack/${aleatoire}.png">`;
    monstreVieBarre.style.width = `${vieMonstre*400/vieMaxMonstre}px`;                  /* MODIF BY YANN */
    affichageScore.innerHTML = "<p>Score : " + score + "</p>";
    affichageNiveau.innerHTML = "<p>Niveau " + (compteurMonstresTues+1) + "</p>";
    affichageOr.innerHTML = "<p>" + or + "</p>";
    affichageGemmes.innerHTML = "<p>" + gemmes + "</p>";
    affichageGemmes2.innerHTML =  gemmesGagnes ;
    heros.innerHTML = "<p>" + vieHeros + "/" + vieMaxHeros +"</p>";                     /* MODIF BY YANN */
    herosVieBarre.style.width = `${vieHeros*100/vieMaxHeros}%`;
}

function achatPotionVie() {
    if (or >= 70 && potion === "") {
        or -= 70;
        actualisationAffichage();
        boutonUtiliserPotion.innerHTML = '<img src="images/icones/potionrouge.png">';
        potion = "vie";
    }
    else if (or < 70) {
        alert("Vous n'avez pas assez d'or.");
    }
    else {
        alert("Vous avez déjà une potion.");
    }
}
boutonAchatPotionVie.onclick = achatPotionVie;

function achatPotionForce() {
    if (or >= 110 && potion === "") {
        or -= 110;
        actualisationAffichage();
        boutonUtiliserPotion.innerHTML = '<img src="images/icones/potionverte.png">';
        potion = "force";
    }
    else if (or < 110) {
        alert("Vous n'avez pas assez d'or.");
    }
    else {
        alert("Vous avez déjà une potion.");
    }
}
boutonAchatPotionForce.onclick = achatPotionForce;

function achatPotionChance() {
    if (or >= 200 && potion === "") {
        or -= 200;
        actualisationAffichage();
        boutonUtiliserPotion.innerHTML = '<img src="images/icones/potionjaune.png">';
        potion = "chance";
    }
    else if (or < 200) {
        alert("Vous n'avez pas assez d'or.");
    }
    else {
        alert("Vous avez déjà une potion.");
    }
}
boutonAchatPotionChance.onclick = achatPotionChance;

function resetPotionForce() {
    forceHeros /= 2;
}

function utiliserPotion() {
    if(potion === "vie") {
        vieHeros += 0.6 * vieMaxHeros;
        if(vieHeros > vieMaxHeros) {
            vieHeros = vieMaxHeros;
        }
        actualisationAffichage();
        boutonUtiliserPotion.innerHTML = "";
        potion = "";
    } 
    else if(potion === "force") {
        forceHeros *= 2;
        setTimeout(resetPotionForce, 10000);
        boutonUtiliserPotion.innerHTML = "";
        potion = "";

    }
    else if (potion === "chance") {
        potionChance = true;
        setTimeout(function(){potionChance = false;}, 120000);
        boutonUtiliserPotion.innerHTML = "";
        potion = "";
    }
}
boutonUtiliserPotion.onclick = utiliserPotion;

function degatsAuto(dps) {
    vieMonstre -= dps;
    verifierMortMonstre();
    actualisationAffichage();
}

function fixerChronoAllies(dps) {
    let intervalID = setInterval(degatsAuto, 1000, dps);
    chronoAllies.push(intervalID);
}

function acheterPaysan() {
    if(or >= prixPaysan) {
        or -= prixPaysan;
        nombrePaysans++;
        prixPaysan *= 1.3;
        prixPaysan = Math.round(prixPaysan);
        actualisationAffichage();
        boutonAchatPaysan.children[2].innerHTML = '<p>' + prixPaysan + '<img src="images/icones/coin.png" width="24px" height="24px"></p>';
        alliesDiv.innerHTML += '<img src="images/allies-temp/soldat4.png">';
        fixerChronoAllies(forcePaysan);
    }
    else {
        alert("Vous n'avez pas assez d'or.");
    }
}
boutonAchatPaysan.onclick = acheterPaysan;

function acheterMilicien() {
    if(or >= prixMilicien) {
        or -= prixMilicien;
        nombreMiliciens++;
        prixMilicien *= 1.3;
        prixMilicien = Math.round(prixMilicien); //prixMilicien = Math.round(prixMilicien*1.8)
        actualisationAffichage();
        boutonAchatMilicien.children[2].innerHTML = '<p>' + prixMilicien + '<img src="images/icones/coin.png" width="24px" height="24px"></p>';
        alliesDiv.innerHTML += '<img src="images/allies-temp/soldat1.png">';
        fixerChronoAllies(forceMilicien);
    }
    else {
        alert("Vous n'avez pas assez d'or.");
    }
}
boutonAchatMilicien.onclick = acheterMilicien;

function acheterLancier() {
    if(or >= prixLancier) {
        or -= prixLancier;
        nombreLanciers++;
        prixLancier *= 1.3;
        prixLancier = Math.round(prixLancier);
        actualisationAffichage();
        boutonAchatLancier.children[2].innerHTML = '<p>' + prixLancier + '<img src="images/icones/coin.png" width="24px" height="24px"></p>';
        alliesDiv.innerHTML += '<img src="images/allies-temp/soldat8.png">';
        fixerChronoAllies(forceLancier);
    }
    else {
        alert("Vous n'avez pas assez d'or.");
    }
}
boutonAchatLancier.onclick = acheterLancier;

function acheterSoldat() {
    if(or >= prixSoldat) {
        or -= prixSoldat;
        nombreSoldats++;
        prixSoldat *= 1.3;
        prixSoldat = Math.round(prixSoldat);
        actualisationAffichage();
        boutonAchatSoldat.children[2].innerHTML = '<p>' + prixSoldat + '<img src="images/icones/coin.png" width="24px" height="24px"></p>';
        alliesDiv.innerHTML += '<img src="images/allies-temp/soldat5.png">';
        fixerChronoAllies(forceSoldat);
    }
    else {
        alert("Vous n'avez pas assez d'or.");
    }
}
boutonAchatSoldat.onclick = acheterSoldat;

function acheterFantassin() {   //ajout 27/01
    if(or >= prixFantassin) {
        or -= prixFantassin;
        nombreFantassins++;
        prixFantassin *= 1.3;
        prixFantassin = Math.round(prixFantassin);
        actualisationAffichage();
        boutonAchatFantassin.children[2].innerHTML = '<p>' + prixFantassin + '<img src="images/icones/coin.png" width="24px" height="24px"></p>';
        alliesDiv.innerHTML += '<img src="images/allies-temp/soldat2.png">';
        fixerChronoAllies(forceFantassin);
    }
    else {
        alert("Vous n'avez pas assez d'or.");
    }
}
boutonAchatFantassin.onclick = acheterFantassin;

function acheterGarde() {
    if(or >= prixGarde) {
        or -= prixGarde;
        nombreGardes++;
        prixGarde *= 1.3;
        prixGarde = Math.round(prixGarde);
        actualisationAffichage();
        boutonAchatGarde.children[2].innerHTML = '<p>' + prixGarde + '<img src="images/icones/coin.png" width="24px" height="24px"></p>';
        alliesDiv.innerHTML += '<img src="images/allies-temp/soldat7.png">';
        fixerChronoAllies(forceGarde);
    }
    else {
        alert("Vous n'avez pas assez d'or.");
    }
}
boutonAchatGarde.onclick = acheterGarde;

function acheterGeneral() {
    if(or >= prixGeneral) {
        or -= prixGeneral;
        nombreGenerals++;
        prixGeneral *= 1.3;
        prixGeneral = Math.round(prixGeneral);
        actualisationAffichage();
        boutonAchatGeneral.children[2].innerHTML = '<p>' + prixGeneral + '<img src="images/icones/coin.png" width="24px" height="24px"></p>';
        alliesDiv.innerHTML += '<img src="images/allies-temp/soldat6.png">';
        fixerChronoAllies(forceGeneral);
    }
    else {
        alert("Vous n'avez pas assez d'or.");
    }
}
boutonAchatGeneral.onclick = acheterGeneral;

function acheterPretre() {
    if(or >= prixPretre) {
        or -= prixPretre;
        nombrePretres++;
        prixPretre *= 1.3;
        prixPretre = Math.round(prixPretre);
        actualisationAffichage();
        boutonAchatPretre.children[2].innerHTML = '<p>' + prixPretre + '<img src="images/icones/coin.png" width="24px" height="24px"></p>';
        alliesDiv.innerHTML += '<img src="images/allies-temp/soldat10.png">';
        fixerChronoAllies(forcePretre);
    }
    else {
        alert("Vous n'avez pas assez d'or.");
    }
}
boutonAchatPretre.onclick = acheterPretre;

function acheterEnchanteresse() {
    if(or >= prixEnchanteresse) {
        or -= prixEnchanteresse;
        nombreEnchanteresses++;
        prixEnchanteresse *= 1.3;
        prixEnchanteresse = Math.round(prixEnchanteresse);
        actualisationAffichage();
        boutonAchatEnchanteresse.children[2].innerHTML = '<p>' + prixEnchanteresse + '<img src="images/icones/coin.png" width="24px" height="24px"></p>';
        alliesDiv.innerHTML += '<img src="images/allies-temp/soldat9.png">';
        fixerChronoAllies(forceEnchanteresse);
    }
    else {
        alert("Vous n'avez pas assez d'or.");
    }
}
boutonAchatEnchanteresse.onclick = acheterEnchanteresse;

function acheterSeigneur() {
    if(or >= prixSeigneur) {
        or -= prixSeigneur;
        nombreSeigneurs++;
        prixSeigneur *= 1.3;
        prixSeigneur = Math.round(prixSeigneur);
        actualisationAffichage();
        boutonAchatSeigneur.children[2].innerHTML = '<p>' + prixSeigneur + '<img src="images/icones/coin.png" width="24px" height="24px"></p>';
        alliesDiv.innerHTML += '<img src="images/allies-temp/soldat3.png">';
        fixerChronoAllies(forceSeigneur);
    }
    else {
        alert("Vous n'avez pas assez d'or.");
    }
}
boutonAchatSeigneur.onclick = acheterSeigneur;  //ajout 27/01 des alliés

function acheterAttaquePlus() {
    if(or >= prixAttaquePlus) {
        or -= prixAttaquePlus;
        prixAttaquePlus *= 1.5;
        prixAttaquePlus = Math.round(prixAttaquePlus);
        forceHeros++;
        boutonAttaquePlus.children[2].innerHTML = '<p>' + prixAttaquePlus + '<img src="images/icones/coin.png" width="24px" height="24px"></p>';
        actualisationAffichage();
    }
    else {
        alert("Vous n'avez pas assez d'or.")
    }
}
boutonAttaquePlus.onclick = acheterAttaquePlus;

function acheterPvPlus() {
    if(or >= prixPvPlus) {
        or -= prixPvPlus;
        prixPvPlus *= 1.5; 
        prixPvPlus = Math.round(prixPvPlus);
        vieMaxHeros += 10;
        vieHeros += 10;
        boutonPvPlus.children[2].innerHTML = '<p>' + prixPvPlus + '<img src="images/icones/coin.png" width="24px" height="24px"></p>';
        actualisationAffichage();
    }
    else {
        alert("Vous n'avez pas assez d'or.")
    }
}
boutonPvPlus.onclick = acheterPvPlus;

// function acheterAttaqueAlliesPlus() {
//     if(or >= prixAttaqueAlliesPlus) {
//         or -= prixAttaqueAlliesPlus;
//         prixAttaqueAlliesPlus *= 1.5; 
//         prixAttaqueAlliesPlus = Math.round(prixAttaqueAlliesPlus);
//         multiplicateurAllies += 0.2;
//         clearInterval(chronoAllies);
//         [...]
//         boutonAttaqueAlliesPlus.children[2].innerHTML = '<p>' + prixAttaqueAlliesPlus + '<img src="images/icones/coin.png" width="24px" height="24px"></p>';
//         actualisationAffichage();
//     }
//     else {
//         alert("Vous n'avez pas assez d'or.")
//     }
// }
// boutonAttaqueAlliesPlus.onclick = acheterAttaqueAlliesPlus;