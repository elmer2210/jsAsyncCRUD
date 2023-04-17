import { clientService } from "../services/client-service.js";

const formulario = document.querySelector("[data-form]");

//Funciones asíncronas
const obtenerInformacion = async() => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id === null) {
        window.location.href = "/screens/error.html"
    }
    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");
    try {
        const cliente = await clientService.detalleCliente(id);
        //Asignamos valor
        if (cliente.nombre && cliente.email) {
            nombre.value = cliente.nombre;
            email.value = cliente.email;   
        } else {
            throw new Error();
        }
    } catch (error) {
        console.log("Error catch - ", error);
        window.location.href = "/screens/error.html";
    }
}

obtenerInformacion();

formulario.addEventListener("submit", async(event) => {
    event.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    try {
        if (nombre && email) {
            clientService.actualizarCliente(nombre, email, id)
            .then(()=>window.location.href = "/screens/edicion_concluida.html")
        } else {
            throw new Error();
        }
    } catch (error) {
        window.location.href = "/screens/error.html";
    }
})