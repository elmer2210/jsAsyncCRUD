//importaciones
import {clientService} from "../services/client-service.js"

//backtics
const crearNuevaLinea = (nombre, email, id) => {
    const linea = document.createElement("tr");
    const contenido = `
        <td class="td" data-td>
            ${nombre}
        </td>
        <td>
            ${email}
        </td>
        <td>
            <ul class="table__button-control">
            <li>
                <a
                href="../screens/editar_cliente.html?id=${id}"
                class="simple-button simple-button--edit"
                >Editar</a
                >
            </li>
            <li>
                <button
                class="simple-button simple-button--delete"
                type="button"
                id="${id}"
                >
                Eliminar
                </button>
            </li>
            </ul>
        </td>`;
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
        clientService.eliminarCliente(id).then(response=>{

        }).catch(err => alert("Ocurrió el siguiente error", err))
    })
    return linea;
}

const table = document.querySelector("[data-table]");

clientService.listaClientes()
.then((data)=>{
    data.forEach(({nombre, email, id}) => {
        const nuevaLinea = crearNuevaLinea(nombre,email, id);
        table.appendChild(nuevaLinea);
    });
}).catch((error)=>{
    alert("Ocurrio el siguiente error: " + error)
});
