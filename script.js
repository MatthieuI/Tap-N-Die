/* Valeurs */

let vieHeros = 100;
let vieMaxHeros = 100; //pour ne pas dépasser la vie max du héros
let vieMonstre = 100;
let vieBaseMonstre = 100;   //besoin pour augmenter la vie du monstre suivant
let compteurMonstresTues = 0; //besoin pour augmenter la vie du monstre suivant
let or = 0;
let score = 0;

/* Eléments du html */

let affichageScore = document.getElementById("score");
let affichageOr = document.getElementById("or");
let boutonAttaquer = document.getElementById("attaque");
let page = document.getElementById("chargementJeu");
let heros = document.getElementById("heros");
let monstre = document.getElementById("monstre");
let ecranDefaite = document.getElementById("defaite");
let boutonRejouer = document.getElementById("rejouer");

/* Chronos */

let chronoMonstre;

function attaquerMonstre() {
    vieMonstre -= 1;
    if(vieMonstre > 0) {    //pour ne pas passer en négatif
        monstre.innerHTML = "<p>Vie du monstre : " + vieMonstre + "</p>"; 
    }
    else {
        compteurMonstresTues++;
        nouveauMonstre();   //action effectuée à la mort du monstre
    }
}
boutonAttaquer.onclick = attaquerMonstre;

function attaquerHeros() {
    vieHeros -= 10;
    if (vieHeros > 0) { //pour ne pas passer en négatif
        heros.innerHTML = "<p>Vie du héros : " + vieHeros + "</p>";
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
    monstre.innerHTML = "<p>Vie du monstre : " + vieMonstre + "</p>";   //actualisation de l'affichage
    heros.innerHTML = "<p>Vie du héros : " + vieHeros + "</p>";
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
    heros.innerHTML = "<p>Vie du héros : " + vieHeros + "</p>";
}