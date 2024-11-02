const contPrincipal = document.getElementById('contenidoPrincipal');
const preguntas = [];
const respuestas = [];
const porcentajes = new Map([
    ["Aristóteles", 0],
    ["Platón", 0],
    ["Sócrates", 0],
    ["Nietzsche", 0],
    ["Descartes", 0],
    ["San agustín de hipona", 0],
    ["Spinoza", 0],
    ["Jaspers", 0],
    ["Anaximandro", 0],
    ["Empédocles", 0]
]);

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
    if (i < 10) {mostrarTexto('../views/juego.html');} //aca ya se modifica el contPrincipal. OJO QUE ES ASYNC
    setTimeout(() => {actualizarJuego(i);}, 1100);
    setTimeout(aparecerTexto, 2300);
}

function actualizarJuego(i){
    if (i < 10){
        document.getElementById('numeroPregunta').innerHTML = numPreg(i);
        document.getElementById('pregunta').innerHTML = preguntas[i];
        document.getElementById('respuesta').innerHTML = agregarRespuestas(i);
    } else {
        mostrarResultado('../views/resultado.html');
    }
}

function numPreg(i){
    return (i < 9) ? "N°" + (i + 1) : ' final';
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
    let valActual;
    switch(numeroPregunta) {
        case 1: 
            valActual = porcentajes.get("Aristóteles");
            porcentajes.set("Aristóteles", valActual + 10);
            break;
        case 2:
            valActual = porcentajes.get("Aristóteles");
            porcentajes.set("Aristóteles", valActual + 10);
            break;
        case 3:
            valActual = porcentajes.get("Spinoza");
            porcentajes.set("Spinoza", valActual + 10);
            break;
        case 4:
            valActual = porcentajes.get("Aristóteles");
            porcentajes.set("Aristóteles", valActual + 10);
            break;
        case 5:
            valActual = porcentajes.get("Aristóteles");
            porcentajes.set("Aristóteles", valActual + 10);
            break;
        case 6:
            valActual = porcentajes.get("San agustín de hipona");
            porcentajes.set("San agustín de hipona", valActual + 10);
            break;
        case 7:
            valActual = porcentajes.get("Aristóteles");
            porcentajes.set("Aristóteles", valActual + 10);
            break;
        case 8:
            valActual = porcentajes.get("Aristóteles");
            porcentajes.set("Aristóteles", valActual + 10);
            break;
        case 9:
            valActual = porcentajes.get("Aristóteles");
            porcentajes.set("Aristóteles", valActual + 10);
            break;
        case 10:
            valActual = porcentajes.get("Aristóteles");
            porcentajes.set("Aristóteles", valActual + 10);
            break;
    }
    mostrarPreguntaYRtas(numeroPregunta);
}

function rtaB(numeroPregunta){
    switch(numeroPregunta) {
        case 1: 
            valActual = porcentajes.get("Sócrates");
            porcentajes.set("Sócrates", valActual + 10);
            break;
        case 2:
            valActual = porcentajes.get("San agustín de hipona");
            porcentajes.set("San agustín de hipona", valActual + 10);
            break;
        case 3:
            valActual = porcentajes.get("Platón");
            porcentajes.set("Platón", valActual + 10);
            break;
        case 4:
            valActual = porcentajes.get("San agustín de hipona");
            porcentajes.set("San agustín de hipona", valActual + 10);
            break;
        case 5:
            valActual = porcentajes.get("Platón");
            porcentajes.set("Platón", valActual + 10);
            break;
        case 6:
            valActual = porcentajes.get("Empédocles");
            porcentajes.set("Empédocles", valActual + 10);
            break;
        case 7:
            valActual = porcentajes.get("Sócrates");
            porcentajes.set("Sócrates", valActual + 10);
            break;
        case 8:
            valActual = porcentajes.get("Jaspers");
            porcentajes.set("Jaspers", valActual + 10);
            break;
        case 9:
            valActual = porcentajes.get("Spinoza");
            porcentajes.set("Spinoza", valActual + 10);
            break;
        case 10:
            valActual = porcentajes.get("Sócrates");
            porcentajes.set("Sócrates", valActual + 10);
            break;
      }
      mostrarPreguntaYRtas(numeroPregunta);
}

function rtaC(numeroPregunta){
    switch(numeroPregunta) {
        case 1: 
            valActual = porcentajes.get("Spinoza");
            porcentajes.set("Spinoza", valActual + 10);
            break;
        case 2:
            valActual = porcentajes.get("Sócrates");
            porcentajes.set("Sócrates", valActual + 10);
            break;
        case 3:
            valActual = porcentajes.get("Nietzsche");
            porcentajes.set("Nietzsche", valActual + 10);
            break;
        case 4:
            valActual = porcentajes.get("Platón");
            porcentajes.set("Platón", valActual + 10);
            break;
        case 5:
            valActual = porcentajes.get("Nietzsche");
            porcentajes.set("Nietzsche", valActual + 10);
            break;
        case 6:
            valActual = porcentajes.get("Descartes");
            porcentajes.set("Descartes", valActual + 10);
            break;
        case 7:
            valActual = porcentajes.get("San agustín de hipona");
            porcentajes.set("San agustín de hipona", valActual + 10);
            break;
        case 8:
            valActual = porcentajes.get("Descartes");
            porcentajes.set("Descartes", valActual + 10);
            break;
        case 9:
            valActual = porcentajes.get("Sócrates");
            porcentajes.set("Sócrates", valActual + 10);
            break;
        case 10:
            valActual = porcentajes.get("Spinoza");
            porcentajes.set("Spinoza", valActual + 10);
            break;
      }
      mostrarPreguntaYRtas(numeroPregunta);
}

function rtaD(numeroPregunta){
    switch(numeroPregunta) {
        case 1: 
            valActual = porcentajes.get("Descartes");
            porcentajes.set("Descartes", valActual + 10);
            break;
        case 2:
            valActual = porcentajes.get("Descartes");
            porcentajes.set("Descartes", valActual + 10);
            break;
        case 3:
            valActual = porcentajes.get("Jaspers");
            porcentajes.set("Jaspers", valActual + 10);
            break;
        case 4:
            valActual = porcentajes.get("Nietzsche");
            porcentajes.set("Nietzsche", valActual + 10);
            break;
        case 5:
            valActual = porcentajes.get("Spinoza");
            porcentajes.set("Spinoza", valActual + 10);
            break;
        case 6:
            valActual = porcentajes.get("Platón");
            porcentajes.set("Platón", valActual + 10);
            break;
        case 7:
            valActual = porcentajes.get("Nietzsche");
            porcentajes.set("Nietzsche", valActual + 10);
            break;
        case 8:
            valActual = porcentajes.get("Empédocles");
            porcentajes.set("Empédocles", valActual + 10);
            break;
        case 9:
            valActual = porcentajes.get("Nietzsche");
            porcentajes.set("Nietzsche", valActual + 10);
            break;
        case 10:
            valActual = porcentajes.get("Nietzsche");
            porcentajes.set("Nietzsche", valActual + 10);
            break;
      }
      mostrarPreguntaYRtas(numeroPregunta);
}

function rtaE(numeroPregunta){
    switch(numeroPregunta) {
        case 1: 
            valActual = porcentajes.get("Nietzsche");
            porcentajes.set("Nietzsche", valActual + 10);
            break;
        case 2:
            valActual = porcentajes.get("Empédocles");
            porcentajes.set("Empédocles", valActual + 10);
            break;
        case 3:
            valActual = porcentajes.get("Anaximandro");
            porcentajes.set("Anaximandro", valActual + 10);
            break;
        case 4:
            valActual = porcentajes.get("Spinoza");
            porcentajes.set("Spinoza", valActual + 10);
            break;
        case 5:
            valActual = porcentajes.get("Jaspers");
            porcentajes.set("Jaspers", valActual + 10);
            break;
        case 6:
            valActual = porcentajes.get("Jaspers");
            porcentajes.set("Jaspers", valActual + 10);
            break;
        case 7:
            valActual = porcentajes.get("Spinoza");
            porcentajes.set("Spinoza", valActual + 10);
            break;
        case 8:
            valActual = porcentajes.get("Nietzsche");
            porcentajes.set("Nietzsche", valActual + 10);
            break;
        case 9:
            valActual = porcentajes.get("Jaspers");
            porcentajes.set("Jaspers", valActual + 10);
            break;
        case 10:
            valActual = porcentajes.get("Jaspers");
            porcentajes.set("Jaspers", valActual + 10);
            break;
      }
      mostrarPreguntaYRtas(numeroPregunta);
}

function mostrarResultado(ruta){
    mostrarTexto(ruta);
    setTimeout(() => {
        let filosofo = getFilosofoElegido();
        document.getElementById('filosofo').innerHTML = filosofo;
        agregarImagenResultados(filosofo);       
        document.getElementById('perfilResultado').innerHTML = getPerfilResultado(filosofo);
        document.getElementById('infoResultado').innerHTML = getInfoResultado(filosofo);
    }, 1100);
    setTimeout(aparecerTexto, 2000);
}

function agregarImagenResultados(filosofo){
    var newImgEl = document.createElement('img');
    newImgEl.addEventListener('load', function() {
        let caja = document.getElementById('cajaImagenResultado');
        caja.innerHTML = '';
        caja.appendChild(newImgEl);
    });
    newImgEl.setAttribute('src', '../img/' + filosofo + '.jpg');
    newImgEl.setAttribute('class', 'imagenResultado');
}

function getPerfilResultado(filosofo){
    let perfil;
    let infoPerfil;
    switch(filosofo){
        case 'Aristóteles':
        case 'Sócrates':
            perfil = 'Perfil Aristotélico (Aristóteles / Sócrates)' 
            break;
        case 'Platón':
        case 'San agustín de hipona':
            perfil = 'Perfil Platónico (Platón / San agustín de hipona)'
            break;
        case 'Nietzsche':
        case 'Anaximandro':
            perfil = 'Perfil Nietzschiano (Nietzsche / Anaximandro)'
            break;
        case 'Descartes':
        case 'Jaspers':
            perfil = 'Perfil Cartesiano (Descartes / Jaspers)'
            break;
        case 'Spinoza':
        case 'Empédocles':
            perfil = 'Perfil Spinoziano (Spinoza / Empédocles)'
            break;
    }
    return perfil;
}

function getInfoResultado(filosofo){
    let info;
    if (filosofo === 'Aristóteles' || filosofo === 'Sócrates'){
        info = "Tus respuestas muestran una profunda orientación hacia la razón y la virtud práctica. Como Aristóteles, valoras la experiencia sensorial y el desarrollo ético como el camino hacia la felicidad. La constante búsqueda de la virtud y el bien común te asemeja a este pensador, mientras que tu aprecio por la exploración de ideas a través del diálogo refleja el método socrático.";
    } else if (filosofo === 'Platón' || filosofo === 'San agustín de hipona') {
        info = "Tus elecciones indican un compromiso con las ideas trascendentales y el conocimiento de lo absoluto, como Platón, quien creía en un mundo de ideas puras accesible al alma humana. Tu conexión con lo divino y la inmortalidad del alma te emparenta también con San Agustín, que buscaba la verdad a través de la introspección y la iluminación divina.";
    } else if (filosofo === 'Nietzsche' || filosofo === 'Anaximandro') {
        info = "Tienes una visión del mundo basada en la individualidad y en enfrentar el caos de la vida. Al igual que Nietzsche, buscas desafiar las normas impuestas y construir tu propio sentido de la existencia. Este enfoque independiente y fuerte resuena también con Anaximandro, que creía en un universo en constante cambio y en el conflicto como parte del orden natural.";
    } else if (filosofo === 'Descartes' || filosofo === 'Jaspers') {
        info = "Tus respuestas reflejan un profundo interés en la razón y la duda metódica. Como Descartes, valoras el pensamiento crítico y la claridad en las ideas como formas de llegar a la verdad. A la vez, tu inclinación hacia la trascendencia y la búsqueda de sentido a través de lo racional evoca también a Jaspers, que exploraba la existencia humana y la comunicación con lo divino.";
    } else if (filosofo === 'Spinoza' || filosofo === 'Empédocles') {
        info = "Tus elecciones sugieren una afinidad con la naturaleza y un enfoque racional de la ética. Como Spinoza, crees que la armonía y el entendimiento del universo son fundamentales para la vida humana. Además, tu visión del mundo como un sistema donde todo está interrelacionado refleja también las ideas de Empédocles, quien veía en el universo una unidad de elementos bajo la influencia de fuerzas opuestas.";
    }
    return info;
}

function getFilosofoElegido(){
    let mayorClave = null;
    let mayorValor = -Infinity;
    
    porcentajes.forEach((valor, clave) => {
        if (valor > mayorValor) {
            mayorValor = valor;
            mayorClave = clave;
        }
    });
    return mayorClave;
}