  $('#sliderHome').nivoSlider();
  

  $("#selectorTemporada").change(function(){

    debugger;
    $("#selectorCapitulo").empty();
    switch (this.value){
    case "1" :
      for (i=0;i<=capitulos.length-1;i++) { 
        agregarCapitulos("1", i);
      }
    break;
    case "2" :
      for (i=0;i<=capitulos.length-1;i++) { 
        agregarCapitulos("2", i);
      }
    break;
    case "3" :
      for (i=0;i<=capitulos.length-1;i++) { 
        agregarCapitulos("3", i);
      }
    break;   
    }
  });

  $("#btnComenzarSerie").click(function(){
      let temporada = $("#selectorTemporada").val();
      let capitulo = $("#selectorCapitulo").val();
      capitulos.forEach(element => {
        if(temporada == element.temporada && capitulo == element.capitulo){
          window.open(element.url);
        }
      });

  });

  $("#btnComenzarPelicula").click(function(){
      window.open("https://www.youtube.com/watch?v=0UX83pc6tCw");
  });

  function agregarCapitulos(temporada, i){
  if(capitulos[i].temporada == temporada){
    let capitulo = document.querySelector("#selectorCapitulo");
    const option = document.createElement("option");
    option.id = capitulos[i].capitulo;
    option.value= capitulos[i].capitulo;
    option.text = "Capitulo " + capitulos[i].capitulo;
    const a = document.createElement("a");
    a.href=capitulos[i].url;
    option.appendChild(a);
    capitulo.appendChild(option);
  }
}