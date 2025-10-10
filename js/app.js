import { dialogos } from "./dialogos.js";
import { mostrarElemento, ocultarElemento, aplicarEstilos } from "./helpers.js";
import { titoContenedorDialogo, titoImagen, titoContenedor, contenedorParrafoTito, audioTitto, imagenCerrarDialogo, IMAGENES_TITO} from "./tito.js"; 
import { psicologaContenedorDialogo, psicologaImagen, psicologaContenedor, contenedorParrafoPsicologa, audioPsicologa, imagenCerrarDialogoPsicologa, IMAGENES_PSICOLOGA} from "./psicologa.js";

const itzelImagen = document.querySelector('.itzel__imagen')
const itzelContenedor = document.querySelector('.itzel__contenedor');

const audioLobby = document.querySelector('.audio_lobby');

const buttonSonido = document.querySelector('.btn-sonido');
const buttonDialogo = document.querySelector('.btn-dialogo');

const btnSonidoImagen = document.querySelector('.btn-sonido img');

const modal = document.getElementById('modal'); 
const modalContenedorContenidoVisual = document.querySelector('.modal__contenido-visual'); 

const modalContenidoVideo = document.querySelector('.video__tutorial');;

const btnCerrarModal = document.querySelector('.modal__contenido__cerrar');

const btnGaleria = document.querySelector('.btn-galeria');

const imagenes_btn_sonido = {
    sonido_on: 'src/img/sound_on_3d.png',
    sonido_off: 'src/img/sound_off_3d.png'
}

const IMAGEN_SALA_PSICOLOGIA = 'src/img/psicologia.jpeg'

let dialogoIndice = 0; 
let isTyping = false; 
let dialogoOculto;
let btnDialogoActivated = false;  
let isGaleriaModalOpen = false; 

document.addEventListener('DOMContentLoaded', () => {
    reproducirVideoTutorial();
    ocultarBotonDialogo();
})

btnCerrarModal.addEventListener('click', () => {
    if(!isGaleriaModalOpen){
        addAnimation();
        reproducirAudioLobby();
    }
    aplicarEstilos(modal, {display: 'none'});
    isGaleriaModalOpen = false;
    
})

imagenCerrarDialogoPsicologa.addEventListener('click', () => {
    establecerDialogoOculto(psicologaContenedorDialogo);
})

imagenCerrarDialogo.addEventListener('click', () => {
    establecerDialogoOculto(titoContenedorDialogo)
})

buttonDialogo.addEventListener('click', mostrarDialogoOculto)

buttonSonido.addEventListener('click', reproducirAudioLobby)

btnGaleria.addEventListener('click', () => {
    isGaleriaModalOpen = true; 
    const contenidoVisual = modalContenedorContenidoVisual.firstElementChild;
    if(contenidoVisual.tagName === 'VIDEO'){
        cambiarContenidoModal();
    }
    aplicarEstilos(modal, {display: 'flex'});
})

function cambiarContenidoModal(){
    const modalContenidoHeading = document.querySelector('.modal__contenido h4');
    const modalContenidoParrafo = document.querySelector('.modal__contenido p'); 

    modalContenedorContenidoVisual.removeChild(modalContenedorContenidoVisual.firstElementChild); 
    
    const nuevaImagen = document.createElement('img'); 
    nuevaImagen.src = IMAGEN_SALA_PSICOLOGIA;
    modalContenedorContenidoVisual.appendChild(nuevaImagen);
    modalContenidoHeading.textContent = 'Sala de Psicología';
    modalContenidoParrafo.textContent = 'Esta es una imagen real de cómo se ve este lugar en la vida real. De esta manera, si un día llegas a ir, ¡ya sabrás cómo es!'
    btnCerrarModal.textContent = 'Cerrar'; 
}


const clickTito = () => {
    manejarClicPersonaje(titoContenedor, 3, contenedorParrafoTito);
};

const clickPsicologa = () => {
    manejarClicPersonaje(psicologaContenedor, 5, contenedorParrafoPsicologa);
};

const manejarClicPersonaje = async (contenedor, indiceFinal, contenedorParrafo) => {

    await manejarDialogos(contenedor);

    if (dialogoIndice === indiceFinal) {
        crearBotonContinuar(contenedorParrafo);
    }
};

async function reproducirVideoTutorial(){
    modalContenidoVideo.loop = true;
    try {
        await modalContenidoVideo.play();
    } catch (err) {
        console.error("La reproducción automática del video fue bloqueada por el navegador.", err);
    }
}

async function manejarDialogos(elemento){
    if (dialogoIndice < dialogos.length && !isTyping) {
        if(btnDialogoActivated){
            btnDialogoActivated = false;
            ocultarBotonDialogo();
        }
        elemento.classList.remove('animate-clickable');
        elemento.classList.add('animate-talking');
        await mostrarDialogo();
        elemento.classList.remove('animate-talking')
        dialogoIndice++;
        addAnimation()
    }
}

function reproducirAudioLobby(){
    audioLobby.loop = true; 
    if(audioLobby.paused){
        btnSonidoImagen.src =imagenes_btn_sonido.sonido_on;
        audioLobby.play();
    }else{
        btnSonidoImagen.src = imagenes_btn_sonido.sonido_off;
        audioLobby.pause();
    }
}

function establecerDialogoOculto(elemento){
    if(isTyping) return;
    dialogoOculto = elemento;
    ocultarElemento(dialogoOculto); 
    btnDialogoActivated = true;
    mostarBotonDialogo();
}

function mostrarDialogoOculto(){
    ocultarBotonDialogo();
    btnDialogoActivated = false;
    mostrarElemento(dialogoOculto);
}

function crearBotonContinuar(elemento){
    const buttonContinuar = document.createElement('button'); 
    buttonContinuar.textContent = 'Continuar';
    buttonContinuar.classList.add('btn-continuar', 'animate-clickable');
    elemento.appendChild(buttonContinuar); 
    buttonContinuar.addEventListener('click', () => {
        posicionarElementos();
        elemento.removeChild(buttonContinuar)
    })
}

function ocultarBotonDialogo(){
    buttonDialogo.style.display = 'none';
}

function mostarBotonDialogo(){
    buttonDialogo.style.display = 'inline-block';
}

function addAnimation(){
    if (dialogoIndice > dialogos.length-1) return;
    const currentCharacter = dialogos[dialogoIndice].persona;
    if(currentCharacter === 'Tito'){
        titoContenedor.classList.add('animate-clickable');
        psicologaContenedor.removeEventListener('click', clickPsicologa)
        titoImagen.addEventListener('click', clickTito);
    }else if(currentCharacter === 'Psicóloga'){
        psicologaContenedor.classList.add('animate-clickable');
        titoImagen.removeEventListener('click', clickTito); 
        psicologaContenedor.addEventListener('click', clickPsicologa)  
    }
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

async function mostrarDialogoTito(dialogo) {
    titoImagen.src = IMAGENES_TITO.hablando;
    psicologaImagen.src = IMAGENES_PSICOLOGA.normal;

    mostrarElemento(titoContenedorDialogo);
    ocultarElemento(psicologaContenedorDialogo);

    const titoParrafo = titoContenedorDialogo.querySelector('.tito__dialogo__parrafo');
    const titoHeadImagen = titoContenedorDialogo.querySelector('.tito__head__imagen');
    titoHeadImagen.classList.add('animate-talking-minihead');
    await generarEfectoTyping(dialogo.texto, titoParrafo,'Tito');
    titoHeadImagen.classList.remove('animate-talking-minihead');
}

async function mostrarDialogoPsicologa(dialogo) {

    titoImagen.src = IMAGENES_TITO.normal;
    psicologaImagen.src = IMAGENES_PSICOLOGA.hablando;

    mostrarElemento(psicologaContenedorDialogo);
    ocultarElemento(titoContenedorDialogo);

    const psicologaParrafo = psicologaContenedorDialogo.querySelector('.psicologa__dialogo__parrafo');
    const psicologaHeadImagen = document.querySelector('.psicologa__head__imagen');
    psicologaHeadImagen.classList.add('animate-talking-minihead');
    await generarEfectoTyping(dialogo.texto, psicologaParrafo,'Psicologa');
    psicologaHeadImagen.classList.remove('animate-talking-minihead');

}

async function mostrarDialogo() {
    if (isTyping) return;
    isTyping = true;

    posicionarElementos();
    
    const dialogo = dialogos[dialogoIndice];

    if (dialogo.persona === 'Tito') {
        await mostrarDialogoTito(dialogo);
    } else if (dialogo.persona === 'Psicóloga') {
        await mostrarDialogoPsicologa(dialogo);
    }

    isTyping = false;
}


async function posicionarElementos() {
    if (dialogoIndice === 3) {
        configurarPosicionIntermedia();
    } else if (dialogoIndice === 5) {
        configurarPosicionFinal();
    }
}

async function generarEfectoTyping(texto, elemento, characterName, velocidad = 30) {
    elemento.textContent = ""; 

    let wordCounter = 0; 
    const WORDS_PER_SOUND = 3; 

    const audioSrc = characterName === 'Tito' ? audioTitto.src : audioPsicologa.src;

    for (let i = 0; i < texto.length; i++) {
        elemento.textContent += texto[i];
        const prevChar = i > 0 ? texto[i - 1] : ' ';
        const isWordBoundary = prevChar === ' ' || /[.!?;:]/.test(prevChar);

        if (isWordBoundary && texto[i] !== ' ') {
            wordCounter++;
            if (wordCounter % WORDS_PER_SOUND === 0) {
                playFluidSpeechSound(audioSrc);
            }
        }
        await new Promise(resolve => setTimeout(resolve, velocidad));
    }
}

function playFluidSpeechSound(url, volume = 0.7) {
    const audio = new Audio(url); 

    const randomPitch = 0.8 + Math.random() * 0.4;
    
    audio.playbackRate = randomPitch; 
    audio.preservesPitch = false; 

    audio.volume = volume;

    audio.currentTime = 0;
    
    audio.play().catch(e => {
        console.error("Error al reproducir sonido fluido:", e);
    });
}
