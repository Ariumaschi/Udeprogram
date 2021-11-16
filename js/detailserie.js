let queryString = location.search //obtengo la query desde la url
console.log(queryString)
let queryString2 = new URLSearchParams(queryString) //transformo la query en un objeto literal
let id = queryString2.get('tv_id');// obtengo el dato del id del objeto literal


let url=`https://api.themoviedb.org/3/tv/${id}?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b`;

console.log(url)

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
       
        let imagen = document.querySelector (".imagen");
let titulo = document.querySelector (".titulo");
let rating = document.querySelector (".rating");
let fecha = document.querySelector (".fecha");
let capturo2 = document.querySelector (".duracion")

let sinopsis = document.querySelector (".sinopsis");

imagen.src =`https://image.tmdb.org/t/p/w342${data.poster_path}`;
titulo.innerText+= data.name;
rating.innerText+=data.vote_average;
fecha.innerText+=data.first_air_date;
capturo2.innerText+=data.episode_run_time;

sinopsis.innerText+=data.overview;
let generos= ""
let info= data
let capturo = document.querySelector (".generos")
for (let i=0; i<info.genres.length; i++) {
    console.log(info.genres[i].name);
   generos +=
  `<a href="./detail-genres.html?id=${info.genres[i].id}">${info.genres[i].name}</a>`
 // generos = `
     //   Género:
      //    <a title="ver más películas del género ${info[i].genres.name}" 
       //     href="detalleGenero.html?id=${info[i].genres.id}&tipo=tv">${info[i].genres.name}</a>
        //`;
    }
capturo.innerHTML += generos

//eneros.innerText+=data.genres;
    })
// Crear array

let favoritos = [];

// Recuperar storage

let recuperoStorage = localStorage.getItem('favoritosSeries'); // te va a devolver null o los datos

if (recuperoStorage != null || favoritos.length == 0) {
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

    localStorage.setItem("favoritosSeries", favsToString);

    console.log(localStorage);

})

