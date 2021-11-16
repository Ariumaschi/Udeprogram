let queryString = location.search //obtengo la query desde la url
console.log(queryString)
let queryString2 = new URLSearchParams(queryString) //transformo la query en un objeto literal
let id = queryString2.get('movie_id'); // obtengo el dato del id del objeto literal
console.log(queryString);
console.log(id)

let url=`https://api.themoviedb.org/3/movie/${id}?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b`

console.log(url)


fetch(url)
.then (function(response){
    return response.json();
})
.then (function(data){  
    console.log(data);
let imagen = document.querySelector (".imagen");
let titulo = document.querySelector (".titulo");
let rating = document.querySelector (".rating");
let fecha = document.querySelector (".fecha");
let duracion = document.querySelector (".duracion");

let sinopsis = document.querySelector (".sinopsis");

imagen.src =`https://image.tmdb.org/t/p/w342${data.poster_path}`;
titulo.innerText+= data.title;
rating.innerText+=data.vote_average;
fecha.innerText+=data.release_date;
duracion.innerText+=data.runtime;
sinopsis.innerText+= data.overview;
let generos= ""
let info= data
let capturo = document.querySelector (".generos")
for (let i=0; i<info.genres.length; i++) {
    generos +=
    `<p><a href="./detail-genres.html"?id=${info.genres[i].id}>${info.genres[i].name}</a></p>` 
}
capturo.innerHTML += generos;



})
.catch (function(error) {
console.log (error);
})

   
        

        

    

// Crear array

let favoritos = [];

// Recuperar storage

let recuperoStorage = localStorage.getItem('favoritosPelis'); // te va a devolver null o los datos

if (recuperoStorage != null || favoritos.length == 0)  {
    //1ero tenemos que transformarlo de cadena de texto con JSON.parse y despues lo guardamos en favoritos 
    favoritos = JSON.parse(recuperoStorage);
}

// Hacer click en el link. Primero deberemos capturar el elemento
let fav = document.querySelector('#button');

// Chequear que id este en el array de favoritos 
if (favoritos.includes(id)) {
    fav.innerText = "Quitar de favoritos"
}

fav.addEventListener('click', function (evento) {
    evento.preventDefault();

    if (favoritos.includes(id)) {
        // Si el id esta en el array
        let indice = favoritos.indexOf(id);

        //Borrar a partir del indice 1 elemento 
        favoritos.splice(indice, 1)
        fav.innerText = "Agregar a favoritos"
    }

    else { // Guardar dato en un array: agregar un dato al array 
        favoritos.push(id); // en general es el id de peliculas, canciones, etc
        fav.innerText = "Quitar de favoritos";
    }

    // Guardar el array en el storage (esto se hace pase lo que pase, no se mete en el else)
    let favsToString = JSON.stringify(favoritos); // Transformamos el array en una cadena de texto

    localStorage.setItem("favoritosPelis", favsToString);

    console.log(localStorage);

})