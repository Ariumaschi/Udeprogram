// recuperar el storage en string, entonces hay que transformar en array con parse
let recuperoStorage = localStorage.getItem('favoritospelis');
let recuperoStorage2 = localStorage.getItem('favoritosseries');
let favoritos = JSON.parse(recuperoStorage);
let favoritos2 = JSON.parse(recuperoStorage2);



console.log(favoritos);


// Capturar el contenedor de los elementos a mostrar
let section = document.querySelector('.mis-favoritos'); // buscar la otra seccion tmb 
let tmdbFavoritos = ''

// Si el storage esta vacio indicamos al usuario que no hay favoritos seleccionados (hacemos if y else), porque sino aparece null
if (favoritos == null || favoritos.length == 0) { //el array no toma nulo a menos que NUNCA hayas agregado algo, o que borres el localstorage, trabajo con true y false, por eso evaluamos la segunda condición que es cuando habia favoritos y los sacas todos
    section.innerHTML = '<p> No hay favoritos seleccionados </p>'
}

else {
    for (let i = 0; i < favoritos.length; i++) // Hacer un for (bucle) para recorrer el array
        buscarYMostrarFavoritos(favoritos[i])
}


if (favoritos2 == null || favoritos2.length == 0) { //el array no toma nulo a menos que NUNCA hayas agregado algo, o que borres el localstorage, trabajo con true y false, por eso evaluamos la segunda condición que es cuando habia favoritos y los sacas todos
    section.innerHTML = '<p> No hay favoritos seleccionados </p>'
}

else {
    for (let i = 0; i < favoritos2.length; i++) // Hacer un for (bucle) para recorrer el array
        buscarYMostrarFavoritos(favoritos2[i])
}


function buscarYMostrarFavoritos(id) { // no importa donde la crees, primero que lee JS es funciones y despues ejecuta el código

    // Adentro del for, buscar cada elemento del array (te lo da la API con un fetch)

    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b` // En cada posición del array, guardamos el id de cada personaje que se haya agregado a favoritos
    let url2 = `https://api.themoviedb.org/3/tv/${id}?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b`


    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            tmdbFavoritos += `<ul class="ul-favoritos">
            <li class="favscuadrado">
                <h3> ${data.title}</h3>
                <img class="imgfavs" src=https://image.tmdb.org/t/p/w342${data.poster_path} alt='Imagen pelicula/serie' /> 
                </li>`


            // mostrarlo al usuario

            section.innerHTML = tmdbFavoritos; // dejar acá porque afuera no funciona

        })
        .catch(function (error) {
            console.log(error);

        })

    fetch(url2)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            tmdbFavoritos += ` <ul class="ul-favoritos">
            <li class="favscuadrado">
                  <h3> ${data.name}</h3>
                 <img class="imgfavs" src=https://image.tmdb.org/t/p/w342${data.poster_path} alt='Imagen pelicula/serie' /> 
         </li>`

            // mostrarlo al usuario

            section.innerHTML = tmdbFavoritos; // dejar acá porque afuera no funciona

        })
        .catch(function (error) {
            console.log(error);

        })


}