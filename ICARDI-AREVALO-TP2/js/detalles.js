/*$('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
  */

  $("#selectorTemporada").change(function(){

    if(document.querySelector("#selectorCapitulo").hasChildNodes()){
      document.querySelector("#selectorCapitulo").removeChild();
    }
    switch (this.value){
    case "1" :
      for (i=0;i<=capitulos.length-1;i++) { 
        agregarCapitulos("1");
      }
    break;
    case "2" :
      for (i=0;i<=capitulos.length-1;i++) { 
        agregarCapitulos("2");
      }
    break;
    case "3" :
      for (i=0;i<=capitulos.length-1;i++) { 
        agregarCapitulos("3");
      }
    break;   
    }
  });

  function agregarCapitulos(temporada){
  if(capitulos[i].temporada == temporada){
    let capitulo = document.querySelector("#selectorCapitulo");
    const option = document.createElement("option");
    option.id = "capitulo"+ (i+1);
    option.value= i+1;
    option.text = "capitulo" + capitulos[i].capitulo;
    const a = document.createElement("a");
    a.href=capitulos[i].url;
    option.appendChild(a);
    capitulo.appendChild(option);
  }
}