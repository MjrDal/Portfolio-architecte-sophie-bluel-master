import { notAuthorized } from "./Functions/erreur.js";



const buttonLoginElement = document.getElementById("loginForm");
buttonLoginElement.addEventListener("submit", async function(event) {
    event.preventDefault();
    const log = {
        email: event.target.querySelector("[name=email]").value,
        password: event.target.querySelector("[name=password]").value
    }
    const chargeUtile = JSON.stringify(log);
    console.log(log);
    console.log(chargeUtile);
    const response = await fetch("http://localhost:5678/api/users/login", {
        method:"POST",
        headers: {"content-type": "application/json"},
        body: chargeUtile
    })
    const data = await response.json();
    console.log(data);
    if(response.status == 200){
        console.log(data.token);
        sessionStorage.setItem("token", data.token);
        location.assign("index.html");
    }else if(response.status == 404){
        notAuthorized("Utilisateur non trouver")
        console.log("ca marche pas");
    }else if(response.status == 401){
        notAuthorized("Mot de passe incorrecte")
    }
})



