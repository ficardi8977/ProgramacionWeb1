let esPaginaSerie = document.URL.includes('series');
let esPaginaPelicula = document.URL.includes('peliculas');
let esPaginaHome = document.URL.includes('home');

document.getElementById("selectorHome").addEventListener('change',(event) => {
    let busqueda = document.getElementById("seccionBusqueda");
    $("#idBusqueda").val("");
    if(busqueda != null){
        busqueda.remove();
    }
    let epoca = document.getElementById("seccionEpoca");
    let terror = document.getElementById("seccionTerror");
    let fantasia = document.getElementById("seccionFantasia");
    let animadas = document.getElementById("seccionAnimadas");
    let destacadas = document.getElementById("seccionDestacadas");
    let argentinas = document.getElementById("seccionArgentinas");
    let accion = document.getElementById("seccionAccion");
    let crimen = document.getElementById("seccionCrimen");
    let suspenso = document.getElementById("seccionSuspenso");

    var select = document.getElementById('selectorHome');
    var option = select.options[select.selectedIndex];
    if(option.value == 0){
        if(esPaginaPelicula || esPaginaHome){
            terror.hidden = false;
            animadas.hidden = false;
            accion.hidden = false;
            suspenso.hidden = false;
        }
        if(esPaginaSerie || esPaginaHome){
            epoca.hidden = false;
            fantasia.hidden = false;
            argentinas.hidden = false;
            crimen.hidden = false;
        }
        
        destacadas.hidden = false;
        destacadas.style.display = "flex";

    }else{
        if(esPaginaPelicula || esPaginaHome){
            terror.hidden = true;
            animadas.hidden = true;
            accion.hidden = true;
            suspenso.hidden = true;
        }
        if(esPaginaSerie || esPaginaHome){
            epoca.hidden = true;
            fantasia.hidden = true;
            argentinas.hidden = true;
            crimen.hidden = true;
        }
        destacadas.hidden = true;
        destacadas.style.display = "none";

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
        if(option.value == 5){
            suspenso.hidden = false;
        }
        if(option.value == 6){
            argentinas.hidden = false;
        }
        if(option.value == 7){
            accion.hidden = false;
        }
        if(option.value == 8){
            crimen.hidden = false;
        }
    }
});
document.getElementById("cerrarSesion").addEventListener('click',(event)=>{
    limpiarLocalStorage();
})
$('#btnBuscar').click(function(){
    $("#selectorHome").val('0');
    if(esPaginaHome || esPaginaPelicula){
        $('#checkPelicula').prop("checked",true);
        document.getElementById("seccionTerror").hidden = true;
        document.getElementById("seccionAnimadas").hidden = true;
        document.getElementById("seccionAccion").hidden = true;
        document.getElementById("seccionSuspenso").hidden = true;
    }
    if(esPaginaHome || esPaginaSerie){
        $('#checkSerie').prop("checked",true);
        document.getElementById("seccionEpoca").hidden = true;
        document.getElementById("seccionFantasia").hidden = true;
        document.getElementById("seccionArgentinas").hidden = true;
        document.getElementById("seccionCrimen").hidden = true;
    }


    let destacadas = document.getElementById("seccionDestacadas");
    destacadas.hidden = true;
    destacadas.style.display = "none";


    let valorBusqueda = $('#idBusqueda').val().toLocaleLowerCase();
    var lista = document.getElementById ("catalogo");

    let seccionBusqueda = document.getElementById("seccionBusqueda");
    if(seccionBusqueda != null ){
        lista.removeChild(seccionBusqueda);
    }
    const article = document.createElement("article");
    article.classList.add("contenedor-pelicula");
    
        for (i=0;i<=catalogo.length-1;i++) { 
            if(catalogo[i].nombre.includes(valorBusqueda)){

                if(
                    ((esPaginaSerie || esPaginaHome) && catalogo[i].tipo == "serie") ||
                    ((esPaginaPelicula || esPaginaHome) && catalogo[i].tipo == "pelicula")
                )
                {
                    const a = document.createElement("a");
                    a.classList.add("item-pelicula");
                    a.id = catalogo[i].nombre;
                    if(catalogo[i].tipo == "serie"){
                        a.href="detalleSerie.html"
                    }else{
                        a.href="detallePelicula.html"
                    }
                    const img = document.createElement("img");
                    img.src = catalogo[i].imagen;
                    a.appendChild(img);  
                    article.appendChild(a);
                }            
            } 
        }

    const h2 = document.createElement("h2");
    h2.textContent = 'Encontradas al buscar "'+ valorBusqueda +'":';

    const seccion = document.createElement("seccion");
    seccion.id = "seccionBusqueda";
    seccion.classList.add("seccion-peliculas");
    seccion.appendChild(h2);
    seccion.appendChild(article);


    lista.appendChild(seccion);
});

$('input[ name="check"]').change(function(){
    
    let busqueda = document.getElementById("seccionBusqueda");
    if(busqueda != null){
        busqueda.remove();
    }
    $("#selectorHome").val('0');
    let epoca = document.getElementById("seccionEpoca");
    let terror = document.getElementById("seccionTerror");
    let fantasia = document.getElementById("seccionFantasia");
    let animadas = document.getElementById("seccionAnimadas");
    let destacadas = document.getElementById("seccionDestacadas");

    let argentinas = document.getElementById("seccionArgentinas");
    let accion = document.getElementById("seccionAccion");
    let crimen = document.getElementById("seccionCrimen");
    let suspenso = document.getElementById("seccionSuspenso");

    if(this.value == "pelicula")
    {
        destacadas.hidden = true;
        destacadas.style.display = "none";

        if(this.checked){
            terror.hidden = false;
            animadas.hidden = false;
            suspenso.hidden = false;
            accion.hidden = false;
            $('option[name="selectorPelicula"]').prop("hidden",false)

        }else{
            terror.hidden = true;
            animadas.hidden = true;
            suspenso.hidden = true;
            accion.hidden = true;
            $('option[name="selectorPelicula"]').prop("hidden",true)
        }
    }

    if(this.value == "serie"){
        destacadas.hidden = true;
        destacadas.style.display = "none";
        if(this.checked){
            epoca.hidden = false;
            fantasia.hidden = false;
            argentinas.hidden = false;
            crimen.hidden = false;
            $('option[name="selectorSerie"]').prop("hidden",false)
        }else{
            epoca.hidden = true;
            fantasia.hidden = true;
            argentinas.hidden = true;
            crimen.hidden = true;
            $('option[name="selectorSerie"]').prop("hidden",true)
        }
    }
});
$('#btnLimpiar').click(function(){

    $("#selectorHome").val('0');
    $("#idBusqueda").val("");
    document.getElementById("seccionDestacadas").hidden = false;
    document.getElementById("seccionDestacadas").style.display = "flex";
    
    if(esPaginaPelicula || esPaginaHome){
        document.getElementById("seccionTerror").hidden = false;
        document.getElementById("seccionAnimadas").hidden = false;
        document.getElementById("seccionAccion").hidden = false;
        document.getElementById("seccionSuspenso").hidden = false;
        $('#checkPelicula').prop("checked",true);
        $('option[name="selectorPelicula"]').prop("hidden",false);
    }
    if(esPaginaSerie || esPaginaHome){
        document.getElementById("seccionEpoca").hidden = false;
        document.getElementById("seccionFantasia").hidden = false;
        document.getElementById("seccionArgentinas").hidden = false;
        document.getElementById("seccionCrimen").hidden = false;
        $('#checkSerie').prop("checked",true);
        $('option[name="selectorSerie"]').prop("hidden",false);
    }
    


    









});