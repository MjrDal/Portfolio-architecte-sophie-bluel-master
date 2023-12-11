import { fetchJson } from "./Functions/api.js";
import { erreurPojet } from "./Functions/erreur.js";
import { affichageModale, affichageModaleAjoutPhoto, can, changeColoreValidate, fermeModale, fermeModaleAjoutPhoto, genererCategorie, genererPhoto, loadingImage } from "./modale.js";

const token = sessionStorage.getItem("token");
if(token){
    login();
    hiddenFilter();
    modify();
}


try {
    // récupération de la base de donner des travaux
    const projet = await fetchJson("http://localhost:5678/api/works");
    console.log(projet)
    // appelle de la fonction de création des fiches.
    genererWorks(projet);
    genererPhoto(projet);

    // récupération de la base de donner des catégorie
    const categories = await fetch("http://localhost:5678/api/categories").then(projet => projet.json());

    // const reponse = await fetch('http://localhost:5678/api/works');
    // const works = await reponse.json;
    // const valeurPieces = JSON.stringify(works);

    // fonction de génération des projet dans le html
    function genererWorks(projet) {
        for(let i = 0; i< projet.length ; i++){
            // creation d'une variable pour une fiche en fonction de i
            const fiche = projet[i];
            // récuperation de l'élémnent du DOM qui acceuillera les fiches.
            const galleryElement = document.querySelector(".gallery");
            // création de la balise de la fiche.
            const ficheElement = document.createElement("figure");
            // création du html à l'intérieur de la fiche.
            const imageElement = document.createElement("img");
            imageElement.src = fiche.imageUrl;
            const titleElement = document.createElement("figcaption");
            titleElement.innerText = fiche.title;
            // ajout du html 
            galleryElement.appendChild(ficheElement);
            ficheElement.appendChild(imageElement);
            ficheElement.appendChild(titleElement);
        }
    }


    // fonction affichage tous
    const buttonTous = document.getElementById("tous");
    buttonTous.addEventListener("click", function() {
        console.log("tous");
        document.querySelector(".gallery").innerHTML = "";
        genererWorks(projet);
        deletClass ();
        addClass("tous");
    });
    // fonction affichage objets
    const buttonObjets = document.getElementById("objets");
    buttonObjets.addEventListener("click", function() {
        console.log("objet");
        document.querySelector(".gallery").innerHTML = "";
        const objetFilter = projet.filter((projet) => projet.category.id === 1);
        genererWorks(objetFilter);
        deletClass ();
        addClass("objets");
    });
    // fonction affichage appartements
    const buttonAppartements = document.getElementById("appartements");
    buttonAppartements.addEventListener("click", function() {
        console.log("appartements");
        document.querySelector(".gallery").innerHTML = "";
        const appartementsFilter = projet.filter((projet) => projet.category.id === 2);
        genererWorks(appartementsFilter);
        deletClass ();
        addClass("appartements");
    });
    // fonction affichage hotels & restaurants
    const buttonHotel = document.getElementById("hotels_restaurants");
    buttonHotel.addEventListener("click", function() {
        console.log("hotels & restaurants");
        document.querySelector(".gallery").innerHTML = "";
        const hotelFilter = projet.filter((projet) => projet.category.id === 3);
        genererWorks(hotelFilter);
        deletClass ();
        addClass("hotels_restaurants");
    });

    // fonction pour retirer la classe button_active
    function deletClass(){
        const buttonElement = document.querySelectorAll(".filtre button");
        buttonElement.forEach(buttonElement => {
            buttonElement.classList.remove("button_active");
        })
    };
    // fonction pour remettre la classe button_active
    function addClass(id){
        const buttonElement = document.getElementById(id);
        buttonElement.classList.add("button_active");
    };
} catch (error) {
    erreurPojet ("impossible de charger les projets.")
}


// fonction pour afficher ou fermé les modales.
affichageModale();
fermeModale();
affichageModaleAjoutPhoto();
fermeModaleAjoutPhoto();
genererCategorie();
changeColoreValidate();
loadingImage();
can();

const file = document.getElementById("file")
file.addEventListener("change", function() {
    console.log(file);
})
console.log(file);

// fonction de modification de la page quand on est log
// fonction quand on est log
function login(){
    const logout = document.getElementById("indexLogout");
    const login = document.getElementById("indexLogin");
    login.classList.add("dispnone");
    logout.classList.remove("dispnone");    
}

// fonction pour ce logout
const logout = document.getElementById("indexLogout");
    logout.addEventListener("click", function(){
        sessionStorage.removeItem("token");
    })

// fonction pour cacher les filtres
function hiddenFilter(){
    const buttonFilter = document.querySelector("#portfolio .filtre");
    buttonFilter.innerHTML = "";
}

// fonction pour ajouter le bouton modifier
function modify(){
    const buttonFilter = document.querySelector("#portfolio .filtre");
    const divModify = document.createElement("div");
    const logoModify = document.createElement("i");
    const linkModify = document.createElement("a");
    divModify.classList.add("modify")
    logoModify.classList.add("fa-regular");
    logoModify.classList.add("fa-pen-to-square");
    linkModify.setAttribute("href", "#modale1");
    linkModify.classList.add("modale_link");
    linkModify.innerText = "modifier";
    buttonFilter.appendChild(divModify);
    divModify.appendChild(logoModify);
    divModify.appendChild(linkModify);
}