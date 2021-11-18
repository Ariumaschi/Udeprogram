//DETAIL GENERO DE PELICULAS//

//pasos para obtener la query string
//usar location para obtener la query string desde la url
let qs = location.search;

//transformar la qs en objeto literal

let ol = new URLSearchParams(qs);

//obtener dato de id del objeto literal
let id = ol.get('id_G_Movie');

//obtener dato de nombreGenero del objeto literal
let nombreGenero = ol.get('name_G_Movie');

//obtener dato de tipo sirve para series y movies//
let tipo = ol.get('tipo');

let title = document.querySelector('h1'); //capturo h1

//armar un nuevo fetch //
let url = `https://api.themoviedb.org/3/discover/movie?api_key=e88616470bd2ffe2b246bcbf04162b02&with_genres=${id}`;

fetch(url)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);



        //armo un for para recorrer los elemetnos del array y luego reemplazarlos por los articulos del HTML//

        let info = data.results
        let articulosMovies = ''

        for (let i = 0; i < info.length; i++) {
            articulosMovies +=
            `<article class="article-detailgeners">
             <h4>${info[i].original_title}</h4>
             <img src="https://image.tmdb.org/t/p/w500/${info[i].backdrop_path}" alt="Portada">
             </article>`
        }

        let capturo = document.querySelector('.div-detailgeners')
        capturo.innerHTML = articulosMovies;
    })

    .catch(function (error) {
        console.log("Error: " + error)
    })



//DETAIL GENERO DE SERIES//

//pasos para obtener la query string
//usar location para obtener la query string desde la url
let qs2 = location.search;

//transformar la qs en objeto literal

let ol2 = new URLSearchParams(qs2);

//obtener dato de id del objeto literal
let id2 = ol2.get('id_G_Series');

//obtener dato de nombreGenero del objeto literal
let nombreGenero2 = ol2.get('name_G_Series');

//armar un nuevo fetch //
let url2 = `https://api.themoviedb.org/3/discover/tv?api_key=e88616470bd2ffe2b246bcbf04162b02&with_genres=${id2}`;

fetch(url2)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);



        //armo un for para recorrer los elemetnos del array y luego reemplazarlos por los articulos del HTML//

        let informacion = data.results
        let articulosSeries = ''

        for (let i = 0; i < informacion.length; i++) {
            articulosSeries +=
                `<article class="article-detailgeners">
                <h4>${informacion[i].original_name} </h4>
                <img src="https://image.tmdb.org/t/p/w500/${informacion[i].backdrop_path}" alt="Portada">
            </article>`
        }

        let capturo2 = document.querySelector('.div-detailgeners2')
        capturo2.innerHTML = articulosSeries;
    })

    .catch(function (error) {
        console.log("Error: " + error)
    })


//CONDICIONAL PARA VER SOLO EL DETALLE DE GENERO DE SERIES O MOVIES//

if (tipo == "movies") {
    //HACER DESAPARECER LA SECCION DE MOVIES//
    let sectionSeries = document.querySelector('.section-detailgenersSeries')
    sectionSeries.style.display = "none";
    title.innerHTML = nombreGenero;

}

else if (tipo == "series") {
    let sectionMovies = document.querySelector('.section-detailgeners')
    sectionMovies.style.display = "none";
    title.innerHTML = nombreGenero2;
}




