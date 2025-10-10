const psicologaContenedorDialogo = document.querySelector('.psicologa__contenedor__dialogo');
const psicologaImagen = document.querySelector('.psicologa__imagen');
const psicologaContenedor = document.querySelector('.psicologa__contenedor');
const contenedorParrafoPsicologa = psicologaContenedorDialogo.querySelector('.psicologa__contenedor__parrafo');
const audioPsicologa = { src: './../src/itzel_voice.mp3' }; 
const imagenCerrarDialogoPsicologa = document.querySelector('.imagen_cerrar_dialogo_psicologa');
const IMAGENES_PSICOLOGA = {
    hablando: 'src/img/Psicologa-hablando.png',
    normal: 'src/img/Psicologa.png'
};


export {
    psicologaContenedorDialogo, 
    psicologaImagen, 
    psicologaContenedor, 
    contenedorParrafoPsicologa, 
    audioPsicologa, 
    imagenCerrarDialogoPsicologa, 
    IMAGENES_PSICOLOGA
}
