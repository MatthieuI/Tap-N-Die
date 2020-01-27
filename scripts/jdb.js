fermerJdbBouton = document.getElementById("fermerJdbBouton");
ouvrirJdbBouton = document.getElementById("ouvrirJdbBouton");
jdbFerme = document.getElementById("jdbFerme");
jdbOuvert = document.getElementById("jdbOuvert");
listeJdb = document.getElementById("listeJdb");

function ouvrirJdb() {             
    jdbFerme.style.display = "none";
    jdbOuvert.style.display = "flex";
}
ouvrirJdbBouton.onclick = ouvrirJdb;

function fermerJdb() {            
    jdbOuvert.style.display = "none";
    jdbFerme.style.display = "flex";
}
fermerJdbBouton.onclick = fermerJdb;

jdbTab = [];
function ajouterAuJdb(evenement) {
    listeJdb.innerHTML = "";
    jdbTab.unshift(evenement);
    for (i=0; i<jdbTab.length; i++) {
        listeJdb.innerHTML += `<li>${jdbTab[i]}</li>`;
    }
    
}
ajouterAuJdb ('Préparez vous à taper fort pour survivre!');
ajouterAuJdb ('Préparez vous à taper vite poour survivre!');
ajouterAuJdb ('Je vous la donne en 1000, préparez vous à taper...');


function clearJdb () {
    jdbTab = [];
    listeJdb.innerHTML = "";
}
