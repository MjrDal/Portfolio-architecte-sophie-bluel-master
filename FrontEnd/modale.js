
// fonction pour affiché la modale des images.
export async function affichageModale(){
    const modale1 = document.querySelector(".modale_link");
    const back = document.getElementById("back");
    modale1.addEventListener("click", function(event){
        event.preventDefault();
        const modaleElement = document.getElementById("modale1")
        modaleElement.setAttribute("style", "display: flex;");
        const modaleStop1 = document.getElementById("modale_stop1");
        modaleStop1.addEventListener("click", function (e) {
            e.stopPropagation();
        })
    })
    back.addEventListener("click", function(event){
        event.preventDefault();
        const modaleElement = document.getElementById("modale1")
        modaleElement.setAttribute("style", "display: flex;");
        const modaleStop1 = document.getElementById("modale_stop1");
        modaleStop1.addEventListener("click", function (e) {
            e.stopPropagation();
        })
    })
}

// fonction pour fermé la modale des images.
export async function fermeModale() {
    const modale1 = document.getElementById("modale1");
    const modaleElementX = document.getElementById("closeModale");
    const modaleElementButtonAdd = document.getElementById("buttonAdd");
    modale1.addEventListener("click", function(event) {
        event.preventDefault();
        modale1.setAttribute("style", "display: none;");
    })
    modaleElementX.addEventListener("click", function(event) {
        event.preventDefault();
        modale1.setAttribute("style", "display: none;");
    })
    modaleElementButtonAdd.addEventListener("click", function(event) {
        event.preventDefault();
        modale1.setAttribute("style", "display: none;");
    })
}


// fonction de génération des photos dans la modale
export async function genererPhoto(projet) {
    for(let i = 0; i< projet.length ; i++){
        // creation d'une variable pour une fiche en fonction de i
        const fiche = projet[i];
        // récuperation de l'élémnent du DOM qui acceuillera les fiches.
        const cardsElement = document.querySelector(".cards");
        // création de la balise de la fiche.
        const ficheElement = document.createElement("figure");
        // création du html à l'intérieur de la fiche.
        const imageElement = document.createElement("img");
        imageElement.src = fiche.imageUrl;
        ficheElement.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
        // ajout du html 
        cardsElement.appendChild(ficheElement);
        ficheElement.appendChild(imageElement);
    }
}


// fonction pour affiché la modale ajout photo.
export async function affichageModaleAjoutPhoto() {
    const buttonAdd = document.getElementById("buttonAdd");
    buttonAdd.addEventListener("click", function(event){
        event.preventDefault();
        const modaleElement = document.getElementById("modale2")
        modaleElement.setAttribute("style", "display: flex;");
        const modaleStop2 = document.getElementById("modale_stop2");
        modaleStop2.addEventListener("click", function (e) {
            e.stopPropagation();
        })
    })
}

// fonction pour ferme la modale ajout photo.
export async function fermeModaleAjoutPhoto() {
    const modaleElementX = document.getElementById("closeModale2");
    const modale2 = document.getElementById("modale2");
    const back = document.getElementById("back");
    modale2.addEventListener("click", function(event) {
        event.preventDefault();
        modale2.setAttribute("style", "display: none;");
    })
    modaleElementX.addEventListener("click", function(event) {
        event.preventDefault();
        modale2.setAttribute("style", "display: none;");
    })
    back.addEventListener("click", function(event) {
        event.preventDefault();
        modale2.setAttribute("style", "display: none;");
    })
}