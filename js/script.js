const contPrincipal = document.getElementById('contenidoPrincipal');
const preguntas = [];
const respuestas = [];
const porcentajes = new Map([
    ["Aristoteles", 0],
    ["Platón", 0],
    ["Sócrates", 0],
    ["Nietzsche", 0],
    ["Descartes", 0],
    ["San_Agustín_De_Hipona", 0],
    ["Spinoza", 0]
])

function mostrarPortada() {
    desaparecerTexto();
    mostrarTexto('../views/portada.html');
    setTimeout(aparecerTexto, 2000);
}

function mostrarInstr() {
    desaparecerTexto();
    mostrarTexto('../views/instrucciones.html');
    setTimeout(aparecerTexto, 2000);
}

function mostrarInfo() {
    desaparecerTexto();
    mostrarTexto('../views/masInfo.html');
    setTimeout(aparecerTexto, 2000);
}

function empezarJuego(){
    if (preguntas.length === 0) {
        cargarPreguntas();
        cargarRespuestas();
    }
    for (let p of preguntas) {
        print(p);
    }
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
        .catch(error => console.error('Error cargando HTML:', error));
    }, 1000);
}

function cargarPreguntas() {
    fetch('../data/preguntas.txt')
        .then(response => response.text())
        .then(data => {
            preguntas.push(...data.split('\n').map(line => line.replace('\r', '')));
            console.log(preguntas)
        })
        .catch(error => console.error('Error loading preguntas:', error));
}

function cargarRespuestas() {
    fetch('../data/respuestas.txt')
        .then(response => response.text())
        .then(data => {
            const questionGroups = data.split('-');
            questionGroups.forEach(group => {
                const rtas = group.trim().split('\n').map(line => line.replace('\r', '').trim());
                if (rtas.length > 1) {
                    respuestas.push(rtas);
                }
            });
            console.log(respuestas);
        })
        .catch(error => console.error('Error cargando respuestas:', error));
}