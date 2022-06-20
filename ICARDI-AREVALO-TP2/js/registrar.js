/////// EVENTOS ////////////////////////////////////////////////////////
const form = document.getElementById('FormRegistrar');

form.addEventListener('submit', (event) => {
    if (validacionesFormulario()) {
        registrarPerfil(
            document.getElementById("usuario").value, 
            document.getElementById("nombre").value, 
            document.getElementById("apellido").value, 
            document.getElementById("email").value, 
            document.getElementById("tarjeta").checked, 
            document.getElementById("cupon").checked, 
            document.getElementById("transferencia").checked, 
            document.getElementById("numeroTarjeta").value, 
            document.getElementById("codigoTarjeta").value, 
            document.getElementById("rapiPago").checked,
            document.getElementById("pagoFacil").checked,
            document.getElementById("cbu").value);

    } else {
        alert("No valido");
        event.preventDefault(); // si no cumple cancela el submit;
    }
});


document.getElementById("tarjeta").addEventListener('change', (event) => {
    document.getElementById("cbu").value ="";
    document.getElementById("rapiPago").checked =false;
    document.getElementById("pagoFacil").checked =false;
});
document.getElementById("cupon").addEventListener('change', (event) => {
    document.getElementById("numeroTarjeta").value ="";
    document.getElementById("codigoTarjeta").value ="";
    document.getElementById("cbu").value ="";

});
document.getElementById("transferencia").addEventListener('change', (event) => {
    document.getElementById("numeroTarjeta").value ="";
    document.getElementById("codigoTarjeta").value ="";
    document.getElementById("rapiPago").checked =false;
    document.getElementById("pagoFacil").checked =false;
});

//////////////////////////////////////////////////////////////////////////////////////////
/////// FUNCIONES  ///////////////////////////////////////////////////////////////////////

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
    let usuarioElement = document.getElementById("usuario");
    if (!validarRequerido(usuarioElement) || !validarSoloLetrasYNumeros(usuarioElement)) {
        esValido = false;
    }
    let passElement = document.getElementById("pass");
    if (!validarRequerido(passElement) || !validarContraseña(passElement)) {
        esValido = false;
    }
    let passConfirmarElement = document.getElementById("passConfirmar");
    if (!validarRequerido(passConfirmarElement) || !validarIgual(passConfirmarElement, passElement)) {
        esValido = false;
    }

    let tiposPago = document.getElementsByName("tipoPago");
    tiposPago.forEach((element) => {
        if (element.checked) {
            if (element.id == "cupon") {
                let cupon = document.getElementsByName("cupon");
                if (!validarCheckeado(cupon, 'cupon')) {
                    esValido = false;
                }
            }
            if (element.id == "tarjeta") {
                let codigoTarjetaElement = document.getElementById("codigoTarjeta");
                if (!validarRequerido(codigoTarjetaElement) || !validarNumerosCodigoTarjeta(codigoTarjetaElement)) {
                    esValido = false;
                }
                let numeroTarjetaElement = document.getElementById("numeroTarjeta");
                if (!validarRequerido(numeroTarjetaElement) || !validarNumeroTarjeta(numeroTarjetaElement)) {
                    esValido = false;
                }
                let errorCodigo = document.getElementById(codigoTarjetaElement.id + "Error").textContent;
                let errorNumero = document.getElementById(numeroTarjetaElement.id + "Error").textContent;
                if (errorCodigo != "") {
                    document.getElementById(codigoTarjetaElement.id + "Error").textContent = "Código de tarjeta : " + errorCodigo;
                } if (errorNumero != "") {
                    document.getElementById(numeroTarjetaElement.id + "Error").textContent = "Número de tarjeta : " + errorNumero;
                }

            }
            if (element.id == "transferencia") {
                let cbuElement = document.getElementById("cbu");
                if (!validarSoloNumeros(cbuElement) && !validarRequerido(cbuElement)) {
                    esValido = false;
                }
            }
        }
    });
    return esValido;
}
function limpiarMensajesError() {
    document.getElementById("nombreError").textContent = "";
    document.getElementById("apellidoError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("usuarioError").textContent = "";
    document.getElementById("passError").textContent = "";
    document.getElementById("passConfirmarError").textContent = "";
    document.getElementById("codigoTarjetaError").textContent = "";
    document.getElementById("numeroTarjetaError").textContent = "";
    document.getElementById("cuponError").textContent = "";
    document.getElementById("cbuError").textContent = "";
}