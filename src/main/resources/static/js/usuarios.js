// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarUsuarios();

  $('#usuarios').DataTable();

  actualizarEmailDelUsuario();

});
function actualizarEmailDelUsuario(){
     document.getElementById('txt-email-usuario').outerHTML = localStorage.email;
}
async function cargarUsuarios(){

    const request = await fetch('api/usuarios', {
        method: 'GET',
    headers: getHeaders()
    });
    const usuarios = await request.json();


    let listadoHtml = '';
    for(let usuario of usuarios){
        let botonEliminar = '<a href="#" onclick="eliminarUsuario(' + usuario.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
        let telefonoTexto = usuario.telefono == null ? '-' : usuario.telefono;
        let usuariohtml = '<tr><td>'+ usuario.id+'</td><td>' + usuario.nombre+' '+ usuario.apellido+ '</td><td>'
                            + usuario.email+'</td><td>'+ telefonoTexto
                            +'</td><td> ' + botonEliminar + '</td></tr>';
        listadoHtml += usuariohtml;
    }
    console.log(usuarios);

usuario = '<tr><td>123</td><td> Prueba Gonzalo Herrera</td><td>gonzacai1994@gmail.com</td><td>1168454311</td><td><a href="#" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a></td></tr>';
document.querySelector('#usuarios tbody').outerHTML = listadoHtml;

}
function getHeaders(){
    return {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization' : localStorage.token
        };
}

async function eliminarUsuario(id){
    if(!confirm ('¿Desea eliminar este usuario?')){
        return;
    }

    const request = await fetch('api/usuarios/' + id, {
        method: 'DELETE',
        headers: getHeaders()

    });

    location.reload();
}