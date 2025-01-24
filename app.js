// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigoSecreto = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre === ''){
        alert("Por favor, inserte un nombre.");
    } else {
        amigoSecreto.push(nombre);
        limpiarNombre();
        mostrarAmigos();
    }
}

function limpiarNombre() {
    document.querySelector('#amigo').value = '';
}

function mostrarAmigos() {
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = '';
    amigoSecreto.forEach((nombre) => {
        listaAmigos.innerHTML +=`
            <li>
                ${index+1}.- ${nombre}
            </li>
        `
    })
}

function sortearAmigo() {
    if (amigoSecreto.length === 0){
        alert('No hay ningun amigo');
    } else {
        let numeroAleatorio = Math.floor(Math.random() * amigoSecreto.length);
        let tuAmigo = document.querySelector('#resultado');
        tuAmigo.innerHTML = 'Tu amigo Secreto es ' + amigoSecreto[numeroAleatorio];
    }
}
