const modal = document.getElementById("modal");
const loginBtn = document.getElementById("login-btn");
const favBtn = document.getElementById("fav-btn");
const span = document.getElementsByClassName("close")[0];

let redirectTo = '';

export function initializeModalLogin() {
  loginBtn.onclick = function() {
    modal.style.display = "block";
    redirectTo = "./user-page.html";
}
favBtn.onclick = function() {
    modal.style.display = "block";
    redirectTo = "./fav-page.html";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}

export function handleLoginFormSubmit(event, redirectTo) {
    event.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "asa@asa.com" && password === "123asa") {
        localStorage.setItem("loggedInUser", email);

        window.location.href = `./${redirectTo}`;
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
};