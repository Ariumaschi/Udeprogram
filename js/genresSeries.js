let url2 = `https://api.themoviedb.org/3/genre/tv/list?api_key=e88616470bd2ffe2b246bcbf04162b02`;

console.log(url2)

fetch(url)
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
                    <a href="detail-genres.html">${info[i].name}</a>
                </article>`
                
                
 }

        capturo.innerHTML = generosSeries;
        
        capturo.style.display = "flex";
        capturo.style.flexWrap = "wrap";
        capturo.style.flexDirection = "row";
        capturo.style.justifyContent = "space-between";
       


        let articuloSeries  = document.querySelector(".article-generos")

        articuloSeries.style.display ="flex";
        articuloSeries.style.flexWrap = "wrap";
        articuloSeries.style.alignItems = "center";
        articuloSeries.style.justifyContent = "center";
        articuloSeries.style.fontSize = "20px";
                  

    })

    



    .catch(function (error) {
        console.log("Error: " + error)
    })



