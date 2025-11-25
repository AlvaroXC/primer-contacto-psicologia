/**
 * Contenedor del globo de diálogo de la psicóloga.
 * @type {HTMLElement}
 */
const psicologaContenedorDialogo = document.querySelector('.psicologa__contenedor__dialogo');

/**
 * Imagen principal de la psicóloga.
 * @type {HTMLImageElement}
 */
const psicologaImagen = document.querySelector('.psicologa__imagen');

/**
 * Contenedor general de la psicóloga en escena.
 * @type {HTMLElement}
 */
const psicologaContenedor = document.querySelector('.psicologa__contenedor');

/**
 * Párrafo donde se inserta el texto del diálogo de la psicóloga.
 * @type {HTMLElement}
 */
const contenedorParrafoPsicologa = psicologaContenedorDialogo.querySelector('.psicologa__contenedor__parrafo');

/**
 * Objeto con la configuración del audio para la voz de la psicóloga.
 * @type {{ src: string }}
 */
const AUDIO_PSICOLOGA = { src: 'src/itzel_voice.mp3' }; 

/**
 * Referencia a la imagen usada para cerrar el diálogo de la psicóloga.
 * @type {HTMLImageElement}
 */
const imagenCerrarDialogoPsicologa = document.querySelector('.imagen_cerrar_dialogo_psicologa');

/**
 * Rutas de las imágenes de la psicóloga en diferentes estados.
 * @type {{ hablando: string, normal: string }}
 */
const IMAGENES_PSICOLOGA = {
    hablando: 'src/img/Psicologa-hablando.png',
    normal: 'src/img/Psicologa.png'
};


export {
    psicologaContenedorDialogo, 
    psicologaImagen, 
    psicologaContenedor, 
    contenedorParrafoPsicologa, 
    AUDIO_PSICOLOGA, 
    imagenCerrarDialogoPsicologa, 
    IMAGENES_PSICOLOGA
}
