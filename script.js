/* Valeurs */

let vieHeros = 100;
let vieMaxHeros = 100; //pour ne pas dépasser la vie max du héros
let forceHeros = 1;
let vieMonstre = 100;
let vieBaseMonstre = 100;   //besoin pour augmenter la vie du monstre suivant
let compteurMonstresTues = 0; //besoin pour augmenter la vie du monstre suivant
let or = 0;
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

let affichageScore = document.getElementById("score");
let affichageOr = document.getElementById("or");
let boutonAttaquer = document.getElementById("attaque");
let page = document.getElementById("chargementJeu");
let heros = document.getElementById("heros");
let monstre = document.getElementById("monstre");
let ecranDefaite = document.getElementById("defaite");
let boutonRejouer = document.getElementById("rejouer");
let boutonAchatPotionVie = document.getElementById("acheterPotionVie");
let boutonAchatPotionForce = document.getElementById("acheterPotionForce");
let boutonUtiliserPotion = document.getElementById("utiliserPotion");
let boutonAchatPaysan = document.getElementById("acheterPaysan");
let paysan = document.getElementById("paysan");
let boutonAchatMilicien = document.getElementById("acheterMilicien");
let milicien = document.getElementById("milicien");
let boutonAchatLancier = document.getElementById("acheterLancier");
let lancier = document.getElementById("lancier");
let boutonAchatSoldat = document.getElementById("acheterSoldat");
let soldat = document.getElementById("soldat");
let boutonAttaquePlus = document.getElementById("attaquePlus");
let boutonAttaqueAlliesPlus = document.getElementById("attaqueAlliesPlus");
let boutonPvPlus = document.getElementById("pvPlus");
let dpsHeros = document.getElementById("dpsHeros");
let dpsAllies = document.getElementById("dpsAllies");

/* Chronos */

let chronoMonstre;
let chronoAllies;

/* Bugs :
- boutonUtiliserPotion.disabled = true;
*/

/* fonctions */

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
        ecranDefaite.style.display = "block";   //affichage de la fenêtre de défaite
    }
}

function fixerChronoMonstre() {
    chronoMonstre = setInterval(attaquerHeros, 5000);   //timer entre chaque attaque du monstre (en ms)
}
page.onload = fixerChronoMonstre;

function rejouer() {    //reset du jeu
    vieHeros = 100;
    vieMonstre = 100;
    or = 0;
    score = 0;
    actualisationAffichage();
    ecranDefaite.style.display = "none";    //on enlève la fenêtre de défaite
}
boutonRejouer.onclick = rejouer;

function nouveauMonstre() {
    vieMonstre = vieBaseMonstre + 15 * compteurMonstresTues;    //agumentation de la vie max du prochain monstre
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

function actualisationAffichage() { //actualisation des valeurs affichées à l'écran
    monstre.innerHTML = "<p>Vie du monstre : " + vieMonstre + "</p>";
    affichageScore.innerHTML = "<p>Score : " + score + "</p>";
    affichageOr.innerHTML = "<p>Or : " + or + "</p>";
    heros.innerHTML = "<p>Vie du héros : " + vieHeros + "/" + vieMaxHeros +"</p>";
    paysan.innerHTML = "<p>Vous avez " + nombrePaysans + " paysans.</p>";
    boutonAchatPaysan.innerHTML = "Acheter Paysan<br>Prix : " + prixPaysan;
    milicien.innerHTML = "<p>Vous avez " + nombreMiliciens + " miliciens.</p>";
    boutonAchatMilicien.innerHTML = "Acheter Milicien<br>Prix : " + prixMilicien;
    lancier.innerHTML = "<p>Vous avez " + nombreLanciers + " lanciers.</p>";
    boutonAchatLancier.innerHTML = "Acheter Lancier<br>Prix : " + prixLancier;
    soldat.innerHTML = "<p>Vous avez " + nombreSoldats + " soldats.</p>";
    boutonAchatSoldat.innerHTML = "Acheter Soldat<br>Prix : " + prixSoldat;
    dpsHeros.innerHTML = "<p>Dégats du héros : " + forceHeros + "</p>";
    dpsAllies.innerHTML = "<p>Bonus aux alliés : DPS x" + multiplicateurAllies + "</p>";
}

function achatPotionVie() {
    if (or >= 70 && potion === "") {
        or -= 70;
        actualisationAffichage();
        potion = "vie";
    }
    else if (or < 70) {
        alert("Vous n'avez pas assez d'or.");
    }
    else {
        alert("Vous avez déjà une potion.")
    }
}
boutonAchatPotionVie.onclick = achatPotionVie;

function achatPotionForce() {
    if (or >= 110 && potion === "") {
        or -= 110;
        actualisationAffichage();
        potion = "force";
    }
    else if (or < 110) {
        alert("Vous n'avez pas assez d'or.");
    }
    else {
        alert("Vous avez déjà une potion.")
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
        potion = "";
    } 
    else if(potion === "force") {
        forceHeros *= 2;
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
        fixerChronoAllies(forceSoldat);
    }
    else {
        alert("Vous n'avez pas assez d'or.");
    }
}
boutonAchatSoldat.onclick = acheterSoldat;

function acheterAttaquePlus() {
    if(or >= prixAttaquePlus) {
        or -= prixAttaquePlus;
        prixAttaquePlus *= 2;
        forceHeros++;
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
        vieMaxHeros += 10;
        vieHeros += 10;
        actualisationAffichage();
    }
    else {
        alert("Vous n'avez pas assez d'or.")
    }
}
boutonPvPlus.onclick = acheterPvPlus;