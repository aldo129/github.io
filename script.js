// Carrusel automático
let index = 0;
const images = document.querySelectorAll(".carousel img");

setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
}, 2000);

// 🔥 CAMBIA ESTA FECHA
const fechaInicio = new Date("2024-01-01");

function actualizarContador() {
    const ahora = new Date();
    const diff = ahora - fechaInicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("contador").innerText =
        dias + " días juntos ❤️";
}

setInterval(actualizarContador, 1000);

// Botón
function mostrarMensaje() {
    document.getElementById("mensaje").innerText =
        "Te amo más de lo que puedo explicar ❤️";
}
