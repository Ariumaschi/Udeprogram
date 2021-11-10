//pasos para obtener la query string
//usar location para obtener la query string desde la url
let qs = location.search;

//transformar la qs en objeto literal

let ol = new URLSearchParams (qs);

//obtener dato de id del objeto literal
let id = ol.get ('id_G_Movie');

//armar un nuevo fetch //
//el id es la parte variable del url//
let url = ` https://api.themoviedb.org/3/tv/${id}?api_key=e88616470bd2ffe2b246bcbf04162b02`;

console.log(url)

fetch(url)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);

//ahora no tengo un array porque voy a tener un elemento, tengo datos sueltos, un objeto literal//
//paso 1: capturar DOM//

let titulo = document.querySelector("h1")

//paso 2 y 3: actualizar datos y actualizar DOM//

titulo.innerHTML = data.genres


                
        

})

    



    .catch(function (error) {
        console.log("Error: " + error)
    })



