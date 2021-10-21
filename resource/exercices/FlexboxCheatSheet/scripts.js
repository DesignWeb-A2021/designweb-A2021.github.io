function GenererCube()
{
    // Récupération des valeurs et de la div où on va dessiner les cubes
    let resultat = document.getElementById("resultat");
    let nbCube = document.getElementById("input_number").value;
    let valeurJustify = document.getElementById("select_valeur").value;

    // Supprimer le contenu de la div résultat
    let listesCubes = document.querySelectorAll("#resultat *");
    listesCubes.forEach(cube => { cube.remove() });

    // Créer les cubes
    for (let i = 0; i < nbCube; i++) 
    {
        cube = document.createElement("div");
        cube.classList.add("cube");
        cube.innerHTML = i + 1;
        resultat.append(cube);
    } 

    // Modifier la valeur de justify-content de la div résultat
    resultat.style.justifyContent = valeurJustify;
    
}