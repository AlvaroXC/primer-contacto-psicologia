document.addEventListener('DOMContentLoaded', () => {
    addAnimation();
})

const psicologaContenedorDialogo = document.querySelector('.psicologa__contenedor__dialogo');
const titoContenedorDialogo = document.querySelector('.tito__contenedor__dialogo')

const titoImagen = document.querySelector('.tito__imagen');
const psicologaImagen = document.querySelector('.psicologa__imagen');
const itzelImagen = document.querySelector('.itzel__imagen')

const titoContenedor = document.querySelector('.tito__contenedor');
const psicologaContenedor = document.querySelector('.psicologa__contenedor');
const itzelContenedor = document.querySelector('.itzel__contenedor');

const imagenCerrarDialogo = document.querySelector('.imagen_cerrar_dialogo_tito');
const imagenCerrarDialogoPsicologa = document.querySelector('.imagen_cerrar_dialogo_psicologa');

const buttonSonido = document.querySelector('.btn-sonido');
const buttonDialogo = document.querySelector('.btn-dialogo');

imagenCerrarDialogoPsicologa.addEventListener('click', ()=> {
    ocultarElemento(psicologaContenedorDialogo);
})

imagenCerrarDialogo.addEventListener('click', () => {
    ocultarElemento(titoContenedorDialogo); 
})


buttonDialogo.addEventListener('click', ()=>{
    console.log('Presionando botón de dialogo')
})

buttonSonido.addEventListener('click', ()=>{
    console.log('Presionando el boton de sonido')
})


//array de dialogos
const dialogos = [
    {
        persona: 'Tito', 
        texto: 'Esta es la sala de psicología.'
    },
    {
        persona: 'Tito', 
        texto: 'Las niñas y niños ven a una psicóloga o psicólogo para hablar de sus emociones y decirle cómo se sienten.'
    },
    {
        persona: 'Tito', 
        texto: 'Conozcamos a la psicóloga.'
    },
    {
        persona: 'Psicóloga', 
        texto: '¡Hola, Itzel, bienvenida! Qué bueno que estés aquí.'
    },
    {
        persona: 'Psicóloga', 
        texto: 'Yo soy la psicóloga, y mi trabajo es acompañarte y ayudarte en esta experiencia. Estoy aquí para que todo esto sea más fácil para ti.'
    },
    {
        persona: 'Tito', 
        texto: '¡Las psicólogas son como superheroínas de las emociones! Ayudan a que te sientas mejor.'
    },
    {
        persona: 'Psicóloga', 
        texto: '¡En este lugar puedes hablar de lo que quieras!, de lo que sientas. Todo lo que me quieras contar está bien y no le diré a nadie.'
    },
    {
        persona: 'Tito', 
        texto: '¡Vamos Itzel! Hay que seguir con este recorrido. Aprenderemos mucho, ¿verdad psicóloga? '
    },
    {
        persona: 'Psicóloga', 
        texto: 'Claro que sí Tito.  Sigamos Itzel,  descubramos más cosas juntas. Si en algún momento tienes preguntas o algo que quieras contarme, solo dime, ¿de acuerdo?'
    },
    {
        persona: 'Psicóloga', 
        texto: 'Muy bien, Itzel. Recuerda que todo este proceso es para entenderte mejor y ayudarte. Tú eres muy valiente, y estoy aquí contigo en todo momento.'
    },
    {
        persona: 'Tito', 
        texto: '¡Eso! No estás sola, Itzel. Estamos aquí para ti.'
    }
]

let dialogoIndice = 0; 
let isTyping = false; 

titoImagen.addEventListener('click', async() => {
    if (dialogoIndice < dialogos.length && !isTyping) {
        console.log('Click en Tito'); 
        titoContenedor.classList.remove('animate-clickable');
        await mostrarDialogo();
        dialogoIndice++;
        console.log('Indice de dialogo después de incrementar: ' + dialogoIndice);
        addAnimation();

        if (dialogoIndice === 3) {
            setTimeout(async () => {
                configurarPosicionIntermedia();
            }, 1000)
        }

    }
})

psicologaContenedor.addEventListener('click', async() => {
    if (dialogoIndice < dialogos.length && !isTyping) {
        console.log('Click en la Psicologa'); 
        psicologaContenedor.classList.remove('animate-clickable');
        await mostrarDialogo();
        dialogoIndice++;
        console.log('Indice de dialogo después de incrementar: ' + dialogoIndice);
        addAnimation()

        if (dialogoIndice >= 5) {
            setTimeout(async () => {
                configurarPosicionFinal();
            }, 1000)
        }
    }
})

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
    await generarEfectoTyping(dialogo.texto, titoParrafo);
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
    await generarEfectoTyping(dialogo.texto, psicologaParrafo);
}

// Función principal de mostrar diálogo
async function mostrarDialogo() {
    if (isTyping) return;
    isTyping = true;

    await posicionarElementos();
    console.log('Mostrando diálogo');
    
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



