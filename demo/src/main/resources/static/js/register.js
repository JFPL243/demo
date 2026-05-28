// Call the dataTables jQuery plugin
$(document).ready(function() {

});


async function registrarUsuarios() {

    let datos = {};
    datos.name = document.getElementById('TXTnombre').value;
    datos.surname = document.getElementById('TXTapellido').value;
    datos.email = document.getElementById('TXTemail').value;
    datos.password = document.getElementById('TXTpassword').value;

    let repetirPassword = document.getElementById('TXTrepeatPassword').value;

    if (repetirPassword != datos.password) {
        alert('Las contraseñas no coinciden');
        return;
    }

    const request = await fetch('api/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
          
    });
const users = await request.json();
}