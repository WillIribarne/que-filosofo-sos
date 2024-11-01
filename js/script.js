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
    testFilosofico();
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
function testFilosofico(){
    mostrarPreguntaYRtas(0);
}

function mostrarPreguntaYRtas(i) {
    desaparecerTexto();
    mostrarTexto('../views/juego.html'); //aca ya se modifica el contPrincipal. OJO QUE ES ASYNC
    setTimeout(() => {actualizarJuego(i);}, 1100);
    setTimeout(aparecerTexto, 2300);
}

function actualizarJuego(i){
    if (i < 10){
        document.getElementById('numeroPregunta').innerHTML = (i + 1);
        document.getElementById('pregunta').innerHTML = preguntas[i];
        document.getElementById('respuesta').innerHTML = agregarRespuestas(i);
    } else {
        mostrarInfo(); //aca tiene que ser mostrarResultado();
    }
}

function agregarRespuestas(i){
    let textoResp = '';
    let opcion = 'A';
    for (x in respuestas[i]){
        textoResp +=  "<span class=\"letraGrande\">" + opcion + ": </span>" + "<button class=\"botonRespuesta gricesito\" onclick=\" rta" + opcion + "("+ (i+1) + ")\">" + respuestas[i][x] + "</button><br>";
        opcion = String.fromCharCode(opcion.charCodeAt(0) + 1); //esto va A,B,C,D,E
    }
    return textoResp;
}

function rtaA(numeroPregunta){
    switch(numeroPregunta) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
    }
    mostrarPreguntaYRtas(numeroPregunta);
}

function rtaB(numeroPregunta){
    switch(numeroPregunta) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
      }
      mostrarPreguntaYRtas(numeroPregunta);
}

function rtaC(numeroPregunta){
    switch(numeroPregunta) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
      }
      mostrarPreguntaYRtas(numeroPregunta);
}

function rtaD(numeroPregunta){
    switch(numeroPregunta) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
      }
      mostrarPreguntaYRtas(numeroPregunta);
}

function rtaE(numeroPregunta){
    switch(numeroPregunta) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
      }
      mostrarPreguntaYRtas(numeroPregunta);
}