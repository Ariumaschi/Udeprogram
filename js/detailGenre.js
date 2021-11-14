//pasos para obtener la query string
//usar location para obtener la query string desde la url
let qs = location.search;

//transformar la qs en objeto literal

let ol = new URLSearchParams(qs);

//obtener dato de id del objeto literal
let id = ol.get ('id_G_Movie');

console.log (id);


//obtener dato de nombreGenero del objeto literal
let nombreGenero = ol.get ('name_G_Movie');
console.log (nombreGenero);


//armar un nuevo fetch //
//el id es la parte variable del url//
let url = `https://api.themoviedb.org/3/discover/movie?api_key=e88616470bd2ffe2b246bcbf04162b02&with_genres=${id}`; 

console.log (url)

fetch(url)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);      
       
        //Capturo el DOM y cambio el h1 por el titulo de genero que le corresponde segun el ID//
        let title = document.querySelector('h1');
        title.innerHTML= nombreGenero

        //armo un for para recorrer los elemetnos del array y luego reemplazarlos por los articulos del HTML//

        let info = data.results
        let articulosMovies =''

        for (let i = 0; i < info.length; i++) {
            articulosMovies +=
                `<article class="article-detailgeners">
                <h4>${info[i].original_title} </h4>
                <img src="https://image.tmdb.org/t/p/w500/${info[i].backdrop_path}" alt="Portada">
            </article>` 
    }
                

            let capturo = document.querySelector ('.div-detailgeners')
            capturo.innerHTML = articulosMovies;
    


   
})

    .catch(function (error) {
        console.log("Error: " + error)
    })






