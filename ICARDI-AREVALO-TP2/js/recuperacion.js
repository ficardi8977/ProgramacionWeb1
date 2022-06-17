/// EVENTOS ///////////////////////////////////////////////////////
const form = document.getElementById('frmRecuperacion');

form.addEventListener('submit', (event) => {
    limpiarMensajesError();
    let emailElement = document.getElementById("email");
    let usuarioElement = document.getElementById("usuario");

    if (!esRecuperacionValido(emailElement, usuarioElement)) {
        event.preventDefault();
    }
});



document.getElementById("email").addEventListener('keyup',(event) => {
    cambiarEstadoBtnEnviar( document.getElementById("email"), document.getElementById("usuario"))
}
);
document.getElementById("usuario").addEventListener('keyup',(event) => {
    cambiarEstadoBtnEnviar( document.getElementById("email"), document.getElementById("usuario"))
}
);
/////////////////////////////////////////////////////////////////////
/// funciones ///////////////////////////////////////////////////////
function esRecuperacionValido(emailElement, usuarioElement){
    let esValido = true;

    if(!validarSoloLetrasYNumeros(usuarioElement)){
        esValido = false;
    }
    if(!validarMail(emailElement)){
        esValido = false;        
    }

    return esValido;
}

function cambiarEstadoBtnEnviar(emailElement, usuarioElement){
    let btnEnviar = document.getElementById('btnEnviar');
    if(usuarioElement.value.length > 0 && emailElement.value.length > 0){
        btnEnviar.disabled = false;
    }else{
        btnEnviar.disabled = true;
    }
}
function limpiarMensajesError(){
    document.getElementById("emailError").textContent =  " ";
    document.getElementById("usuarioError").textContent = " ";
}