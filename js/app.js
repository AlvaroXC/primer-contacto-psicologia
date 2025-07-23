document.addEventListener('DOMContentLoaded', () => {
    const psicologaContenedorDialogo = document.querySelector('.psicologa__contenedor__dialogo');
    const titoContenedorDialogo = document.querySelector('.tito__contenedor__dialogo')

    const titoImagen = document.querySelector('.tito__imagen');
    const psicologaImagen = document.querySelector('.psicologa__imagen');
    const itzelImagen = document.querySelector('.itzel__imagen')

    const siguienteButton = document.querySelector('.boton__siguiente');
    const anteriorButton = document.querySelector('.boton__anterior');

    const titoContenedor = document.querySelector('.tito__contenedor');
    const psicologaContenedor = document.querySelector('.psicologa__contenedor');
    const itzelContenedor = document.querySelector('.itzel__contenedor');

    const dialogos = [
        {
            persona: 'Tito', 
            texto: 'Esta es la sala de psicología '
        },
        {
            persona: 'Tito', 
            texto: 'Las niñas y niños ven a una psicóloga o psicólogo para hablar de sus emociones y decirle cómo se sienten'
        },
        {
            persona: 'Tito', 
            texto: 'Conozcamos a la psicóloga'
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
            texto: '¡En este lugar puedes hablar de lo que quieras!, de lo que sientas. Todo lo que me quieras contar está bien y no le diré a nadie'
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
    
    let dialogoIndice = -1; 


    anteriorButton.addEventListener('click', () => {
        dialogoIndice--;
        if (dialogoIndice < 0) {
            dialogoIndice = 0; // Evita que el índice sea menor que 0
        }
        mostrarDialogo(dialogoIndice);
    })

    siguienteButton.addEventListener('click', () => {
        dialogoIndice++;
        if (dialogoIndice >= dialogos.length) {
            dialogoIndice = dialogos.length - 1; // Evita que el índice sea mayor que el número de diálogos
        }
        mostrarDialogo(dialogoIndice);
    })

function mostrarDialogo(indice){
    const dialogo = dialogos[indice];

    // Reset todos los estados
    titoContenedor.classList.remove('oculto');
    titoContenedorDialogo.classList.remove('oculto', 'flex');
    psicologaContenedor.classList.remove('oculto');
    psicologaContenedorDialogo.classList.remove('oculto', 'flex');

    // Estado por defecto (antes del índice 3)
    if (indice < 3) {
        // Mostrar solo Tito en su posición original
        titoContenedor.style.gridColumnStart = '2';
        titoContenedor.style.gridColumnEnd = '3';
        titoContenedorDialogo.style.gridColumnStart = '3';
        titoContenedorDialogo.style.gridColumnEnd = '5';

        itzelContenedor.style.height = '95%';
        itzelImagen.style.transform = 'scale(1.2)';

        psicologaContenedor.classList.add('oculto');
        psicologaContenedorDialogo.classList.add('oculto');
    }

    //itzel y la psicologa van dentro del escenario 
    else if (indice === 3 || indice === 4) {
        titoContenedor.classList.add('oculto');
        titoContenedorDialogo.classList.add('oculto');

        psicologaContenedor.style.gridColumnStart = '2';
        psicologaContenedor.style.gridColumnEnd = '3';
        psicologaContenedor.style.height= '75%'

        psicologaImagen.style.transform = 'scale(1.25)';
        psicologaImagen.style.marginLeft = '2rem';

        itzelContenedor.style.height = '85%'; 
        itzelImagen.style.transform = 'scale(1)';


        psicologaContenedorDialogo.style.gridColumnStart = '3';
        psicologaContenedorDialogo.style.gridColumnEnd = '5';
        psicologaContenedorDialogo.style.height= '65%';

    }

    //tito, itzel y la psicologa están fuera del escenario 
    else if (indice >= 5) {
        titoContenedor.classList.remove('oculto');
        titoContenedorDialogo.classList.remove('oculto');

        titoContenedor.style.gridColumnStart = '3';
        titoContenedor.style.gridColumnEnd = '4';
        titoContenedorDialogo.style.gridColumnStart = '4';
        titoContenedorDialogo.style.gridColumnEnd = '6';

        psicologaContenedor.style.gridColumnStart = '2';
        psicologaContenedor.style.gridColumnEnd = '3';
        psicologaContenedor.style.height = '85%'
        psicologaContenedorDialogo.style.gridColumnStart = '3';
        psicologaContenedorDialogo.style.gridColumnEnd = '5';
        psicologaContenedorDialogo.style.height = '80%'
        psicologaImagen.style.transform = 'scale(1.5)';
        psicologaImagen.style.marginLeft = '0';

        itzelContenedor.style.height = '95%';
        itzelImagen.style.transform = 'scale(1.2)';
    }

    // Mostrar el diálogo correspondiente
    if (dialogo.persona === 'Tito') {
        titoContenedorDialogo.classList.remove('oculto');
        titoContenedorDialogo.classList.add('flex');
        psicologaContenedorDialogo.classList.remove('flex');
        psicologaContenedorDialogo.classList.add('oculto');
        titoContenedorDialogo.querySelector('.tito__dialogo__parrafo').textContent = dialogo.texto;
        titoImagen.src = 'src/img/Titto-hablando.png';
        psicologaImagen.src = 'src/img/Psicologa.png';
    } else if (dialogo.persona === 'Psicóloga') {
        psicologaContenedorDialogo.classList.remove('oculto');
        psicologaContenedorDialogo.classList.add('flex');
        titoContenedorDialogo.classList.remove('flex');
        titoContenedorDialogo.classList.add('oculto');
        psicologaContenedorDialogo.querySelector('.psicologa__dialogo__parrafo').textContent = dialogo.texto;
        titoImagen.src = 'src/img/Tito.png';
        psicologaImagen.src = 'src/img/Psicologa-hablando.png';
    }
}



})