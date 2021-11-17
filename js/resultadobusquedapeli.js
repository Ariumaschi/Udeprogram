
//buscador series
let queryStringg = location.search // capturando la query que se envio cuando el usuario busco una palabra
console.log(queryStringg)
let queryString3 = new URLSearchParams(queryStringg);  // pasala a un objeto literal
let query1 = queryString3.get('buscador'); // capturando el input que puso el usuario (LA PROPIEDAD BUSCADOR DE LA QUERY)
console.log(queryStringg);
console.log(query1)
// queremos a partir de la palabra que capturamos traer todo lo que tiene la api en relacion a eso

let url1= `https://api.themoviedb.org/3/search/tv?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b&query=${query1}`;
fetch(url1)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let info = data.results
        let articulosBuscados = ''

        for (let i = 0; i < info.length; i++) {
            articulosBuscados +=
                `
        <h1>Resultados de búsqueda: ${query}</h1>
        <section class="padre-de-peli-resultados">

                <article class="articulo-peli-resultados">
        <a href="detailmovie.html"> 
        <img class="imgpeli-resultados" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="Portada">
    </a>

    <div class="padre-info-resultados">
        <a href="detailmovie.html">
            <h2 class="Titulo-de-peli-resultados">${info[i].title}</h2>
        </a>

        <h3 class="Fecha-estreno-resultados">${info[i].release_date}</h3>

        <p class="sinopsis-resultados">${info[i].overview}</p>
    </div>`
        }


        let capturo = document.querySelector('.main-resultados')
        capturo.innerHTML = articulosBuscados;


    })


    .catch(function (error) {
        console.log("Error: " + error)
    })
