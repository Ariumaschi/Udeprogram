// recuperar el storage en string, entonces hay que transformar en array con parse
let recuperoStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage);
console.log(favoritos);


// Capturar el contenedor de los elementos a mostrar
let section = document.querySelector('.mis-favoritos');
let tmdbFavoritos = ''

// Si el storage esta vacio indicamos al usuario que no hay favoritos seleccionados (hacemos if y else), porque sino aparece null
if (favoritos == null || favoritos.length == 0) { //el array no toma nulo a menos que NUNCA hayas agregado algo, o que borres el localstorage, trabajo con true y false, por eso evaluamos la segunda condición que es cuando habia favoritos y los sacas todos
    section.innerHTML = '<p> No hay favoritos seleccionados </p>'
}

else {
    for (let i = 0; i < favoritos.length; i++) // Hacer un for (bucle) para recorrer el array
        buscarYMostrarFavoritos(favoritos[i])
}


function buscarYMostrarFavoritos(id) { // no importa donde la crees, primero que lee JS es funciones y despues ejecuta el código

    // Adentro del for, buscar cada elemento del array (te lo da la API con un fetch)

    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=2482e5158beb4ba845e2e73747f644f3` // En cada posición del array, guardamos el id de cada personaje que se haya agregado a favoritos

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            tmdbFavoritos += ` <ul class="ul-favoritos">
            <li class="favscuadrado">
                <h3> Nombre: ${data.name}</h3>
                 <img class="imgfavs" src= ${data.image} alt='Imagen pelicula/serie' /> 
        </li>`

            // mostrarlo al usuario

            section.innerHTML = tmdbFavoritos; // dejar acá porque afuera no funciona

        })
        .catch(function (error) {
            console.log(error);

        })


}