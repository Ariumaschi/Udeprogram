// peliculas populares
let url = `https://api.themoviedb.org/3/movie/popular?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b`;

console.log(url)

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let info = data.results;
        console.log(data.results);
        let peliculas = ""
        let capturo = document.querySelector(".padre-peliculas-populares-home")
        console.log(capturo)
        for (let i = 0; i < 4; i++) {
            peliculas += `    
                    <article class="peli-home">
                    <a href="detailmovie.html?movie_id=${info[i].id}">
                         <img class="imgpeli-home" src="https://image.tmdb.org/t/p/w342${info[i].poster_path}"  alt="">
                         </a>
                        <h3 class="h3-home"> ${info[i].title}</h3>
                        <p class="fecha-estreno-home"> Fecha de estreno: ${info[i].release_date}<p>
                    </article>`

        }

        capturo.innerHTML = peliculas;

    })


    .catch(function (error) {
        console.log("Error: " + error)
    })
//series populares

let url2 = `https://api.themoviedb.org/3/tv/popular?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b `;

console.log(url2)

fetch(url2)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let info = data.results;
        console.log(data.results);
        let series = ""
        let capturo = document.querySelector(".padre-series-populares-home")


        for (let i = 0; i < 4; i++) {
            series += `    
                        <article class="serie-popular-home">
                        <a href="detail-serie.html?tv_id=${info[i].id}">
                             <img class="imgserie-home" src="https://image.tmdb.org/t/p/w342${info[i].poster_path}"  alt="">
                             </a>
                            <h3 class="h3-home"> ${info[i].name}</h3>
                            <p class="fecha-estreno-home"> Fecha de estreno: ${info[i].first_air_date}<p>
                        </article>`
        }

        capturo.innerHTML = series;

    })


    .catch(function (error) {
        console.log("Error: " + error)
    })
// pelis mas vistas
let url3 = `https://api.themoviedb.org/3/movie/top_rated?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b`;

console.log(url3)

fetch(url3)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let info = data.results;
        console.log(data.results);
        let pelipopu = ""
        let capturo = document.querySelector(".padre-mas-visto-serie-home")

        for (let i = 0; i < 4; i++) {
            pelipopu += `    
                    <article class="peli-mas-vista-home">
                    <a href="detailmovie.html?movie_id=${info[i].id}">
                         <img class="img-mas-vistas-home" src="https://image.tmdb.org/t/p/w342${info[i].poster_path}"  alt="">
                         </a>
                        <h3 class="h3-home"> ${info[i].title}</h3>
                        <p class="fecha-estreno-home"> Fecha de estreno: ${info[i].release_date}<p>
                    </article>`
        }

        capturo.innerHTML = pelipopu;

    })


    .catch(function (error) {
        console.log("Error: " + error)
    })