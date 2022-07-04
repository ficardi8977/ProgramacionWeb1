cargarDatosPerfil();

let passValido = false;
let passConfirmarValido = false;
let medioPagoValido = true;
let cambioDetectadoPass = false;
let cambioDetectadoMedioPago = false;


$("#pass").keyup(function () {
    cambioDetectadoPass = true;
    if (!validarRequerido(this) || !validarContraseña(this)) {
        passValido = false;
    } else {
        passValido = true;
        $("#passError").text('\xA0');
    }
});

$("#passConfirmar").keyup(function () {
    cambioDetectadoPass = true;
    if (!validarRequerido(this) || !validarIgual(this, document.getElementById("pass"))) {
        passConfirmarValido = false;
    } else {
        passConfirmarValido = true;
        $("#passConfirmarError").text('\xA0');
    }
});

$("#numeroTarjeta").keyup(function () {
    if ($('#tarjeta').is(':checked')) {
        if (!validarRequerido(this) || !validarNumeroTarjeta(this)) {
            numeroTarjetaValido = false;
        } else {
            numeroTarjetaValido = true;
            $("#numeroTarjetaError").text('\xA0');
        }
        medioPagoValido = (numeroTarjetaValido && codigoTarjetaValido);
    }
});

$("#codigoTarjeta").keyup(function () {
    if ($('#tarjeta').is(':checked')) {
        if (!validarRequerido(this) || !validarNumerosCodigoTarjeta(this)) {
            codigoTarjetaValido = false;
        }
        else {
            codigoTarjetaValido = true;
            $("#codigoTarjetaError").text('\xA0');
        }
        medioPagoValido = (numeroTarjetaValido && codigoTarjetaValido);
    }
});

$("#cbu").keyup(function () {

    if ($('#transferencia').is(':checked')) {
        if (!validarSoloNumeros(this) || !validarRequerido(this)) {
            medioPagoValido = false;
        } else {
            medioPagoValido = true;
            $("#cbuError").text('\xA0');
        }
    }
});

$("#formPerfil").change(function () {
    if(cambioDetectadoMedioPago || cambioDetectadoPass){
        $(".mensajeCambiosConfirmados").prop("hidden", false);
    }
    if ((cambioDetectadoPass && !cambioDetectadoMedioPago && passValido && passConfirmarValido) || 
        (cambioDetectadoMedioPago &&  !cambioDetectadoPass && medioPagoValido) ||
        cambioDetectadoPass && cambioDetectadoMedioPago && passValido && passConfirmarValido
        && medioPagoValido) {
        $('#btnRegistrar').prop('disabled', false);
    } else {
        $('#btnRegistrar').prop('disabled', true);
    }
});

$("#formPerfil").submit(function () {
    let tarjeta = false;
    let cupon = false;
    let transferencia = false;
    let numeroTarjeta  = "";
    let codigoTarjeta  = "";
    let cbu = "";
    let rapiPago = false;
    let pagoFacil = false;
    
    if($('#tarjeta').is(':checked')){
        tarjeta = true
        numeroTarjeta = $("#numeroTarjeta").val();
        codigoTarjeta = $("#codigoTarjeta").val();                
    }
    if($('#cupon').is(':checked')){
        cupon = true;
        rapiPago = $("#rapiPago").is(':checked');
        pagoFacil = $("#pagoFacil").is(':checked');
    }
    if($('#transferencia').is(':checked')){
        transferencia = true;
        cbu = $("#cbu").val(); 
    }
    modificacionPerfil(tarjeta, cupon, transferencia, numeroTarjeta, codigoTarjeta, rapiPago, pagoFacil, cbu);
});

$('input[name="cupon"]').change(function () {
    if (!$('input[name="cupon"]').is(':checked')){
        medioPagoValido = false;
        $("#cuponError").text("Debe seleccionarse al menos un cupon de pago");
    } else {
        medioPagoValido = true;
        $("#cuponError").text('\xA0');
    }
});
$('input[name="tipoPago"]').change(function () {
    medioPagoValido = false;
    cambioDetectadoMedioPago = true;
    if ($('#cupon').is(':checked')) {
        if (!$('input[name="cupon"]').is('checked')) {
            $('#pagoFacil').prop('checked', true);
            $('#pagoFacil').prop('disabled', false);
            $('#rapiPago').prop('disabled', false);
            $('#cbu').prop('disabled', true);
            $('#numeroTarjeta').prop('disabled', true);
            $('#codigoTarjeta').prop('disabled', true);
            medioPagoValido = true;
        }
    }else{
        $('#pagoFacil').prop('checked', false);
        $('#rapiPago').prop('checked', false);
        $('#pagoFacil').prop('disabled', true);
        $('#rapiPago').prop('disabled', true);

        if($('#tarjeta').is(':checked')){
            $('#numeroTarjeta').prop('disabled', false);
            $('#codigoTarjeta').prop('disabled', false);
            $('#cbu').prop('disabled', true);
        }else{
            $('#cbu').prop('disabled', false);
            $('#numeroTarjeta').prop('disabled', true);
            $('#codigoTarjeta').prop('disabled', true);
        }

    } 
        $("#numeroTarjeta").val("");
        $("#codigoTarjeta").val("");
        $("#cbu").val("");
        $('#cbuError').text('\xA0');
        $('#numeroTarjetaError').text('\xA0');
        $('#codigoTarjetaError').text('\xA0');
        $('#cuponError').text('\xA0');    
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
    
    if(localStorage.getItem("transferencia") == 'false'){
        $('#cbu').prop('disabled', true);
    }
    if(localStorage.getItem("cupon") == 'false'){
        $('#pagoFacil').prop('checked', false);
        $('#rapiPago').prop('checked', false);
        $('#pagoFacil').prop('disabled', true);
        $('#rapiPago').prop('disabled', true);
    }
    
    if(localStorage.getItem("tarjeta") == 'false'){
    $('#numeroTarjeta').prop('disabled', true);
    $('#codigoTarjeta').prop('disabled', true);
    }


}