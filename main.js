let palabra = '';

const palindromo = () => {
    palabra = document.getElementById('palabra').value.toLowerCase().replace(/\s+/g, '');

    let esPalindromo = true;
    let longitud = palabra.length;

    for (let i = 0; i < longitud / 2; i++) {
        if (palabra[i] !== palabra[longitud - 1 - i]) {
            esPalindromo = false;
            break;
        }
    }
    const respuesta = document.getElementById('respuesta');
    if (esPalindromo) {
        respuesta.innerHTML = 'Es un palindromo';
    } else {
        respuesta.innerHTML = 'No es un palindromo';
    }
    
}