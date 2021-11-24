const PATTERN_NUMERO_IDENTIFICATION = /^([A-Za-z]{3}-\d{4})$/;
const COULEURS_BIERE = [
    "Paille",
    "Blonde",
    "Rousse",
    "Cuivrée",
    "Brune",
    "Noire"
];


const sliderCouleur = document.getElementById('couleur');
sliderCouleur.addEventListener('input', () => {
    const texteCouleur = document.getElementById('couleur_nom');
    texteCouleur.textContent = COULEURS_BIERE[sliderCouleur.value]
})


/**
 * Teste si le numéro d'idenfication de la bière est valide
 * @param {string} numero_identification Le numéro d'identification à tester
 * @returns boolean true si le numéro d'identification est valide
 */
function ValideNumeroIdentification(numero_identification) 
{
    return PATTERN_NUMERO_IDENTIFICATION.test(numero_identification);
}

/**
 * Teste si la valeur d'un champ est vide
 * @param {string} valeur_champ Le valeur à tester
 * @returns boolean true si le champ est vide
 */
function ChampEstVide(valeur_champ) 
{
    return valeur_champ === "" ? true : false;
}

/**
 * Valide d'au moins une saveur de houblon est choisie
 * @returns boolean true si une valeur ou plus est sélectionnée
 */
function ValideSaveurHoublon()
{
    /* Il y a plusieurs façon de faire cette validation, ici ce que j'ai fait c'est de 
       compté combien de checkbox sont coché. Ensuite je retourne true s'il y en a au
       moins un
    */
    let listeChoixSaveur = document.querySelectorAll('.saveur_houblon');
    let nombreSaveurChoisie = 0;

    listeChoixSaveur.forEach(saveur => {
        nombreSaveurChoisie += saveur.checked ? 1 : 0;
    });
    
    return nombreSaveurChoisie > 0;

    /*
    D'autres façon de le faire

    const agrumes = document.getElementById('saveur_houblon_agrumes');
    const epices = document.getElementById('saveur_houblon_epices');
    const fleurs = document.getElementById('saveur_houblon_fleurs');
    const resine = document.getElementById('saveur_houblon_resine');

    Méthode #1
    return agrumes.checked || epices.checked || fleurs.checked || resine.checked;
    
    Méthode #2
    
   if (agrumes.checked == false && epices.checked == false && fleurs.checked == false && resine.checked == false) {
       return false;
   }
   return true;
   */
}

/**
 * Affiche un message dans un balise small situé au même niveau qu'un element html
 * @param {HTLMElement} element L'élément HTML sous lequelle on veut afficher le message
 * @param {*} message Le message à afficher
 */
function AfficherMessage(element, message = '') {
    const zoneMessage = element.parentElement.querySelector('small');
    zoneMessage.textContent = message;
}

/**
 * Fonction de validation du formulaire
 * @returns boolean true si les données du formulaire sont valides
 */
function FormulaireEstValide()
{
    const inputNomBiere = document.getElementById('nom_biere');
    const inputNumeroIdentification = document.getElementById('identification_biere');
    const messageSaveurHoublon = document.getElementById('message_saveur_houblon');
    let formulaireValide = false;

    let nomEstValide = !ChampEstVide(inputNomBiere.value);
    let numeroIdentificationEstValide = ValideNumeroIdentification(inputNumeroIdentification.value) && !ChampEstVide(inputNumeroIdentification);
    let saveurHoublonEstValide = ValideSaveurHoublon();

    AfficherMessage(inputNomBiere, nomEstValide ? '' : 'Le nom ne peut être vide');
    AfficherMessage(inputNumeroIdentification, numeroIdentificationEstValide ? '' : 'Le numéro d\'identification est invalide, il doit être au format aaa-0000');
    messageSaveurHoublon.innerText = saveurHoublonEstValide ? '' : 'Vous devez sélectionner au moins une saveur';

    formulaireValide = nomEstValide && numeroIdentificationEstValide && saveurHoublonEstValide;

    return formulaireValide;
}

