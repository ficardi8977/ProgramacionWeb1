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

function validarSoloLetrasYNumeros(nombre){
    let esValido = true;
    if (!/^[a-zA-Z0-9]*$/g.test(nombre.value)) {
        let mensajeError = document.getElementById(nombre.id + "Error");
        mensajeError.textContent = "Debe contener unicamente letras y numeros";
        nombre.focus();
        esValido = false;
    }
    return esValido;
}
function validarContraseña(nombre){
    let esValido = true;
    let regex = /(?=.*[0-9].*[0-9])(?=.*[A-Za-z].*[A-Za-z])(?=.*[!@#$&*].*[!@#$&*])/gm; 
    if (!regex.test(nombre.value)) {
        let mensajeError = document.getElementById(nombre.id + "Error");
        mensajeError.textContent = "Debe contener un minimo de 2 letas, 2 numeros y 2 caracteres especiales";
        nombre.focus();
        esValido = false;
    }
    return esValido;
}
function validarIgual(nombre, nombreB){
    let esValido = true;
    
    if (nombre.value != nombreB.value) {
        let mensajeError = document.getElementById(nombre.id + "Error");
        mensajeError.textContent = "Debe coincidir con la contraseña";
        nombre.focus();
        esValido = false;
    }
    return esValido;
}

function validarNumerosCodigoTarjeta(codigo){
    let esValido = true;
    let mensajeError = document.getElementById(codigo.id + "Error");
    let regex = /^\D*\d{3}$/;
    if (!regex.test(codigo.value)) {
        mensajeError.textContent = "El formato del codigo debe ser de 3 numeros";
        codigo.focus();
        esValido = false;
    }else{
        if(codigo.value == '000'){
            mensajeError.textContent = "El codigo de tarjeta debe ser distino de 000";
            codigo.focus();
            esValido = false;
        }
    }
    return esValido;
}

function validarNumeroTarjeta(numero){
    let esValido = true;
    let mensajeError = document.getElementById(numero.id + "Error");
    let regex =/^\D*\d{16,19}$/;

    if (!regex.test(numero.value)) {
        mensajeError.textContent = "El número de tarjeta debe ser unicamente numeros entre 16 y 19 digitos";
        numero.focus();
        esValido = false;
    } else{
        let sumaDeNumeros = 0
        for (var i = 0; i < numero.value.length-1; i++) {
        sumaDeNumeros+=parseInt(numero.value[i]);
        }
        let ultimoNumero = numero.value[numero.value.length-1];
        if(esPar(sumaDeNumeros) && esPar(ultimoNumero)){
            mensajeError.textContent = "La suma de numeros de tarjeta es par. El ultimo numero debe es impar";
            numero.focus();
            esValido = false;    
        }
        else{
            if(!esPar(sumaDeNumeros) && !esPar(ultimoNumero)){
                mensajeError.textContent = "La suma de numeros de tarjeta es impar. El ultimo numero debe es par";
                numero.focus();
                esValido = false;        
            }
        }
    }
    return esValido;
}
function validarCheckeado(elements, nameElementsId){
    let esValido = true;
    let haySeleccionado = false;
    elements.forEach((element) => {
        if(element.checked){
            haySeleccionado = true;
        }
    });
    if(!haySeleccionado){
        let mensajeError = document.getElementById(nameElementsId + "Error");
        mensajeError.textContent = "Se debe seleccionar una opcion de cupon";
        esValido = false;        
    }
    return esValido;
}
function validarSoloNumeros(numero){
    let esValido = true;
    let mensajeError = document.getElementById(numero.id + "Error");
    let regex = /[0-9]/gm;
    if (!regex.test(numero.value)) {
        mensajeError.textContent = "Debe ingresarse unicamente números";
        numero.focus();
        esValido = false;
    }
    return esValido;
}

function esPar(numero) { 
    return (numero % 2) === 0; 
}
