const url = "http://localhost:3000"
//Fetch api
const listaClientes = ()=> fetch(`${url}/perfil`).then( response => response.json());

const crearCliente = (nombre, email) => {
    return fetch(`${url}/perfil`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body:JSON.stringify({nombre, email, id: uuid.v4()})
    })
}

const eliminarCliente = (id) => {
    return fetch(`${url}/perfil/${id}`, {
        method: "DELETE"
    })
}

const detalleCliente = (id) => {
    return fetch(`${url}/perfil/${id}`).then((response) => response.json()
    );
}

const actualizarCliente = (nombre, email, id) => {
    return fetch(`${url}/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, email, id}),
    })
    .then( response => {})
    .catch( err => {})
}

export const clientService = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente
}