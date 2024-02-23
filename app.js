let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignartTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
      
    if (numeroDeUsuario === numeroSecreto) {
        asignartTextoElemento ('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto.
        if (numeroDeUsuario > numeroSecreto) {
            asignartTextoElemento('p','El numero secreto es menor');
        } else {
            asignartTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();

    }
    
    return;

}

function limpiarCaja (){
    let valorCaja = document.querySelector ('#valorUsuario'). value= '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros hay que cerrar el juego
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignartTextoElemento('p', 'Ya se sortearon todos los numeros posibles')

    }else { 

    //Si el numero generado esta incluido en la lista hacemos
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

    
}

function condicionesIniciales() {
    asignartTextoElemento('h1', 'Juego del numero secreto!');
    asignartTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto ();
    intentos=1;

}
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja ();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
   
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

    
}

condicionesIniciales();