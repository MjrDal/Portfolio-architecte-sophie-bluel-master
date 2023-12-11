import { createElement } from "./Functions/dom.js";

// récupération de la base de donner des catégorie
const categories = await fetch("http://localhost:5678/api/categories").then(projet => projet.json());



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
        const logoCan = document.createElement("i");
        logoCan.setAttribute("id", projet[i].id);
        logoCan.classList.add("fa-solid");
        logoCan.classList.add("fa-trash-can");
        ficheElement.appendChild(logoCan);
        // ajout du html 
        cardsElement.appendChild(ficheElement);
        ficheElement.appendChild(imageElement);
    }

    class projects{

        #cards = []
    
        constructor(cards){
            this.#cards = cards
        }
        appendTo(element){
            element.innerHTML = `<figure>
            <button><i class="fa-solid fa-trash-can"></i></button>
            <img src="" alt="">
        </figure>`
        }
    }

    class card{
        constructor(card){
            const figure = createElement("figure")
            const button = createElement("button", {
                class:"trashcan"
            })
            button.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
            const img = createElement("img", {
                src:card.imageUrl,
                class:"cards_img"
            })
        }
    }
    
    
    const list = new projects;
    list.appendTo(document.querySelector(".cards"))
    
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

// fonction de génération les categorie dans le select.
export async function genererCategorie(projet) {
    for(let i = 0; i< categories.length ; i++){
        // creation d'une variable pour une fiche en fonction de i
        const fiche = categories[i];
        // récuperation de l'élémnent du DOM qui acceuillera les fiches.
        const categorieElement = document.getElementById("categorie");
        // création de la balise de la fiche.
        const optionElement = document.createElement("option");
        // Ajout du contenue da la balise option.
        optionElement.innerText = fiche.name;
        // Ajout de option dans le html.
        categorieElement.appendChild(optionElement);
    }
}

// Fonction qui change la couleur du bouton valider

export async function changeColoreValidate(){
    const photoElement = document.getElementById("file");
    const titleElement = document.getElementById("titre");
    const categorieElement = document.getElementById("categorie");
    const buttonValidate = document.getElementById("buttonValidate");
    buttonValidate.addEventListener("click", function() {
    })
    photoElement.addEventListener("change", function() {
        if(photoElement.value == "" || titleElement.value == "" || categorieElement.value == ""){
            buttonValidate.classList.remove("buttonAdd");
            buttonValidate.classList.add("buttonValidateGray");
        }else{
            buttonValidate.classList.remove("buttonValidateGray");
            buttonValidate.classList.add("buttonAdd");
        }
    })
    titleElement.addEventListener("change", function() {
        if(photoElement.value == "" || titleElement.value == "" || categorieElement.value == ""){
            buttonValidate.classList.remove("buttonAdd");
            buttonValidate.classList.add("buttonValidateGray");
        }else{
            buttonValidate.classList.remove("buttonValidateGray");
            buttonValidate.classList.add("buttonAdd");
        }
    })
    categorieElement.addEventListener("change", function() {
        if(photoElement.value == "" || titleElement.value == "" || categorieElement.value == ""){
            buttonValidate.classList.remove("buttonAdd");
            buttonValidate.classList.add("buttonValidateGray");
        }else{
            buttonValidate.classList.remove("buttonValidateGray");
            buttonValidate.classList.add("buttonAdd");
        }
    })
}

// Fonction qui charge l'image dans la modale une fois sélectionné.
export async function loadingImage(){
    const photoElement = document.getElementById("file");
    photoElement.addEventListener("change", function() {
        document.querySelector(".add__image").innerHTML = "";
        console.log("evenement");
        // const image = document.createElement("img");
        // image.src = photoElement.value;
        // formElement.appendChild(image);
    })
}

// fonction pour suprimé un projet.

export async function can(){
    const trashCan = document.querySelectorAll(".cards i");
    console.log(trashCan);
}
