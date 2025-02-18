var FormularioValidação = function () {
    var formEmail = document.getElementById("formEmail");
    var inputEmail = document.getElementById("inputEmail");
    if (!formEmail || !inputEmail) {
        console.warn("Email form or input not found!");
        return;
    }
    var message = document.createElement("p");
    message.style.marginTop = "10px";
    message.style.opacity = "0";
    message.style.transition = "opacity 0.5s ease-in-out";
    formEmail.appendChild(message);
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    formEmail.addEventListener("submit", function (event) {
        event.preventDefault();
        var email = inputEmail.value.trim();
        if (isValidEmail(email)) {
            message.textContent = "✔ Valid email! You have successfully subscribed.";
            message.style.color = "green";
        }
        else {
            message.textContent =
                "✖ Invalid email. Please enter a correct email address.";
            message.style.color = "red";
        }
        message.style.opacity = "1";
        setTimeout(function () {
            message.style.opacity = "0";
            setTimeout(function () {
                message.textContent = "";
            }, 100);
        }, 3000);
    });
};