//DETAIL GENERO DE PELICULAS//


//usar location.search para obtener y almacenar la query string
let qs = location.search;

//transformar la qs en objeto literal

let ol = new URLSearchParams(qs);

//obtener valor de id de la query string//
let id = ol.get('id_G_Movie');

//armar un fetch //
let url = `https://api.themoviedb.org/3/discover/movie?api_key=e88616470bd2ffe2b246bcbf04162b02&with_genres=${id}`;

fetch(url)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);

        let info = data.results

        //capturo el DOM//
        let capturo = document.querySelector('.div-detailgeners')

        //variable vacia para luego insertar los articulos//
        let articulosMovies = ''

        for (let i = 0; i < info.length; i++) {
            if (info[i].poster_path == null) {
                articulosMovies +=
                    `<article class="article-detailgeners">
     <h4>${info[i].original_title}</h4>
     <a href="./detailmovie.html?movie_id=${info[i].id}"> <img src="./img/noImage.png" alt="Portada">
     </a></article>`
            } else {
                articulosMovies +=
                    `<article class="article-detailgeners">
             <h4>${info[i].original_title}</h4>
             <a href="./detailmovie.html?movie_id=${info[i].id}"> <img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="Portada">
             </a></article>`
            }
        }

        //modifico el DOM//
        capturo.innerHTML = articulosMovies;
    })

    .catch(function (error) {
        console.log("Error: " + error)
    })



//DETAIL GENERO DE SERIES//

//usar location.search para obtener y almacenar la query string
let qs2 = location.search;

//transformar la qs en objeto literal

let ol2 = new URLSearchParams(qs2);

//obtener valor de id de la query string//
let id2 = ol2.get('id_G_Series');


//armar un fetch //
let url2 = `https://api.themoviedb.org/3/discover/tv?api_key=e88616470bd2ffe2b246bcbf04162b02&with_genres=${id2}`;

fetch(url2)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);


        let informacion = data.results
        let articulosSeries = ''

        for (let i = 0; i < informacion.length; i++) {
            if (informacion[i].poster_path == null) {
                articulosSeries +=
                    `<article class="article-detailgeners">
                <h4>${informacion[i].original_name} </h4>
                <a href="./detail-serie.html?tv_id=${informacion[i].id}"> <img src="./img/noImage.png" alt="Portada">
      </article>`
            } else {
                articulosSeries +=
                    `<article class="article-detailgeners">
                <h4>${informacion[i].original_name} </h4>
                <a href="./detail-serie.html?tv_id=${informacion[i].id}"> <img src="https://image.tmdb.org/t/p/w500/${informacion[i].poster_path}" alt="Portada">
      </article>`
            }
        }
        let capturo2 = document.querySelector('.div-detailgeners2')
        capturo2.innerHTML = articulosSeries;
    })

    .catch(function (error) {
        console.log("Error: " + error)
    })


//CONDICIONAL//

//obtener valor del nombre del genero de la query string para peliculas y series
let nombreGenero = ol.get('name_G_Movie');
let nombreGenero2 = ol2.get('name_G_Series');

//obtener valor "tipo" de la query string//
let tipo = ol.get('tipo');

let title = document.querySelector('h1'); //capturo h1

if (tipo == "movies") {
    //HACER DESAPARECER LA SECCION DE SERIES//
    let sectionSeries = document.querySelector('.section-detailgenersSeries')
    sectionSeries.style.display = "none";
    title.innerHTML = nombreGenero;

}

else if (tipo == "series") {
    //HACER DESAPARECER LA SECCION DE SERIES//
    let sectionMovies = document.querySelector('.section-detailgeners')
    sectionMovies.style.display = "none";
    title.innerHTML = nombreGenero2;
}




