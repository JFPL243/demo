// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuarios();
  $('#usersTable').DataTable();
});


async function cargarUsuarios() {
  const request = await fetch('api/users', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
});

const users = await request.json();



let listadoHTML = '';
for  (let user of users) {

let botonEliminar = ` <a href="#" onclick="eliminarUsuario(${user.id})" class="btn btn-danger btn-circle">
                                <i class="fas fa-trash"></i>
                                </a>`;

let userHTML = `  <tr><td>${user.name}</td>
                    <td>${user.email}</td><td>${user.surname}</td>
                    <td>${user.number}</td><td>${user.password}</td>
                    <td>${user.id}</td>
                                <td>
                                <button class="btn btn-primary">Editar</button>
                                ` + botonEliminar + `
                                <button class="btn btn-info">Buscar</button>
                                </td>
                                </tr>
                                            `;

listadoHTML += userHTML;
}

document.querySelector('#usersTable tbody').outerHTML = listadoHTML;
console.log(users);

}

async function eliminarUsuario(id){

  if(!confirm('¿Desea eliminar este usuario?')) {
    return;
  }

   const request = await fetch('api/users/' + id, {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
  });

  location.reload();

 }   