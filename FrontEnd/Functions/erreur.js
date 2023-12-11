// fonction de génération du html de l'erreur pour la création du projet
export async function erreurPojet(message){
    // récuperation de l'élémnent du DOM qui acceuillera les fiches.
    const galleryElement = document.getElementById("erreur__cargement__projets");
    // création des balise de la fiche erreur.
    const pErreur = document.createElement("p");
    // insertion du message d'erreur.
    pErreur.innerText = message;
    // ajout du html
    galleryElement.appendChild(pErreur);
    // ajout des classes.
    const divErreurElement = document.getElementById("erreur__cargement__projets");
    divErreurElement.classList.add("error")
    const pErreurElement = document.querySelector("#portfolio div p");
    pErreurElement.classList.add("txt__error");
}

// fonction de génération du html de l'erreur login

export async function notAuthorized(message) {
    const errorLogin = document.getElementById("errorLogin");
    const pErreur = document.createElement("p");
    pErreur.innerText = message;
    errorLogin.appendChild(pErreur);
    errorLogin.classList.add("error");
    const pErreurElement = document.querySelector("#login div p");
    pErreurElement.classList.add("txt__error");
}
