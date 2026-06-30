// Mensaje de bienvenida
window.addEventListener("load", () => {
    console.log("Bienvenido a la Fundación Fraternidad Sin Fronteras");
});

// Desplazamiento suave del menú
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener("click", function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Botón para volver arriba
const botonArriba = document.createElement("button");
botonArriba.innerHTML = "⬆";
botonArriba.id = "btnArriba";
document.body.appendChild(botonArriba);

botonArriba.style.position = "fixed";
botonArriba.style.bottom = "20px";
botonArriba.style.right = "20px";
botonArriba.style.padding = "12px 15px";
botonArriba.style.borderRadius = "50%";
botonArriba.style.border = "none";
botonArriba.style.background = "#0c4a6e";
botonArriba.style.color = "white";
botonArriba.style.cursor = "pointer";
botonArriba.style.display = "none";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }
});

botonArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});