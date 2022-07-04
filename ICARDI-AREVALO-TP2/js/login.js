const form = document.getElementById('frmLogin');

form.addEventListener('submit', (event) => {
    limpiarMensajesError();

    let usuarioElement = document.getElementById("usuario");
    let contraseñaElement = document.getElementById("pass");

    if (esLoginValido(usuarioElement, contraseñaElement)) {
        loginPerfil(usuarioElement.value);
    }else{
        event.preventDefault();
    }
});

function esLoginValido(usuario, contraseña){
    let esValido = true;

    if(!validarRequerido(contraseña)){
        esValido = false;
    }    
    if(!validarRequerido(usuario)){
        esValido = false;
    }
    return esValido;
}

function limpiarMensajesError(){
    $(".mensajeError").empty();
}