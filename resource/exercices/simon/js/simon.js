const zoneInformationTour = document.querySelector('.information_tour');
const zoneInformation = document.querySelector('.information');
const boutonNouveau = document.querySelector('.bouton_demarrer');

let sequenceOrdinateur = [];
let tourJeux = 0;
let tourJoueur = false;
let nbClicJoueur = 0;


/**
 * Fonction d'entrée du jeux qui débute la partie
 */
function DebuterPartie(){
    // Réinitialisation des variables
    sequenceOrdinateur = [];
    tourJeux = 0;
    tourJoueur = false;
    nbClicJoueur = 0;

    // Préparation de l'affichage
    boutonNouveau.classList.add('hidden');
    zoneInformation.classList.remove('hidden');
    zoneInformationTour.classList.remove('hidden');

    TourOrdinateur();
}


/**
 * Gestion des événements durant le tour de l'ordinateur
 */
function TourOrdinateur() {
    AffichageInformation();

    // Ajout d'une couleur à la séquence de l'ordinateur
    sequenceOrdinateur.push(GenererCouleur());

    // Affichage de la séquence complete à l'écran
    AffichageSequenceOrdinateur();

    // Fin du tour
    tourJoueur = true;
}


/**
 * Afficher la séquence de l'ordinateur
 */
function AffichageSequenceOrdinateur() {
    // Le durée entre l'affichage de chaque tuile en millisecondes
    let dureeEntreAffichage = 150;

    // On boucle sur toutes les couleurs de la séquence et on leur
    // applique un timer de plus en plus grand à chacun pour que ça 
    // donne l'impression qu'il y a une pause entre chaque couleur.
    for (let index in sequenceOrdinateur) {
        setTimeout(() => {
            SurlignementTuile(sequenceOrdinateur[index]);
        }, (index+1) * dureeEntreAffichage);
    }
    
}


/**
 * Affiche les informations du tour en cours
 */
function AffichageInformation() {
    let information = tourJoueur ? `${nbClicJoueur} couleur(s)` : 'Séquence de Simon';
    zoneInformationTour.innerText = `Tour ${tourJeux+1}`;
    zoneInformation.innerText = information;
}


/**
 * Mise en surbrillance d'une tuile selon sa couleur
 * @param {*} couleur La couleur de la tuile à mettre en surbrillance
 */
function SurlignementTuile(couleur) {
    // La durée d'affichage de la tuile en millisecondes
    let dureeAffichage = 350;
    // Je sélectionne la case qui est de la couleur de la séquence
    // de l'ordinateur
    let tuile = document.querySelector(`[data-value='${couleur}']`)
    // J'ajoute la classe activer à la case, qui va en css changer
    // un peu la couleur pour simuler une sélection
    tuile.classList.add('activer');

    // J'attends 300 millisecondes avant d'enlever la classe
    // donc de retourner à la couleur de base de la case.
    setTimeout(() => {
        tuile.classList.remove('activer');
        AffichageInformation();
    }, dureeAffichage);
}


/**
 * Génère une couleur aléatoirement
 * @returns {string} Une couleur entre jaune, bleu, vert ou rouge
 */
 function GenererCouleur() {
    // Le tableau de couleur possible    
    let tableauCouleur = ['jaune', 'bleu', 'vert', 'rouge'];
    // Génération d'un nombre aléatoire entier dans les limites du tableau
    let nombre = Math.floor(Math.random() * tableauCouleur.length);
    // Retour de la couleur du tableau à l'index générer aléatoirement
    return tableauCouleur[nombre];
}





function CliquerTuile(tuile) {
    // On effectuer la validation seulement si on est durant
    // le tour du joueur
    if (tourJoueur) {
        AffichageInformation();
        nbClicJoueur++;
        // On récupère la couleur de la tuile cliquée
        let couleurTuile = tuile.getAttribute("data-value");
        console.table({
            "Couleur ordinateur" : sequenceOrdinateur[nbClicJoueur-1], 
            "Couleur joueur" : couleurTuile,
        }); 
        // On teste si la couleur de la tuile cliqué est égale
        // à la couleur de la séquence à la position où on est
        // rendu selon le nombre de fois que l'usager a cliqueé
        if(sequenceOrdinateur[nbClicJoueur-1] == couleurTuile) {
            
            console.log('Bonne couleur');
            // On teste on a atteint la dernière couleur de la séquence
            if(sequenceOrdinateur.length == nbClicJoueur) {
                // On termine le tour du joueur
                nbClicJoueur = 0;
                tourJeux++; // Un syntaxe possible pour ajouter 1 à la variable
                tourJoueur= false;
                // On recommence un nouveau tour ordinateur après un délais.
                setTimeout(TourOrdinateur, 300);
            }
        }
        else {
            // gameover
            console.log('Mauvaise couleur');
            GameOver();
        }
    }
}


function GameOver() {
    alert('Erreur!!! Mauvaise couleur. Vous avez réussi ' + tourJeux + ' tour.');
}





















