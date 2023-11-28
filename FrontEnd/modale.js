
// fonction pour affiché la modale
export async function affichageModale (){
    const modale1 = document.querySelector(".modale_link");
    modale1.addEventListener("click", function(event){
        event.preventDefault();
        const modaleElement = document.querySelector(".modale")
        modaleElement.setAttribute("style", "display: flex;");
        const modaleStop = document.querySelector(".modale_stop");
        modaleStop.addEventListener("click", function (e) {
            e.stopPropagation();
        })
    })
}


// fonction pour fermé la modale
export async function fermeModale () {
    const modaleElement = document.querySelector(".modale");
    modaleElement.addEventListener("click", function(event) {
        event.preventDefault();
        modaleElement.setAttribute("style", "display: none;");
    })
}

// // fonction pour stoper la propagation
// function stopPropa (event){
//     event.stopPropagation();
// }

