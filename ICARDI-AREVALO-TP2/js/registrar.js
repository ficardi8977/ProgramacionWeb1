const form = document.getElementById('FormRegistrar');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (validacionesFormulario()) {
        let usuario = document.getElementById("usuario").value;
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let email = document.getElementById("email").value;
        let pass = document.getElementById("pass").value;
        let numeroTarjeta = document.getElementById("numeroTarjeta").value;
        let codigoTarjeta = document.getElementById("codigoTarjeta").value;
        let cuponPago = document.getElementById("cuponPago").value;
        let cbu = document.getElementById("cbu").value;
        
        RegistrarPerfil(usuario,nombre,apellido,email,pass,numeroTarjeta,codigoTarjeta,cuponPago,cbu);

    } else {
        alert("no valido");
        //event.preventDefault(); // si no cumple cancela el submit;
    }
});


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
function limpiarMensajesError(nombre) {

    document.getElementById("nombreError").textContent = "";
    document.getElementById("apellidoError").textContent = "";
    document.getElementById("emailError").textContent = "";
}