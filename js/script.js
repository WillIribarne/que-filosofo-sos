const contPrincipal = document.getElementById('contenidoPrincipal');
const preguntas = [];
const respuestas = [];

function mostrarPortada() {
    desaparecerTexto();
    mostrarTexto('../views/portada.html');
    setTimeout(aparecerTexto, 1300);
}

function mostrarInstr() {
    desaparecerTexto();
    mostrarTexto('../views/instrucciones.html');
    setTimeout(aparecerTexto, 1300);
}

function mostrarInfo() {
    desaparecerTexto();
    mostrarTexto('../views/masInfo.html');
    setTimeout(aparecerTexto, 1300);
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

function loadQuestions() {
    fetch('../data/preguntas.txt')
        .then(response => response.text())
        .then(data => {
            questionsArray.push(...data.split('\n'));
            console.log(questionsArray);
        })
        .catch(error => console.error('Error loading questions:', error));
}

// Call the function to load questions
loadQuestions();

