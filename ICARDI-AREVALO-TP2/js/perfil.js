window.addEventListener("load", (event) => {
    cargarDatosPerfil();
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
}