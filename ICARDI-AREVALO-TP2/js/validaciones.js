function validacionesFormulario() {

    limpiarMensajesError();

    let esValido = true;
    let nombreElement = document.getElementById("nombre");
    if (!validarRequerido(nombreElement) || !validarSoloCaracter(nombreElement)) {
        esValido = false;
    }
    let apellidoElement = document.getElementById("apellido");
    if (!validarRequerido(apellidoElement) || !validarSoloCaracter(apellidoElement)) {
        esValido = false;
    }
    let emailElement = document.getElementById("email");
    if (!validarRequerido(emailElement) || !validarMail(emailElement)) {
        esValido = false;
    }
    return esValido;
}


function validarSoloCaracter(nombre) {
    let esValido = true;
    if (!/^[a-zA-Z]*$/g.test(nombre.value)) {
        let mensajeError = document.getElementById(nombre.id + "Error");
        mensajeError.textContent = "Debe contener unicamente letras";
        nombre.focus();
        esValido = false;
    }
    return esValido;
}

function validarRequerido(nombre) {
    let esValido = true;
    if (nombre.value == "") {
        let mensajeError = document.getElementById(nombre.id + "Error");
        mensajeError.textContent = "Es requerido";
        nombre.focus()
        esValido = false;
    }
    return esValido;
}

function validarMail(email) {

    let esValido = true;
    if (!email.value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        let mensajeError = document.getElementById(email.id + "Error");
        mensajeError.textContent = "Debe contener el formato mail";
        esValido = false;
    } 
    return esValido;
}

function limpiarMensajesError(nombre){

    document.getElementById("nombreError").textContent = "";
    document.getElementById("apellidoError").textContent = "";
    document.getElementById("emailError").textContent = "";
}