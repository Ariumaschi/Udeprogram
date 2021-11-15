//buscador series
let queryString = location.search // capturando la query que se envio cuando el usuario busco una palabra
console.log(queryString)
let queryString2 = new URLSearchParams(queryString);  // pasala a un objeto literal
let query = queryString2.get('buscador'); // capturando el input que puso el usuario (LA PROPIEDAD BUSCADOR DE LA QUERY)
console.log(queryString);
console.log(query)
// queremos a partir de la palabra que capturamos traer todo lo que tiene la api en relacion a eso

let url=`https://api.themoviedb.org/3/search/tv?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b&query=${query}`;
fetch(url)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(data);
let info= data.results

})
