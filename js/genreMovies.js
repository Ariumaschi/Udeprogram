// empieza el Fetch de peliculas//

let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=e88616470bd2ffe2b246bcbf04162b02`;

console.log(url)

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
                    <a href="detail-genres.html? id_G_Movie = ${info[i].id}">${info[i].name}</a>
                </article>`
                
                
 }

        capturo.innerHTML = generosPelis;
        
        capturo.style.display = "flex";
        capturo.style.flexWrap = "wrap";
        capturo.style.flexDirection = "row";
        capturo.style.justifyContent = "space-between";
       

        let articuloPeli  = document.querySelector(".article-generos")

        articuloPeli.style.display ="flex";
        articuloPeli.style.flexWrap = "wrap";
        articuloPeli.style.alignItems = "center";
        articuloPeli.style.justifyContent = "center";
        articuloPeli.style.fontSize = "20px";
        articuloPeli.style.width = "25%";
//por que se aplica solo a action????//
        

        

    })

    



    .catch(function (error) {
        console.log("Error: " + error)
    })



