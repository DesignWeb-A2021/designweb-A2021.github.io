const zoneTexte = document.getElementById('texte_afficher_01');
const inputTexteAfficher = document.getElementById('input_texte_afficher');
const boutonPremiereLettre = document.getElementById('afficher_premiere_lettre');
const boutonAfficherNombreCaractere = document.getElementById('afficher_nopmbre_caractere');

// Modification du texte à afficher
inputTexteAfficher.addEventListener('input', () => zoneTexte.textContent = inputTexteAfficher.value);

boutonPremiereLettre.addEventListener('click', () => {
    let texte = zoneTexte.textContent;

    zoneTexte.textContent = texte.substr(-1,1);
})

boutonAfficherNombreCaractere.addEventListener('click', () => {
    let texte = zoneTexte.textContent;

    alert(texte.length);
})