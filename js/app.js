import { dialogos } from "./dialogos.js";

const psicologaContenedorDialogo = document.querySelector('.psicologa__contenedor__dialogo');
const titoContenedorDialogo = document.querySelector('.tito__contenedor__dialogo')

const titoImagen = document.querySelector('.tito__imagen');
const psicologaImagen = document.querySelector('.psicologa__imagen');
const itzelImagen = document.querySelector('.itzel__imagen')

const titoContenedor = document.querySelector('.tito__contenedor');
const psicologaContenedor = document.querySelector('.psicologa__contenedor');
const itzelContenedor = document.querySelector('.itzel__contenedor');

const contenedorParrafoTito = titoContenedorDialogo.querySelector('.tito__contenedor__parrafo');
const contenedorParrafoPsicologa = psicologaContenedorDialogo.querySelector('.psicologa__contenedor__parrafo');

const imagenCerrarDialogo = document.querySelector('.imagen_cerrar_dialogo_tito');
const imagenCerrarDialogoPsicologa = document.querySelector('.imagen_cerrar_dialogo_psicologa');
const audioLobby = document.querySelector('.audio_lobby');
const audioTitto = document.querySelector('.audio_tito');
const audioPsicologa = document.querySelector('.audio_psicologa');

const buttonSonido = document.querySelector('.btn-sonido');
const buttonDialogo = document.querySelector('.btn-dialogo');

const btnSonidoImagen = document.querySelector('.btn-sonido img');

const imagenes_btn_sonido = {
    sonido_on: 'src/img/sound_on_3d.png',
    sonido_off: 'src/img/sound_off_3d.png'
}

let dialogoIndice = 0; 
let isTyping = false; 
let dialogoOculto;
let btnDialogoActivated = false;   

document.addEventListener('DOMContentLoaded', () => {
    addAnimation();
    ocultarBotonDialogo();
})

imagenCerrarDialogoPsicologa.addEventListener('click', () => {
    if(isTyping) return;
    dialogoOculto = psicologaContenedorDialogo;
    ocultarElemento(dialogoOculto);
    btnDialogoActivated = true;
    mostarBotonDialogo()
})

imagenCerrarDialogo.addEventListener('click', () => {
    if(isTyping) return;
    dialogoOculto = titoContenedorDialogo;
    ocultarElemento(dialogoOculto); 
    btnDialogoActivated = true;
    mostarBotonDialogo();
})

buttonDialogo.addEventListener('click', () => {
    ocultarBotonDialogo();
    btnDialogoActivated = false;
    mostrarElemento(dialogoOculto);
})

buttonSonido.addEventListener('click', ()=>{
    //proxima funcionalidad, después de dar click
    audioLobby.loop = true; 
    if(audioLobby.paused){
        btnSonidoImagen.src =imagenes_btn_sonido.sonido_on;
        audioLobby.play();
    }else{
        btnSonidoImagen.src = imagenes_btn_sonido.sonido_off;
        audioLobby.pause();
    }
})

function reproductiAudioTito(){
    audioTitto.loop = true; 
    audioTitto.playbackRate = 1.2;
    audioTitto.play();
}

function pausarAudioTito(){
    audioTitto.pause();
}

function reproductiAudioPsicologa(){
    audioPsicologa.loop = true; 
    audioPsicologa.play();
}

function pausarAudioPsicologa(){
    audioPsicologa.pause();
}

titoImagen.addEventListener('click', async() => {
    if (dialogoIndice < dialogos.length && !isTyping) {
        if(btnDialogoActivated){
            btnDialogoActivated = false;
            ocultarBotonDialogo();
        }
        titoContenedor.classList.remove('animate-clickable');
        titoContenedor.classList.add('animate-talking');
        reproductiAudioTito();
        await mostrarDialogo();
        pausarAudioTito();
        titoContenedor.classList.remove('animate-talking')
        dialogoIndice++;
        addAnimation();

        if (dialogoIndice === 3) {
            const btnContinuar = crearBotonContinuar(); 
            contenedorParrafoTito.appendChild(btnContinuar); 
            btnContinuar.addEventListener('click', () => {
                configurarPosicionIntermedia(); 
                contenedorParrafoTito.removeChild(btnContinuar);
            })
        }

    }
})

psicologaContenedor.addEventListener('click', async() => {
    if (dialogoIndice < dialogos.length && !isTyping) {
        if(btnDialogoActivated){
            btnDialogoActivated = false;
            ocultarBotonDialogo();
        }
        psicologaContenedor.classList.remove('animate-clickable');
        psicologaContenedor.classList.add('animate-talking');
        reproductiAudioPsicologa();
        await mostrarDialogo();
        pausarAudioPsicologa();
        psicologaContenedor.classList.remove('animate-talking')
        dialogoIndice++;
        addAnimation()

        if (dialogoIndice == 5) {
            const btnContinuar = crearBotonContinuar(); 
            contenedorParrafoPsicologa.appendChild(btnContinuar); 
            btnContinuar.addEventListener('click', () => {
                configurarPosicionFinal(); 
                contenedorParrafoPsicologa.removeChild(btnContinuar);
            })
        }
    }
})

function crearBotonContinuar(){
    const buttonContinuar = document.createElement('button'); 
    buttonContinuar.textContent = 'Continuar';
    buttonContinuar.classList.add('btn-continuar', 'animate-clickable');
    return buttonContinuar; 
}

function ocultarBotonDialogo(){
    buttonDialogo.style.display = 'none';
}

function mostarBotonDialogo(){
    buttonDialogo.style.display = 'inline-block';
}

function addAnimation(){
    const currentCharacter = dialogos[dialogoIndice].persona;
    if(currentCharacter === 'Tito'){
        titoContenedor.classList.add('animate-clickable');
    }else if(currentCharacter === 'Psicóloga'){
        psicologaContenedor.classList.add('animate-clickable');
    }
}

// Configuración de personajes
const IMAGENES_TITO = {
    hablando: 'src/img/Titto-hablando.png',
    normal: 'src/img/Tito.png'
};

const IMAGENES_PSICOLOGA = {
    hablando: 'src/img/Psicologa-hablando.png',
    normal: 'src/img/Psicologa.png'
};

// Funciones auxiliares para manejar elementos DOM
function mostrarElemento(elemento) {
    elemento.classList.remove('oculto');
    elemento.classList.add('flex');
}

function ocultarElemento(elemento) {
    elemento.classList.remove('flex');
    elemento.classList.add('oculto');
}

function aplicarEstilos(elemento, estilos) {
    Object.entries(estilos).forEach(([propiedad, valor]) => {
        elemento.style[propiedad] = valor;
    });
}

// Funciones de configuración de posiciones
function configurarPosicionInicial() {
    // Tito
    aplicarEstilos(titoContenedor, {
        gridColumnStart: '2',
        gridColumnEnd: '3'
    });
    aplicarEstilos(titoContenedorDialogo, {
        gridColumnStart: '3',
        gridColumnEnd: '5'
    });

    // Itzel
    aplicarEstilos(itzelContenedor, { height: '95%' });
    aplicarEstilos(itzelImagen, { transform: 'scale(1.2)' });

    // Ocultar psicóloga
    psicologaContenedor.classList.add('oculto');
    psicologaContenedorDialogo.classList.add('oculto');
}

function configurarPosicionIntermedia() {

    // Ocultar Tito
    titoContenedor.classList.add('oculto');
    titoContenedorDialogo.classList.remove('flex');
    titoContenedorDialogo.classList.add('oculto');

    // Psicóloga
    aplicarEstilos(psicologaContenedor, {
        gridColumnStart: '2',
        gridColumnEnd: '3',
        height: '75%'
    });
    aplicarEstilos(psicologaImagen, {
        transform: 'scale(1.25)',
        marginLeft: '2rem'
    });
    aplicarEstilos(psicologaContenedorDialogo, {
        gridColumnStart: '3',
        gridColumnEnd: '5',
        height: '65%'
    });
    psicologaContenedor.classList.remove('oculto');

    // Itzel
    aplicarEstilos(itzelContenedor, { height: '85%' });
    aplicarEstilos(itzelImagen, { transform: 'scale(1)' });
}

function configurarPosicionFinal() {
    // Tito
    aplicarEstilos(titoContenedor, {
        gridColumnStart: '3',
        gridColumnEnd: '4'
    });
    aplicarEstilos(titoContenedorDialogo, {
        gridColumnStart: '4',
        gridColumnEnd: '6'
    });
    titoContenedor.classList.remove('oculto');
    // titoContenedorDialogo.classList.remove('oculto');

    psicologaImagen.src = IMAGENES_PSICOLOGA.normal;
    ocultarElemento(psicologaContenedorDialogo);

    // Psicóloga
    aplicarEstilos(psicologaContenedor, {
        gridColumnStart: '2',
        gridColumnEnd: '3',
        height: '85%'
    });
    aplicarEstilos(psicologaImagen, {
        transform: 'scale(1.5)',
        marginLeft: '0'
    });
    aplicarEstilos(psicologaContenedorDialogo, {
        gridColumnStart: '3',
        gridColumnEnd: '5',
        height: '80%'
    });

    // Itzel
    aplicarEstilos(itzelContenedor, { height: '95%' });
    aplicarEstilos(itzelImagen, { transform: 'scale(1.2)' });
}

// Funciones de diálogo por personaje
async function mostrarDialogoTito(dialogo) {
    // Actualizar imágenes
    titoImagen.src = IMAGENES_TITO.hablando;
    psicologaImagen.src = IMAGENES_PSICOLOGA.normal;

    // Mostrar/ocultar contenedores de diálogo
    mostrarElemento(titoContenedorDialogo);
    ocultarElemento(psicologaContenedorDialogo);

    // Generar efecto typing
    const titoParrafo = titoContenedorDialogo.querySelector('.tito__dialogo__parrafo');
    const titoHeadImagen = titoContenedorDialogo.querySelector('.tito__head__imagen');
    titoHeadImagen.classList.add('animate-talking-minihead');
    await generarEfectoTyping(dialogo.texto, titoParrafo);
    titoHeadImagen.classList.remove('animate-talking-minihead');
}

async function mostrarDialogoPsicologa(dialogo) {
    // Actualizar imágenes
    titoImagen.src = IMAGENES_TITO.normal;
    psicologaImagen.src = IMAGENES_PSICOLOGA.hablando;

    // Mostrar/ocultar contenedores de diálogo
    mostrarElemento(psicologaContenedorDialogo);
    ocultarElemento(titoContenedorDialogo);

    // Generar efecto typing
    const psicologaParrafo = psicologaContenedorDialogo.querySelector('.psicologa__dialogo__parrafo');
    const psicologaHeadImagen = document.querySelector('.psicologa__head__imagen');
    psicologaHeadImagen.classList.add('animate-talking-minihead');
    await generarEfectoTyping(dialogo.texto, psicologaParrafo);
    psicologaHeadImagen.classList.remove('animate-talking-minihead');

}

// Función principal de mostrar diálogo
async function mostrarDialogo() {
    if (isTyping) return;
    isTyping = true;

    await posicionarElementos();
    
    const dialogo = dialogos[dialogoIndice];

    // Mostrar el diálogo según el personaje
    if (dialogo.persona === 'Tito') {
        await mostrarDialogoTito(dialogo);
    } else if (dialogo.persona === 'Psicóloga') {
        await mostrarDialogoPsicologa(dialogo);
    }

    isTyping = false;
}

// Función de posicionamiento de elementos
async function posicionarElementos() {
    return new Promise((resolve) => {

        // Determinar configuración según el índice
        if (dialogoIndice < 3) {
            configurarPosicionInicial();
        } else if (dialogoIndice === 3 || dialogoIndice === 4) {
            configurarPosicionIntermedia();
        } else if (dialogoIndice >= 5) {
            configurarPosicionFinal();
        }

        resolve();
    });
}

async function generarEfectoTyping(texto, elemento, velocidad = 50) {
    elemento.textContent = ""; // limpiar antes
    for (let i = 0; i < texto.length; i++) {
        elemento.textContent += texto[i];
        await new Promise(resolve => setTimeout(resolve, velocidad));
    }
}



