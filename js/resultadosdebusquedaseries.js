//buscador series
let queryString = location.search // capturando la query que se formó cuando el usuario hizo una busqueda
let queryString2 = new URLSearchParams(queryString);  // La paso a un objeto literal
let query = queryString2.get('buscador'); // capturando el valor de la clave buscador

// queremos a partir de la palabra que capturamos traer todo lo que tiene la api en relacion a eso

let url = `https://api.themoviedb.org/3/search/movie?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b&query=${query}`;
fetch(url)
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
            <h2 class="Titulo-de-peli-resultados">${info[i].name}</h2>
        </a>

        <h3 class="Fecha-estreno-resultados">${info[i].first_air_date}</h3>

        <p class="sinopsis-resultados">${info[i].overview}</p>
    </div>`
        }


        let capturo = document.querySelector('.main-resultados')
        capturo.innerHTML = articulosBuscados;


    })


    .catch(function (error) {
        console.log("Error: " + error)
    })

    