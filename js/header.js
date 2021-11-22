let formulario = document.querySelector ('form');
let inputField = document.querySelector ('.search'); // ponerle la clase al input
let message = document.querySelector ('.message'); //  hacer una p y su clase es esta

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    console.log("No me mando");

    if(inputField.value == ""){
        message.innerText = "El campo es obligatorio";
        inputField.style.outline = "2px solid red"
        message.style.fontWeight = "bold" // aplica para el else if tambien ya que se usa "message" en ambos casos
        message.style.color = "red" // aplica para el else if tambien ya que se usa "message" en ambos casos
    }

    else if(inputField.value.length < 3){
        message.innerText = "Debe escribir al menos 3 caracteres"
        inputField.style.outline = "2px solid red"
    }

    else {
        this.submit ()
    }

})

inputField.addEventListener('focus', function (){
    message.innerText = '';
    inputField.style.outline = "auto"
})