// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

//Traer mi elementos
let input = document.getElementById('input');

//Boton
let botonEnviar = document.getElementById('button');

//lugar
let lugar = document.getElementById('answer');


function traerFetchAnswer() {
    fetch(API_ENDPOINT)
    .then(info = info.json())
    .then((respuestas)=>{
        llamarRespuestas(respuestas)
    })
}

function llamarRespuestas(respuesta){
    console.log(respuesta);
}


llamarRespuestas();
botonEnviar.addEventListener('click',llamarRespuestas);


