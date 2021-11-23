// Sélection des inputs
let inputTexteAfficher = document.getElementById('input_texte_afficher');
const inputFontSize = document.getElementById('input_taille_police');
const inputCouleur = document.getElementById('input_couleur');
const selectTexteModifier = document.getElementById('select_texte_modifier');
// Sélection de la zone d'affichage par default
let zoneAffichage = document.getElementById('texte_afficher_01');   


// Initialise les valeurs par défaut des zones d'affichage
InitialiserAffichage();
function InitialiserAffichage() {
    const zones = [
        document.getElementById('texte_afficher_01'),
        document.getElementById('texte_afficher_02')
    ]

    inputTexteAfficher.value = "Zone #1";
    inputFontSize.value = "40";
    inputCouleur.value = "#000000";

    zones.forEach( (zone, index) => {
        zone.innerText = `Zone #${index+1}`;
        zone.style.fontSize = `${inputFontSize.value}px`;
        zone.style.color = inputCouleur.value;
        zone.setAttribute("data-couleur", inputCouleur.value)
    });

    
}

// Modification de la zone d'affichage
selectTexteModifier.addEventListener('change', () =>  {
    BasculerSurlignementZone(zoneAffichage);
    zoneAffichage = document.getElementById(selectTexteModifier.value);
    BasculerSurlignementZone(zoneAffichage);
    inputTexteAfficher.value = zoneAffichage.innerText;
    inputFontSize.value = zoneAffichage.style.fontSize.replace('px','');
    inputCouleur.value = zoneAffichage.getAttribute("data-couleur");
});

// Modification du texte à afficher
inputTexteAfficher.addEventListener('input', () => zoneAffichage.textContent = inputTexteAfficher.value);
// Modification de la taille de la police
inputFontSize.addEventListener('input', () => zoneAffichage.style.fontSize = `${inputFontSize.value}px`);
// Modification de la couleur du texte
inputCouleur.addEventListener('input', () =>  {
    zoneAffichage.setAttribute("data-couleur", inputCouleur.value)
    zoneAffichage.style.color = inputCouleur.value;
});

function BasculerSurlignementZone(zoneTexte) {
    zoneTexte.parentElement.classList.toggle('surligner');
}