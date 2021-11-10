let queryString = location.search //obtengo la query desde la url
let queryString2 = new URLSearchParams(queryString) //transformo la query en un objeto literal
let id = queryString2.get('movie_id'); // obtengo el dato del id del objeto literal
console.log(queryString);

let url = `https://api.themoviedb.org/3/movie/${id}?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b`

console.log(url)

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        let info = data.results
        let detallepeli = ""
        let capturo = document.querySelector(".section-detailmovie")
        console.log(capturo)
        for (let i = 0; i < 4; i++) {
            detallepeli += ` 
            <section class="section-detailmovie">
            <img class="imagen" src="https://image.tmdb.org/t/p/w342/${info[i].poster_path}">

            <article class="article-detailmovie">
                <h2>${info[i].title}</h2>

                <p class="p1"> <span>Rating:</span> ${info[i].vote_average}</p>
                <p class="p1"><span>Fecha de estreno:</span> ${info[i].release_date} </p>
                <p class="p1"> <span>Duración:</span> </p>
                <p class="p1"><span>Géneros: </span><a href="./detail-genres.html">${info[i].genres}</a></p>
                <p class="p4"><span>Sinopsis:</span> ${info[i].overview}</p>`

        }

        capturo.innerHTML = detallepeli;
    })


    .catch(function (error) {
        console.log("Error: " + error)
    })

// Crear array

let favoritos = [];

// Recuperar storage

let recuperoStorage = localStorage.getItem('favoritos'); // te va a devolver null o los datos

if (recuperoStorage != null) {
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

    localStorage.setItem("favoritos", favsToString);

    console.log(localStorage);

})