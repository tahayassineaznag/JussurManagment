
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        message.style.color = "#D93025";
        message.textContent = "Preencha todos os campos.";
        return;
    }

    message.style.color = "#17469B";
    message.textContent =
        "A interface está pronta. A autenticação ainda precisa de ser configurada.";
});
