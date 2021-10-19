var affichage12h = true;

/**
 * Affiche la date du jour et l'heure
 */
function afficheHeure(){
    let date = new Date();
    let heure = date.getHours();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();
    let periode = affichage12h ? ' AM' : '';

    let annee = date.getFullYear();
    let mois = date.getMonth() + 1;
    let jour = date.getDate();
    let jourSemaine = date.getDay();
    let jourTexte = [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
    ];

    let displayDate = document.getElementById('date_display');
    let displayHour = document.getElementById('hour_display');

    if (affichage12h) {
        if (heure == 0){
            heure = 12;
        }

        if (heure > 12){
            heure = heure - 12;
            periode = ' PM';
        }
    }

    heure = ajouteZero(heure);
    minute = ajouteZero(minute);
    seconde = ajouteZero(seconde);
    mois = ajouteZero(mois);
    jour = ajouteZero(jour);

    displayHour.innerHTML = heure + ':' + minute +':' + seconde + periode;
    displayDate.innerHTML = jourTexte[jourSemaine] + ' ' + annee + '-' + mois + '-' + jour;

}

/**
 * Ajout d'un 0 quand la valeur est inférieur à 10
 * 
 * @param {number} nombre Le nombre à modifier selon ça valeur.
 * @returns Le nombre dont on a ajouté un 0 ou pas.
 */
function ajouteZero(nombre){
    if(nombre < 10){
        nombre = '0' + nombre;
    }

    return nombre;
}

/**
 * Masquer ou afficher la date
 * @param {*} icone L'icone sur laquelle on a cliqué
 */
function masquerDate(icone){
    icone.classList.toggle("selected");
    document.getElementById("date_display").classList.toggle("hide");
}

/**
 * Basculer le mode d'affichage de l'heure entre 12h et 24h
 * @param {*} icone L'icone sur laquelle on a cliqué
 */
function changerAffichage12h(icone){
    icone.classList.toggle("selected");
    affichage12h = !affichage12h;
    afficheHeure();
}



afficheHeure();
setInterval(afficheHeure, 1000);
