/**
 * Muestra un elemento HTML eliminando la clase "oculto" y agregando "flex".
 *
 * @param {HTMLElement} elemento - El elemento del DOM que se desea mostrar.
 */
function mostrarElemento(elemento) {
    elemento.classList.remove('oculto');
    elemento.classList.add('flex');
}

/**
 * Oculta un elemento HTML eliminando la clase "flex" y agregando "oculto".
 *
 * @param {HTMLElement} elemento - El elemento del DOM que se desea ocultar.
 */
function ocultarElemento(elemento) {
    elemento.classList.remove('flex');
    elemento.classList.add('oculto');
}

/**
 * Aplica un conjunto de estilos CSS a un elemento HTML.
 *
 * @param {HTMLElement} elemento - El elemento al que se le aplicarán los estilos.
 * @param {Object.<string, string>} estilos - Objeto donde cada key es una propiedad CSS
 * y cada valor es el valor que se aplicará a esa propiedad.
 *
 * @example
 * aplicarEstilos(contenedor, {
 *   backgroundColor: 'red',
 *   display: 'block'
 * });
 */
function aplicarEstilos(elemento, estilos) {
    Object.entries(estilos).forEach(([propiedad, valor]) => {
        elemento.style[propiedad] = valor;
    });
}

export { mostrarElemento, ocultarElemento, aplicarEstilos};