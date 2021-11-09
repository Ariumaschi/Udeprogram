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
                        <p class="fecha-estreno-home"> ${info[i].release_date}<p>
                    </article>`
                
        }
  
        capturo.innerHTML = peliculas;
        
    })
   

    .catch(function (error) {
        console.log("Error: " + error)
    })

