window.addEventListener("load", (event) => {
    cargarDatosPerfil();
});

let passEsValido = false;
document.getElementById("pass").addEventListener("keyup",(event)=>{
    document.getElementById("passError").textContent = "";
    let passElement = document.getElementById("pass");
    if (!validarRequerido(passElement) || !validarContraseña(passElement)) {
        passEsValido = false;
    }else{
        passEsValido = true;
    }
});

let passConfirmarEsValido = false;
document.getElementById("passConfirmar").addEventListener("keyup",(event)=>{
    document.getElementById("passConfirmarError").textContent = "";
    let passElement = document.getElementById("pass");
    let passConfirmarElement = document.getElementById("passConfirmar");
    if (!validarRequerido(passConfirmarElement) || !validarIgual(passConfirmarElement, passElement)) {
        passConfirmarEsValido = false;
    }else{
        document.getElementById("passConfirmarError").textContent = "";
        passConfirmarEsValido = true;
    }
});

let cambioDetectadoEnMedioPago = false;
document.getElementById("tarjeta").addEventListener('change', () => {
    cambioDetectadoEnMedioPago = true;
    document.getElementById("cbu").value ="";
    document.getElementById("rapiPago").checked =false;
    document.getElementById("rapiPago").disabled =true;
    document.getElementById("pagoFacil").checked =false;
    document.getElementById("pagoFacil").disabled =true;
});
document.getElementById("cupon").addEventListener('change', () => {
    cambioDetectadoEnMedioPago = true;
    document.getElementById("pagoFacil").disabled =false;
    document.getElementById("rapiPago").disabled =false;
    document.getElementById("numeroTarjeta").value ="";
    document.getElementById("codigoTarjeta").value ="";
    document.getElementById("cbu").value ="";

});
document.getElementById("transferencia").addEventListener('change', () => {
    cambioDetectadoEnMedioPago = true;
    document.getElementById("numeroTarjeta").value ="";
    document.getElementById("codigoTarjeta").value ="";
    document.getElementById("rapiPago").checked =false;
    document.getElementById("pagoFacil").checked =false;
    document.getElementById("rapiPago").disabled =true;
    document.getElementById("pagoFacil").disabled =true;

});

let medioPagoEsValido = false;
let numeroTarjetaElement = document.getElementById("numeroTarjeta");
numeroTarjetaElement.addEventListener("keyup",(event)=>{
    cambioDetectadoEnMedioPago = true;
    document.getElementById("numeroTarjetaError").textContent = "";
    if (!validarRequerido(codigoTarjetaElement) || !validarNumerosCodigoTarjeta(codigoTarjetaElement)) {
        medioPagoEsValido = false;
    }else{
        medioPagoEsValido = true;
    }
});


document.getElementById("formPerfil").addEventListener("change", (event) => {
    let btnGuardar = document.getElementById('btnGuardar');
    if(passEsValido && passConfirmarEsValido){
        btnGuardar.disabled = false;
    }else{
        btnGuardar.disabled = true;
    }
});

function cargarDatosPerfil(){
    CargarDatoCheckBoxLocalStorage("tarjeta");
    CargarDatoCheckBoxLocalStorage("cupon");
    CargarDatoCheckBoxLocalStorage("transferencia");
    CargarDatoCheckBoxLocalStorage("pagoFacil");
    CargarDatoCheckBoxLocalStorage("rapiPago");
    CargarDatoLabelLocalStorage("usuario");
    CargarDatoLabelLocalStorage("email");
    CargarDatoInputLocalStorage("numeroTarjeta");
    CargarDatoInputLocalStorage("codigoTarjeta");
    CargarDatoInputLocalStorage("cbu");
}