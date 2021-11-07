let url3= `https://api.themoviedb.org/3/movie/top_rated?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b `;

console.log(url3)

fetch(url3)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let info = data.results;
        console.log(data.results);
        let pelipopu = ""
        let capturo = document.querySelector(".peli-mas-vista-home")

        for (let i = 0; i < 4; i++) {
            pelipopu += `    
                    <article class="peli-mas-vista-home">
                         <img class="img-mas-vistas-home" src="https://image.tmdb.org/t/p/w342${info[i].poster_path}"  alt="">
                        <h3 class="h3-home"> ${info[i].title}</h3>
                        <p class="fecha-estreno-home"> ${info[i].release_date}<p>
                    </article>`
        }

        capturo.innerHTML = pelipopu;

    })


    .catch(function (error) {
        console.log("Error: " + error)
    })