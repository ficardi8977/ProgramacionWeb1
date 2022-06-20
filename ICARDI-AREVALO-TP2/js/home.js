document.getElementById("selectorHome").addEventListener('change',(event) => {
    let epoca = document.getElementById("seccionEpoca");
    let terror = document.getElementById("seccionTerror");
    let fantasia = document.getElementById("seccionFantasia");
    let animadas = document.getElementById("seccionAnimadas");
    let destacadas = document.getElementById("seccionDestacadas");

    var select = document.getElementById('selectorHome');
    var option = select.options[select.selectedIndex];
    if(option.value == 0){
        epoca.hidden = false;
        terror.hidden = false;
        fantasia.hidden = false;
        animadas.hidden = false;
        destacadas.hidden = false;
    }else{
        epoca.hidden = true;
        terror.hidden = true;
        fantasia.hidden = true;
        animadas.hidden = true;
        destacadas.hidden = true;
        if(option.value == 1){
            animadas.hidden = false;
        }
        if(option.value == 2){
            epoca.hidden = false;
        }
        if(option.value == 3){
            fantasia.hidden = false;
        }
        if(option.value == 4){
            terror.hidden = false;
        }
    }
});
document.getElementById("cerrarSesion").addEventListener('click',(event)=>{
    limpiarLocalStorage();
})