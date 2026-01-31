function mostrarSeccion(id) {
    document.getElementById("inicio").style.display = "none";

    document.querySelectorAll(".seccion").forEach(sec => {
        sec.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}


function mostrarSeccion(id) {
    document.getElementById("inicio").style.display = "none";

    document.querySelectorAll(".seccion").forEach(sec => {
        sec.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}

function enviarWhatsApp(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;

    const mensaje =
        `Hola, deseo comunicarme con la Iglesia Evangélica Bautista Central.%0A%0A` +
        `👤 Nombre: ${nombre}%0A` +
        `📞 Teléfono: ${telefono}%0A` +
        `📧 Correo: ${correo}`;

    const numero = "973051913";
    const url = `https://wa.me/${numero}?text=${mensaje}`;

    window.open(url, "_blank");
}

function volverInicio() {
    document.querySelectorAll(".seccion").forEach(sec => {
        sec.style.display = "none";
    });

    document.getElementById("inicio").style.display = "block";
}






    function toggleHorarios() {
    const horarios = document.getElementById("horarios");
    horarios.style.display =
    horarios.style.display === "block" ? "none" : "block";
}
