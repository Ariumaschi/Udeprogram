let queryString= location.search //obtengo la query desde la url
let queryString2= new URLSearchParams(queryString) //transformo la query en un objeto literal
let id =queryString2.get('tv_id'); // obtengo el dato del id del objeto literal 
console.log(queryString);

let url = `https://api.themoviedb.org/3/tv/${id}?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b`

console.log (url)

fetch(url)
.then (function(response) {
    return response.json ();
})
.then (function(data) {
    console.log(data)
})


.catch (function(error) {
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
if (favoritos.includes(tv_id)) {
    fav.innerText = "Quitar de favoritos"
}

fav.addEventListener('click', function (evento) {
    evento.preventDefault();

    if (favoritos.includes(tv_id)) {
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

