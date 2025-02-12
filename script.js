function abrirCarta() {
    const sobre = document.getElementById("sobre");
    const tapa = document.querySelector(".tapa");
    const carta = document.getElementById("carta");
    const musica = document.getElementById("musica");

    tapa.style.transform = "rotateX(180deg)";
    
    setTimeout(() => {
        sobre.style.display = "none";
        carta.style.display = "block";
        musica.play(); // Reproduce la música al abrir la carta
    }, 1000);
}

// Crear corazones animados
function crearCorazon() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(crearCorazon, 500);
function cerrarcarta() {
    // Obtén los elementos de la carta, sobre y la música
    const sobre = document.getElementById("sobre");
    const carta = document.getElementById("carta");
    const musica = document.getElementById("musica");
    const tapa = document.querySelector(".tapa");

    // Opcional: reinicia la animación de la tapa (ajusta según necesites)
    tapa.style.transform = ""; // Resetea el estilo para volver a la posición inicial

    // Oculta la carta y muestra el sobre nuevamente
    carta.style.display = "none";
    sobre.style.display = "flex"; // O "block", según cómo esté definido en tu CSS

    // Detén la música y reinicia su tiempo
    musica.pause();
    musica.currentTime = 0;
}
