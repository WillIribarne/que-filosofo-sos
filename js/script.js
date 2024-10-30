const contPrincipal = document.getElementById('contenidoPrincipal');
const preguntas = [];

function mostrarPortada() {
    desaparecerTexto();
    mostrarTexto('../datafiles/portada.html');
    setTimeout(aparecerTexto, 1000);
}

function mostrarReglas() {
    desaparecerTexto();
    mostrarTexto('../datafiles/reglas.html');
    setTimeout(aparecerTexto, 1000);
}

function mostrarInfo() {
    desaparecerTexto();
    mostrarTexto('../datafiles/masInfo.html');
    setTimeout(aparecerTexto, 1000);
}

function empezarJuego(){

}

function desaparecerTexto(){
    contPrincipal.classList.remove('hola');
    contPrincipal.classList.add('chau');
}

function aparecerTexto(){
    contPrincipal.classList.remove('chau');
    contPrincipal.classList.add('hola');
}

function mostrarTexto(ruta){
    setTimeout(() =>{
        fetch(ruta)
        .then(response => response.text())
        .then(data => {
            contPrincipal.innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
    }, 1000);
}
