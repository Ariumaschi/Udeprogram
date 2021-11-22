//PELICULAS//
let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=e88616470bd2ffe2b246bcbf04162b02`;

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let info = data.genres
        let generosPelis = ""
        let capturo = document.querySelector("div.div-generos-p")

        for (let i = 0; i < info.length; i++) {
            generosPelis +=
                `<article class="article-generos">
                    <a href="detail-genres.html?id_G_Movie=${info[i].id}&name_G_Movie=${info[i].name}&tipo=movies"> ${info[i].name} </a>
                </article>`
        }

        capturo.innerHTML = generosPelis;
    })

    .catch(function (error) {
        console.log("Error: " + error)
    })

//SERIES//

let url2 = `https://api.themoviedb.org/3/genre/tv/list?api_key=e88616470bd2ffe2b246bcbf04162b02`;

fetch(url2)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);
        let info = data.genres
        let generosSeries = ""
        let capturo = document.querySelector("div.div-generos-s")

        for (let i = 0; i < info.length; i++) {
            generosSeries +=
                `<article class="article-generos">
                    <a href="detail-genres.html?id_G_Series=${info[i].id}&name_G_Series=${info[i].name}&tipo=series"> ${info[i].name} </a>
                </article>`
        }

        capturo.innerHTML = generosSeries;

    })

    .catch(function (error) {
        console.log("Error: " + error)
    })





