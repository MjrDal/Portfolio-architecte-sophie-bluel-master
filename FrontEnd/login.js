


const buttonLoginElement = document.getElementById("loginForm");
buttonLoginElement.addEventListener("submit", function(event) {
    event.preventDefault();
    const log = {
        email: event.target.querySelector("[name=email]").value,
        password: event.target.querySelector("[name=password]").value
    }
    const chargeUtile = JSON.stringify(log);
    console.log(log);
    console.log(chargeUtile);
    fetch("http://localhost:5678/api/users/login", {
        method:"POST",
        headers: {"content-type": "application/json"},
        body: chargeUtile
    })
    
})

