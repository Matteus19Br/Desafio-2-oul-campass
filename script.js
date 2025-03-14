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

function adicionarProduto(nome, preco, imagem) {
    try {
        // Criando um objeto com os detalhes do produto
        let produto = {
            nome: nome,
            preco: preco,
            imagem: imagem
        };

        // Salvando no Local Storage para ser usado na próxima página
        localStorage.setItem("produtoSelecionado", JSON.stringify(produto));

        // Redirecionando para product.html
        window.location.href = "product.html";
    } catch (error) {
        alert("Erro ao adicionar produto!");
        console.error("Erro:", error);
    }
}


window.onload = function () {
    window.adicionarProduto = async function (name, price, imageUrl) {
        const response = await fetch('http://localhost:3000/api/produtos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, price, imageUrl }),
        });

        if (response.ok) {
            window.location.href = 'product.html';
        } else {
            alert('Erro ao adicionar produto!');
        }
    };
};