function cargarDatosDefault() {
    localStorage.setItem("nombre", "Fernando");
    localStorage.setItem("apellido", "Icardi");
    localStorage.setItem("email", "email@mail.com");
    localStorage.setItem("numeroTarjeta", "123456789");
    localStorage.setItem("codigoTarjeta", "778");
    localStorage.setItem("cuponPago", "pagoFacil");
    localStorage.setItem("cbu", "18582375763870");
}

function registrarPerfil(usuario, nombre, apellido, email, numeroTarjeta, codigoTarjeta, cuponPago, cbu) {
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("email", email);
    localStorage.setItem("numeroTarjeta", numeroTarjeta);
    localStorage.setItem("codigoTarjeta", codigoTarjeta);
    localStorage.setItem("cuponPago", cuponPago);
    localStorage.setItem("cbu", cbu);
}

function loginPerfil(usuario) {
    localStorage.setItem("usuario", usuario);
    cargarDatosDefault();
}

function limpiarLocalStorage() {
    localStorage.clear();
}