var catalogo = [
        // PELICULAS //
    { nombre: "ouija", categoria: "terror", tipo: "pelicula", imagen: "img/peliculas/terror/terror1.jpg" },
    { nombre: "virus 32", categoria: "terror", tipo: "pelicula", imagen: "img/peliculas/terror/terror2.jpg" },
    { nombre: "al tercer dia", categoria: "terror", tipo: "pelicula", imagen: "img/peliculas/terror/terror3.jpg" },
    { nombre: "paranormal activity", categoria: "terror", tipo: "pelicula", imagen: "img/peliculas/terror/terror4.jpg" },
    { nombre: "the deep house", categoria: "terror", tipo: "pelicula", imagen: "img/peliculas/terror/terror5.jpg" },
    { nombre: "no me mates", categoria: "terror", tipo: "pelicula", imagen: "img/peliculas/terror/terror6.jpg" },

    { nombre: "uncharted",   categoria: "accion", tipo: "pelicula", imagen: "img/peliculas/accion/accion01.jpg" },
    { nombre: "una cita con el pasado", categoria: "accion", tipo: "pelicula", imagen: "img/peliculas/accion/accion02.jpg" },
    { nombre: "jackass", categoria: "accion", tipo: "pelicula", imagen: "img/peliculas/accion/accion03.jpg" },
    { nombre: "juego de ladrones", categoria: "accion", tipo: "pelicula", imagen: "img/peliculas/accion/accion04.jpg" },
    { nombre: "luz negra", categoria: "accion", tipo: "pelicula", imagen: "img/peliculas/accion/accion05.jpg" },
    { nombre: "matrix", categoria: "accion", tipo: "pelicula", imagen: "img/peliculas/accion/accion06.jpg" },

    { nombre: "black crab",   categoria: "suspenso", tipo: "pelicula", imagen: "img/peliculas/suspenso/suspenso1.jpg" },
    { nombre: "una cita con el pasado", categoria: "suspenso", tipo: "pelicula", imagen: "img/peliculas/suspenso/suspenso2.jpg" },
    { nombre: "secretos del pasado", categoria: "suspenso", tipo: "pelicula", imagen: "img/peliculas/suspenso/suspenso3.jpg" },
    { nombre: "el otro cordero", categoria: "suspenso", tipo: "pelicula", imagen: "img/peliculas/suspenso/suspenso4.jpg" },
    { nombre: "madre/androide", categoria: "suspenso", tipo: "pelicula", imagen: "img/peliculas/suspenso/suspenso5.jpg" },
    { nombre: "batman", categoria: "suspenso", tipo: "pelicula", imagen: "img/peliculas/suspenso/suspenso6.jpg" },
    
    { nombre: "los increibles",   categoria: "animada", tipo: "pelicula", imagen: "img/peliculas/animadas/animada1.jpg" },
    { nombre: "star wars the clone wars", categoria: "animada", tipo: "pelicula", imagen: "img/peliculas/animadas/animada2.jpg" },
    { nombre: "kung fu panda", categoria: "animada", tipo: "pelicula", imagen: "img/peliculas/animadas/animada3.jpg" },
    { nombre: "ice age 2", categoria: "animada", tipo: "pelicula", imagen: "img/peliculas/animadas/animada4.jpg" },
    { nombre: "dragon ball", categoria: "animada", tipo: "pelicula", imagen: "img/peliculas/animadas/animada5.jpg" },
    { nombre: "coco", categoria: "animada", tipo: "pelicula", imagen: "img/peliculas/animadas/animada6.jpg" },

    // SERIES //

    { nombre: "vikings", categoria: "epoca", tipo: "serie", imagen: "img/series/epoca/epoca1.jpg" },
    { nombre: "vikings valhalla", categoria: "epoca", tipo: "serie", imagen: "img/series/epoca/epoca2.jpg" },
    { nombre: "the last kingdom", categoria: "epoca", tipo: "serie", imagen: "img/series/epoca/epoca3.jpg" },
    { nombre: "peaky blinders", categoria: "epoca", tipo: "serie", imagen: "img/series/epoca/epoca4.jpg" },
    { nombre: "the bridgeston", categoria: "epoca", tipo: "serie", imagen: "img/series/epoca/epoca5.jpg" },
    { nombre: "taboo", categoria: "epoca", tipo: "serie", imagen: "img/series/epoca/epoca6.jpg" },
    
    { nombre: "el cartel de los sapos", categoria: "crimen", tipo: "serie", imagen: "img/series/crimen/crimen1.jpg" },
    { nombre: "la foret", categoria: "crimen", tipo: "serie", imagen: "img/series/crimen/crimen2.jpg" },
    { nombre: "chicago justice", categoria: "crimen", tipo: "serie", imagen: "img/series/crimen/crimen3.jpg" },
    { nombre: "dexter", categoria: "crimen", tipo: "serie", imagen: "img/series/crimen/crimen4.jpg" },
    { nombre: "sherlock", categoria: "crimen", tipo: "serie", imagen: "img/series/crimen/crimen5.jpg" },
    { nombre: "pablo escobar", categoria: "crimen", tipo: "serie", imagen: "img/series/crimen/crimen6.jpg" },
    

    { nombre: "star wars mandalorian", categoria: "fantasia", tipo: "serie", imagen: "img/series/fantasia/fantasia1.jpg" },
    { nombre: "batwoman", categoria: "fantasia", tipo: "serie", imagen: "img/series/fantasia/fantasia2.jpg" },
    { nombre: "falcon", categoria: "fantasia", tipo: "serie", imagen: "img/series/fantasia/fantasia3.jpg" },
    { nombre: "ragnarock", categoria: "fantasia", tipo: "serie", imagen: "img/series/fantasia/fantasia4.jpg" },
    { nombre: "invasion", categoria: "fantasia", tipo: "serie", imagen: "img/series/fantasia/fantasia5.jpg" },
    { nombre: "the walking dead", categoria: "fantasia", tipo: "serie", imagen: "img/series/fantasia/fantasia6.jpg" },

    { nombre: "maradona", categoria: "argentina", tipo: "serie", imagen: "img/series/argentinas/argentina1.jpg" },
    { nombre: "marginal", categoria: "argentina", tipo: "serie", imagen: "img/series/argentinas/argentina2.jpg" },
    { nombre: "los simuladores", categoria: "argentina", tipo: "serie", imagen: "img/series/argentinas/argentina3.jpg" },
    { nombre: "puerta 7", categoria: "argentina", tipo: "serie", imagen: "img/series/argentinas/argentina4.jpg" },
    { nombre: "monzon", categoria: "argentina", tipo: "serie", imagen: "img/series/argentinas/argentina5.jpg" },
    { nombre: "apache", categoria: "argentina", tipo: "serie", imagen: "img/series/argentinas/argentina6.jpg" },


];

var capitulos = [
    { temporada: "1", capitulo: "1", url: "https://www.youtube.com/watch?v=ReVKlBdPadY&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=1" },
    { temporada: "1", capitulo: "2", url: "https://www.youtube.com/watch?v=_K_Lh4vgx1U&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=2" },
    { temporada: "1", capitulo: "3", url: "https://www.youtube.com/watch?v=OtNgWdtHx88&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=3" },
    { temporada: "1", capitulo: "4", url: "https://www.youtube.com/watch?v=cjmAh_SdAwY&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=4" },
    { temporada: "1", capitulo: "5", url: "https://www.youtube.com/watch?v=p-07sX-IETs&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=5" },
    { temporada: "1", capitulo: "6", url: "https://www.youtube.com/watch?v=6qu5fWVdvPo&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=6" },
    { temporada: "1", capitulo: "7", url: "https://www.youtube.com/watch?v=mQuZIXAYV1Y&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=7" },
    { temporada: "1", capitulo: "8", url: "https://www.youtube.com/watch?v=cB0p1kdhboI&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=8" },
    { temporada: "1", capitulo: "9", url: "https://www.youtube.com/watch?v=QU1c4K92c24&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=9" },
    { temporada: "1", capitulo: "10", url: "https://www.youtube.com/watch?v=Q9-0o7zDpx8&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=10" },
    { temporada: "1", capitulo: "11", url: "https://www.youtube.com/watch?v=3TUByFXTedo&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=11" },
    { temporada: "1", capitulo: "12", url: "https://www.youtube.com/watch?v=9567o29UnYU&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=12" },
    { temporada: "1", capitulo: "13", url: "https://www.youtube.com/watch?v=EbOXGzg3hF8&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=13" },
    { temporada: "1", capitulo: "14", url: "https://www.youtube.com/watch?v=lfilTq1abro&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=14" },

    { temporada: "2", capitulo: "1", url: "https://www.youtube.com/watch?v=J7Z1wzSka2k&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=15" },
    { temporada: "2", capitulo: "2", url: "https://www.youtube.com/watch?v=hIYWyzvKRsE&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=16" },
    { temporada: "2", capitulo: "3", url: "https://www.youtube.com/watch?v=TjHxaSATNKs&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=17" },
    { temporada: "2", capitulo: "4", url: "https://www.youtube.com/watch?v=-S-Vsw7kOAQ&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=18" },
    { temporada: "2", capitulo: "5", url: "https://www.youtube.com/watch?v=-uihe0-pAuE&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=19" },
    { temporada: "2", capitulo: "6", url: "https://www.youtube.com/watch?v=8S3XhxWMydU&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=20" },
    { temporada: "2", capitulo: "7", url: "https://www.youtube.com/watch?v=V8m9jpAeJUM&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=21" },
    { temporada: "2", capitulo: "8", url: "https://www.youtube.com/watch?v=ra4emE9w3Zs&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=22" },
    { temporada: "2", capitulo: "9", url: "https://www.youtube.com/watch?v=-xc5uWLAoj8&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=23" },
    { temporada: "2", capitulo: "10", url: "https://www.youtube.com/watch?v=jtuM0woqlME&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=24" },

    { temporada: "3", capitulo: "1", url: "https://www.youtube.com/watch?v=ygP0Cae1Wvc&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=25" },
    { temporada: "3", capitulo: "2", url: "https://www.youtube.com/watch?v=uLvqe4Aweoc&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=26" },
    { temporada: "3", capitulo: "3", url: "https://www.youtube.com/watch?v=4xhweCgVthg&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=27" },
    { temporada: "3", capitulo: "4", url: "https://www.youtube.com/watch?v=yvfYux1VEus&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=28" },
    { temporada: "3", capitulo: "5", url: "https://www.youtube.com/watch?v=jv2qHpa4gCE&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=29" },
    { temporada: "3", capitulo: "6", url: "https://www.youtube.com/watch?v=XOQtYwaa8N8&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=30" },
    { temporada: "3", capitulo: "7", url: "https://www.youtube.com/watch?v=qEoBVkFyVEw&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=31" },
    { temporada: "3", capitulo: "8", url: "https://www.youtube.com/watch?v=pjpRXkZeorY&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=32" },
    { temporada: "3", capitulo: "9", url: "https://www.youtube.com/watch?v=KDDcnBcs6ec&list=PLbuBpL-4Qc5rSpwbnbm5kgQAj6JJp_CQm&index=33" },
]