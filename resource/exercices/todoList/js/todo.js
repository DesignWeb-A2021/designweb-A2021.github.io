const saisieTache = document.getElementById("saisieTache");
const listeTachesEnCours = document.getElementById("affichageTachesEnCours");
const titreEnCours = document.getElementById("titreEnCours");
const aucuneTacheImage = document.getElementById("aucuneTache");

/**
 * Lance la fonction AjouterTache quand on appuie sur Enter dans le input
 */
saisieTache.addEventListener("keypress", function(event) {
    // Le keyCode 13 représente la touche Enter
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Lance la fonction d'ajout de tache
      AjouterTache();
    }
  });


/**
 * Création d'une nouvelle tache et ajout dans la liste des tâches
 */
function AjouterTache()
{
    // Ne pas créer la tâche s'il n'y a aucun texte
    if(saisieTache.value == ""){
        console.log("La tâche n'a pas été ajouté car il n'y a pas de description");
        return;
    }

    // Création de mon élément li de la nouvelle tâche
    let tache = document.createElement("li");
    // Ajout de la description de la tâche
    let descriptionTache = document.createTextNode(saisieTache.value);
    tache.append(descriptionTache);
    // Ajout de l'évènement onclick qui va supprimer la tâche
    tache.onclick = () => { 
        tache.remove();
        AffichageTacheEnCours();
    };
    // Ajout d'une classe pour faire la mise en forme
    tache.classList.add("tache");
    // Ajout de la nouvelle tâche dans la liste à puce 
    listeTachesEnCours.append(tache);


    // Je vide le input une fois l'ajout terminé
    saisieTache.value = "";
    // Le input retrouve le focus (il est sélectionné)
    saisieTache.focus();

    AffichageTacheEnCours();

}

/**
 * Afficher le titre À faire s'il y a au moins une tache en cours
 */
function AffichageTacheEnCours() 
{
    let nbTachesEnCours = listeTachesEnCours.getElementsByTagName("li").length;
    let invisible = nbTachesEnCours == 0;

    titreEnCours.classList.toggle("invisible", invisible);
    aucuneTacheImage.classList.toggle("invisible", !invisible)
}


