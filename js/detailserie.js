let queryString= location.search //obtengo la query desde la url
let queryString2= new URLSearchParams(queryString) //transformo la query en un objeto literal
let id =queryString2.get('tv_id'); // obtengo el dato del id del objeto literal
console.log(queryString);

let url= `https://api.themoviedb.org/3/tv/${id}?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b`;

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


