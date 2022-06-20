function cargarDatosDefault() {
    localStorage.setItem("nombre", "Fernando");
    localStorage.setItem("apellido", "Icardi");
    localStorage.setItem("email", "email@mail.com");
    localStorage.setItem("tarjeta", false);
    localStorage.setItem("cupon", false);
    localStorage.setItem("transferencia", true);
    localStorage.setItem("numeroTarjeta", "");
    localStorage.setItem("codigoTarjeta", "");
    localStorage.setItem("rapiPago", false);
    localStorage.setItem("pagoFacil", false);
    localStorage.setItem("cbu", "18582375763870");
}

function registrarPerfil(usuario, nombre, apellido, email, tarjeta, cupon, transferencia, numeroTarjeta, codigoTarjeta, rapiPago, pagoFacil, cbu) {
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("email", email);
    localStorage.setItem("tarjeta", tarjeta);
    localStorage.setItem("cupon", cupon);
    localStorage.setItem("transferencia", transferencia);
    localStorage.setItem("numeroTarjeta", numeroTarjeta);
    localStorage.setItem("codigoTarjeta", codigoTarjeta);
    localStorage.setItem("rapiPago", rapiPago);
    localStorage.setItem("pagoFacil",pagoFacil);
    localStorage.setItem("cbu", cbu);
}

function loginPerfil(usuario) {
    localStorage.setItem("usuario", usuario);
    cargarDatosDefault();
}

function limpiarLocalStorage() {
    localStorage.clear();
}

function CargarDatoCheckBoxLocalStorage(value){
    document.getElementById(value).checked =  JSON.parse(localStorage.getItem(value)) === true;
}
function CargarDatoInputLocalStorage(value){
    document.getElementById(value).value = localStorage.getItem(value);
}
function CargarDatoLabelLocalStorage(value){
    document.getElementById(value).textContent = localStorage.getItem(value);
}