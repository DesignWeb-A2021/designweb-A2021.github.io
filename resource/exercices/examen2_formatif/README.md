# examen2_formatif

## Formulaire
- Le formulaire doit être envoyé au fichier action.html qui est dans le projet
- La méthode est POST
- Vous devez utiliser l'événement onsubmit de la balise form pour lancer la fonction de validation.

## Validation
- nom de la bière : Le champ ne doit pas être vide.
- numéro d'identification : Il doit être au format aaa-0000 (Il y a déjà dans le script un objet regex qui comporte la bonne règle, il reste juste à bien l'utiliser).
- Saveur du houblon : Au moins une des cases doit être coché.

## Couleur de la bière
- Quand la valeur du slider 'couleur' change, vous devez changer le texte qui est affiché dans le span 'couleur_nom'. 
- Les valeurs du slider vont de 0 à 5
- Utilisez le tableau COULEURS_BIERE pour savoir quel texte afficher. La valeur du slider est égale à l'index du tableau.

