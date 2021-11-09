let queryString= location.search //obtengo la query desde la url
let queryString2= new URLSearchParams(queryString) //transformo la query en un objeto literal
let id =queryString2.get('movie_id'); // obtengo el dato del id del objeto literal 
console.log(queryString);

let url = `https://api.themoviedb.org/3/movie/${id}?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b`

console.log (url)

fetch(url)
.then (function(response) {
    return response.json ();
})
.then (function(data) {
    console.log(data)
    let info=data.results
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
                <p class="p1"><span>Géneros: </span><a href="./detail-genres.html">${info[i].geners}</a></p>
                <p class="p4"><span>Sinopsis:</span> ${info[i].overview}</p>`
                
        }
  
        capturo.innerHTML = detallepeli;
})



.catch (function(error) {
console.log("Error: " + error)
})