//Resultado de busqueda de series

let queryStringSeries = location.search // capturando la query que construyó el usuario cuando buscó una palabra
let OLSeries = new URLSearchParams(queryStringSeries);  // a un objeto literal
let querySeries = OLSeries.get('buscador'); // capturando el valor de la clave "buscador"
let tipo2 = OLSeries.get('media');
// queremos a partir de la palabra que capturamos traer todo lo que tiene la api en relacion a eso//
if (tipo2 == "all" || tipo2 == "series") {


    let url2 = `https://api.themoviedb.org/3/search/tv?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b&query=${querySeries}`;
    fetch(url2)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            let info = data.results
            let articulosBuscados2 = ''
            if (info.length == 0) {
                let vacio = document.querySelector('.vacio')
                vacio.innerText = `No hay coincidencias con ${querySeries}`
            } else {

                for (let i = 0; i < info.length; i++) {
                    if (info[i].poster_path == null) {
                        articulosBuscados2 +=
                            ` <article class="articulo-peli-resultados">
                   <a href="./detail-serie.html?tv_id=${info[i].id}"> 
                   <img class="imgpeli-resultados" src="./img/noImage.png" alt="Portada">
                   </a>
                   <div class="padre-info-resultados">
                   <a href="detail-serie.html">
                   <h2 class="Titulo-de-peli-resultados">${info[i].name}</h2>
                   </a>
                   <h3 class="Fecha-estreno-resultados">${info[i].first_air_date}</h3>
                   <p class="sinopsis-resultados">${info[i].overview}</p>
                   </div>
                   </article>`
                    } else {
                        articulosBuscados2 +=
                            ` <article class="articulo-peli-resultados">
                   <a href="./detail-serie.html?tv_id=${info[i].id}"> 
                   <img class="imgpeli-resultados" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="Portada">
                   </a>
                   <div class="padre-info-resultados">
                   <a href="detail-serie.html">
                   <h2 class="Titulo-de-peli-resultados">${info[i].name}</h2>
                   </a>
                   <h3 class="Fecha-estreno-resultados"> Fecha de estreno: ${info[i].first_air_date}</h3>
                   <p class="sinopsis-resultados">${info[i].overview}</p>
                   </div>
                   </article>`
                    }
                }
            }


            let capturo3 = document.querySelector('.padre-de-series-resultados')
            capturo3.innerHTML = articulosBuscados2;

            //modifico el h1 segun la palabra que busco el usuario//
            let capturo4 = document.querySelector('h1')
            capturo4.innerText = `Resultados de búsqueda: ${querySeries}`;

        })


        .catch(function (error) {
            console.log("Error: " + error)
        })
}

window.addEventListener('load', function (e) {
    let gif = document.querySelector(".gif")
    gif.style.display = "none";

})

