let nombreValido = false;
let apellidoValido = false;
let usuarioValido = false;
let emaiValido = false;
let passValido = false;
let passConfirmarValido = false;
let medioPagoValido = false;

$('#numeroTarjeta').prop('disabled', false);
$('#codigoTarjeta').prop('disabled', false);
$('#cbu').prop('disabled', true);
$('#pagoFacil').prop('checked', false);
$('#rapiPago').prop('checked', false);
$('#pagoFacil').prop('disabled', true);
$('#rapiPago').prop('disabled', true);



$("#nombre").keyup(function () {
    if (!validarRequerido(this) || !validarSoloCaracter(this)) {
        nombreValido = false;
    } else {
        nombreValido = true;
        $("#nombreError").text('\xA0');
    }
});

$("#apellido").keyup(function () {
    if (!validarRequerido(this) || !validarSoloCaracter(this)) {
        apellidoValido = false;
    } else {
        apellidoValido = true;
        $("#apellidoError").text('\xA0');
    }
});

$("#email").keyup(function () {
    if (!validarRequerido(this) || !validarMail(this)) {
        emaiValido = false;
    } else {
        emaiValido = true;
        $("#emailError").text('\xA0');
    }
});

$("#usuario").keyup(function () {
    if (!validarRequerido(this) || !validarSoloLetrasYNumeros(this)) {
        usuarioValido = false;
    } else {
        usuarioValido = true
        $("#usuarioError").text('\xA0');
    }
});

$("#pass").keyup(function () {
    if (!validarRequerido(this) || !validarContraseña(this)) {
        passValido = false;
    } else {
        passValido = true;
        $("#passError").text('\xA0');
    }
});

$("#passConfirmar").keyup(function () {
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

$('input[name="cupon"]').change(function () {
    debugger;
    if (!$('input[name="cupon"]').is(':checked')){
        medioPagoValido = false;
        $("#cuponError").text("Debe seleccionarse al menos un cupon de pago");
    } else {
        medioPagoValido = true;
        $("#cuponError").text('\xA0');
    }
});
$('input[name="tipoPago"]').change(function () {

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
$("#btnCancelar").click(function(){
    window.location = "index.html";
})


$("#FormRegistrar").change(function () {
    if (nombreValido && apellidoValido && emaiValido && usuarioValido && passValido && passConfirmarValido && medioPagoValido) {
        $('#btnRegistrar').prop('disabled', false);
    } else {
        $('#btnRegistrar').prop('disabled', true);
    }
});