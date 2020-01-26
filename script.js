/* Valeurs */

let vieHeros = 100;
let vieMaxHeros = 100; //pour ne pas dépasser la vie max du héros
let forceHeros = 10;
let vieMonstre = 100;
let vieBaseMonstre = 100;   //besoin pour augmenter la vie du monstre suivant
let vieMaxMonstre = 100;
let compteurMonstresTues = 0; //besoin pour augmenter la vie du monstre suivant
let or = 0;
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
let multiplicateurAllies = 1;
let prixPvPlus = 50;
let prixAttaquePlus = 25;
let prixAttaqueAlliesPlus = 75;

/* Eléments du html */

let introduction = document.getElementById ("bienvenue");       //Louise // 
let boutonChoixheros = document.getElementById("boutonChoixHeros");     // Louise //
let choisirHeros = document.getElementById ("choisirHeros")     // Louise // 
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
let boutonUtiliserPotion = document.getElementById("potion");
let boutonAchatPaysan = document.getElementById("acheterPaysan");
let boutonAchatMilicien = document.getElementById("acheterMilicien");
let boutonAchatLancier = document.getElementById("acheterLancier");
let boutonAchatSoldat = document.getElementById("acheterSoldat");
// let boutonAttaquePlus = document.getElementById("attaquePlus");
// let boutonAttaqueAlliesPlus = document.getElementById("attaqueAlliesPlus");
// let boutonPvPlus = document.getElementById("pvPlus");
// let dpsHeros = document.getElementById("dpsHeros");
// let dpsAllies = document.getElementById("dpsAllies");
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

/* Chronos */

let chronoMonstre;
let chronoAllies;

/* Bugs et corrections :
- boutonUtiliserPotion.disabled = true;
- compléter la fonction rejouer; ??? a checker
- Faire un compteur de parties; 
- Faire timer potion de force; 
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

function entierAleatoire(min,max) /* MODIF BY YANN */
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

let aleatoire = entierAleatoire(1, 120);

/* fonctions */

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

function attaquerMonstre() {
    vieMonstre -= forceHeros;
    verifierMortMonstre();
}
boutonAttaquer.onclick = attaquerMonstre;

function verifierMortMonstre() {
    if(vieMonstre > 0) {    //pour ne pas passer en négatif
        actualisationAffichage();
    }
    else {
        compteurMonstresTues++;
        nouveauMonstre();   //action effectuée à la mort du monstre
    }
}

function attaquerHeros() {
    vieHeros -= 10;
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
} //modif 26/01 matthieu

function rejouer() {    //reset du jeu  //modif 26/01 matthieu
    vieHeros = 100;
    vieMaxMonstre = 100;
    or = 0;
    score = 0;
    gemmes += gemmesGagnes;
    clearInterval(chronoMonstre);
    clearInterval(chronoAllies);
    alliesDiv.innerHTML = "";
    potion = "";
    boutonUtiliserPotion.innerHTML = "";
    ecranDefaite.style.display = "none";    //on enlève la fenêtre de défaite
    actualisationAffichage();       
}
boutonRejouer.onclick = rejouer;

function nouveauMonstre() {
    vieMonstre = vieBaseMonstre + 15 * compteurMonstresTues;    //agumentation de la vie max du prochain monstre
    vieMaxMonstre = vieMonstre;
    aleatoire = entierAleatoire(1, 120);
    vieHeros += 10; //soin du héros
    if (vieHeros > vieMaxHeros) {   //on empeche le héros de regagner plus de vie que son maximum
        vieHeros = vieMaxHeros;
    }
    or += 100;
    score +=  100 + 1 * compteurMonstresTues;
    actualisationAffichage();
    clearInterval(chronoMonstre);   //on reset le timer
    fixerChronoMonstre();   
}

// function monstreElite {
//     if (compteurMonstresTues%10===0) {

//     }
//     else {
//         nouveauMonstre();
//     }
// }

function actualisationAffichage() { //actualisation des valeurs affichées à l'écran
    // monstre.innerHTML = "<p>Vie du monstre : " + vieMonstre + "</p>";
    monstre.innerHTML = `<img src="images/monstres/MonsterPack/${aleatoire}.png">`;
    monstreVieBarre.style.width = `${vieMonstre*400/vieMaxMonstre}px`;                  /* MODIF BY YANN */
    affichageScore.innerHTML = "<p>Score : " + score + "</p>";
    affichageNiveau.innerHTML = "<p>Niveau " + compteurMonstresTues + "</p>";
    affichageOr.innerHTML = "<p>" + or + "</p>";
    affichageGemmes.innerHTML = "<p>" + gemmes + "</p>";
    affichageGemmes2.innerHTML =  gemmesGagnes ;
    heros.innerHTML = "<p>" + vieHeros + "/" + vieMaxHeros +"</p>";                     /* MODIF BY YANN */
    herosVieBarre.style.width = `${vieHeros*100/vieMaxHeros}%`;
    // dpsHeros.innerHTML = "<p>Dégats du héros : " + forceHeros + "</p>";
    // dpsAllies.innerHTML = "<p>Bonus aux alliés : DPS x" + multiplicateurAllies + "</p>";
    // boutonPvPlus.innerHTML = "PV +<br>Prix : " + prixPvPlus;
    // boutonAttaquePlus.innerHTML = "Attaque +<br>Prix : " + prixAttaquePlus;
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
    chronoAllies = setInterval(degatsAuto, 1000, dps);   //appelle fixerChronoAllies(dps) une fois par seconde
}

function acheterPaysan() {
    if(or >= prixPaysan) {
        or -= prixPaysan;
        nombrePaysans++;
        prixPaysan *= 2;
        actualisationAffichage();
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
        prixMilicien *= 1.8;
        prixMilicien = Math.round(prixMilicien); //prixMilicien = Math.round(prixMilicien*1.8)
        actualisationAffichage();
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
        prixLancier *= 1.1;
        prixLancier = Math.round(prixLancier);
        actualisationAffichage();
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
        prixSoldat *= 1.2;
        prixSoldat = Math.round(prixSoldat);
        actualisationAffichage();
        alliesDiv.innerHTML += '<img src="images/allies-temp/soldat5.png">';
        fixerChronoAllies(forceSoldat);
    }
    else {
        alert("Vous n'avez pas assez d'or.");
    }
}
boutonAchatSoldat.onclick = acheterSoldat;

// function acheterAttaquePlus() {
//     if(or >= prixAttaquePlus) {
//         or -= prixAttaquePlus;
//         prixAttaquePlus *= 2;
//         forceHeros++;
//         actualisationAffichage();
//     }
//     else {
//         alert("Vous n'avez pas assez d'or.")
//     }
// }
// boutonAttaquePlus.onclick = acheterAttaquePlus;

// function acheterPvPlus() {
//     if(or >= prixPvPlus) {
//         or -= prixPvPlus;
//         prixPvPlus *= 1.5; 
//         vieMaxHeros += 10;
//         vieHeros += 10;
//         actualisationAffichage();
//     }
//     else {
//         alert("Vous n'avez pas assez d'or.")
//     }
// }
// boutonPvPlus.onclick = acheterPvPlus;