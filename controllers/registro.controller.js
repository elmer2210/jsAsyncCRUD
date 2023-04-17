import { clientService } from "../services/client-service.js";

//escuchar el evento sutmit del formulario
const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (event)=> {
    event.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    clientService.crearCliente(nombre,email).then(() => {
        window.location.href = "/screens/registro_completado.html";
    }).catch((error) => alert("ocurrió el siguiente error: ", error))
})