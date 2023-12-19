import {update } from "./works.js";

// récupération de la base de donner des catégorie
const categories = await fetch("http://localhost:5678/api/categories").then(projet => projet.json());


// fonction pour affiché la modale des images.
export async function affichageModale(){
    const modale1 = document.querySelector(".modale_link");
    const back = document.getElementById("back");

    modale1.addEventListener("click", function(event){
        event.preventDefault();
        attrubuteOpenModal()
    })
    back.addEventListener("click", function(event){
        event.preventDefault();
        attrubuteOpenModal()
    })

}

// fonction pour changer les attribut de la modale.
function attrubuteOpenModal(){
    const modaleElement = document.getElementById("modale1")
    modaleElement.setAttribute("style", "display: flex;");
    const modaleStop1 = document.getElementById("modale_stop1");
    modaleStop1.addEventListener("click", function (e) {
        e.stopPropagation();
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
    const cardsElement = document.querySelector(".cards");
    cardsElement.innerHTML = '';
    console.log("clear dans modale") 
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
        logoCan.setAttribute("data-id", projet[i].id);
        logoCan.classList.add("fa-solid");
        logoCan.classList.add("fa-trash-can");
        // ajout du click sur la poubelle
        logoCan.addEventListener("click", function(event){
            event.preventDefault();
            handleClick(projet[i].id);
        })
        // ajout du html 
        ficheElement.appendChild(logoCan);
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

// fonction de génération les categorie dans le select.
export async function genererCategorie(projet) {
    for(let i = 0; i< categories.length ; i++){
        // creation d'une variable pour une fiche en fonction de i
        const fiche = categories[i];
        // récuperation de l'élémnent du DOM qui acceuillera les fiches.
        const categorieElement = document.getElementById("category");
        // création de la balise de la fiche.
        const optionElement = document.createElement("option");
        // Ajout du contenue da la balise option.
        optionElement.innerText = fiche.name;
        optionElement.setAttribute("value", fiche.id);
        // Ajout de option dans le html.
        categorieElement.appendChild(optionElement);
    }
}

// Fonction qui change la couleur du bouton valider

export async function changeColoreValidate(){
    const photoElement = document.getElementById("fileInput");
    const titleElement = document.getElementById("title");
    const categorieElement = document.getElementById("category");
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
export async function handleFiles(files){
    const cardsElement = document.querySelector(".cards");
    cardsElement.innerHTML = '';
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
    
        if (!file.type.startsWith("image/")) {
          continue;
        }
    
        const img = document.createElement("img");
        img.classList.add("obj");
        img.file = file;
        const previewElement = document.getElementById("previewImageContainer");
        previewElement.appendChild(img); // Où  "preview" correspond à l'élément div où on affiche le contenu.
    
        const reader = new FileReader();
        reader.onload = (e) => {
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
      } 
}
export async function loadingImage(){
    const filesElement = document.getElementById("fileInput");
    filesElement.addEventListener("change", function(){
        const selectFile = document.getElementById("selectFile");
        selectFile.classList.remove("select__file");
        selectFile.classList.add("dispnone");
        handleFiles(this.files)
    })
}

// fonction pour suprimé un projet.

export async function handleClick(dataId){
    const token = sessionStorage.getItem("token");
    const response = await fetch(`http://localhost:5678/api/works/${dataId}`, {
        method:"DELETE",
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${token}`
    }
        
    }).then(async function(){
        await new Promise(resolve => setTimeout(resolve, 1000));
        update();
    });
}

// fonction pour ajouter un projet.
const form = document.forms.namedItem("fileinfo");
form.addEventListener("submit", async function(event){
    event.preventDefault();
    const submitElement = document.getElementById("buttonValidate");
    submitElement.addEventListener("submit", function(e){
        e.preventDefault();
    })

    const categoryElement = document.getElementById("category")
    const token = sessionStorage.getItem("token");
    const output = document.getElementById("output");
    const formData = new FormData(form);
    formData.set("category", categoryElement.value);

    const response = await fetch("http://localhost:5678/api/works", {
        method:"POST",
        headers: {
            'Accept': 'application/json',
            "Authorization": `Bearer ${token}`
        },
        body: formData
    }).then(async function(response){
        output.innerHTML = response.status === 201 ? "fichier téléversé" : `Erreur ${response.status} lors de la tentative de téléversement du fichier.<br />`;
        await new Promise(resolve => setTimeout(resolve, 1000));
        update();
        const modale2 = document.getElementById("modale2");
        modale2.setAttribute("style", "display: none;");
        attrubuteOpenModal()
        form.reset()
        const selectFile = document.getElementById("selectFile");
        selectFile.classList.add("select__file");
        selectFile.classList.remove("dispnone");
        const previewElement = document.getElementById("previewImageContainer");
        previewElement.innerHTML = '';
    });
});
