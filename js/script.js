const contPrincipal = document.getElementById('contenidoPrincipal');
const preguntas = [
    "¿Cuál es el propósito de la vida?",
    "¿Como crees que adquirimos conocimiento verdadero?",
    "¿Cuál es la relación entre el ser humano y el universo?",
    "¿Cuál es tu visión sobre la ética y la moral?",
    "¿Qué importancia tiene el individuo en la sociedad?",
    "¿Qué lugar ocupa Dios o lo divino en tu vida?",
    "Si tenés un conflicto con un amigo cercano, ¿cómo abordas la situación?",
    "¿Qué hacés cuando te enfrentas a una decisión importante que cambiará tu vida?",
    "Si tienes una meta a largo plazo, pero te encuentras con obstáculos constantes, ¿cómo actúas?",
    "¿Cómo reaccionas cuando enfrentas una injusticia en tu entorno, como en el trabajo o la escuela?"
];
const respuestas = [
    [
        "Buscar el bien supremo y vivir en virtud",
        "Cuestionar constantemente para descubrir la verdad",
        "Perfeccionarse y alinearse con la naturaleza universal",
        "Comprender el mundo a través de la razón y dudar de lo incierto",
        "Aceptar el caos y encontrar la propia voluntad de poder"
    ],
    [
        "A través de la experiencia sensorial y el razonamiento lógico",
        "Con la introspección y la luz divina en el alma",
        "Cuestionando y dialogando con otros",
        "Mediante la deducción y la claridad de las ideas",
        "Alineándonos con la armonía del universo"
    ],
    [
        "El ser humano es parte de la naturaleza y debe vivir de acuerdo a ella",
        "El alma humana es inmortal y tiene conocimiento de las ideas eternas",
        "Cada persona debe crear su propio sentido de la vida, enfrentando el caos",
        "Hay una unión esencial entre el hombre y lo divino",
        "El ser humano y el universo son elementos en constante cambio"
    ],
    [
        "Vivir conforme a la virtud para alcanzar la felicidad",
        "La moral se basa en el amor y la caridad hacia los demás",
        "La ética proviene de la razón y el respeto a las leyes universales",
        "Cuestionar las convenciones morales impuestas y buscar el poder personal",
        "Seguir las leyes de la naturaleza y aceptar el destino"
    ],
    [
        "El individuo debe buscar su propio desarrollo moral y ético para el bien común",
        "La sociedad es un conjunto de ideas en las que cada persona encuentra su papel",
        "Cada individuo es responsable de crear su propio sentido y no seguir normas impuestas",
        "El individuo debe vivir en armonía con las leyes de la naturaleza",
        "La sociedad y el individuo deben unirse en un propósito trascendental"
    ],
    [
        "Dios es la fuente de toda verdad y el fin último al que aspiramos",
        "Lo divino es una fuerza unificadora en la naturaleza y en el orden universal",
        "La existencia de Dios debe ser cuestionada racionalmente",
        "Lo divino es un reflejo de las ideas puras y eternas",
        "La fe en lo trascendental ayuda a comprender la existencia humana"
    ],
    [
        "Busco resolver el problema de manera racional y promover el bien de la amistad",
        "Trato de dialogar para entender la perspectiva del otro y encontrar una verdad compartida",
        "Reflexiono sobre cómo la situación refleja aspectos más profundos del alma y el amor divino",
        "Considero el conflicto como una oportunidad para reforzar mi individualidad y autenticidad",
        "Veo el conflicto como parte del flujo natural de las relaciones, que debemos aceptar con serenidad "
    ],
    [
        "Evalúo la decisión en función de la virtud y su impacto en mi desarrollo moral",
        "Pienso en cómo la decisión puede alinearse con mi búsqueda de la verdad y el propósito personal",
        "Utilizo la duda y la reflexión para llegar a una conclusión racional y clara",
        "Me dejo guiar por mi intuición y el sentido de orden cósmico para tomar la decisión correcta",
        "Veo la decisión como una oportunidad para superar mis propios límites y crear mi propio destino"
    ],
    [
        "Sigo adelante con disciplina, viendo cada obstáculo como una oportunidad para fortalecerme",
        "Reflexiono sobre si la meta sigue alineada con mis valores y la verdadera naturaleza del bien",
        "Cuestiono las dificultades y aprendo de ellas para adaptarme y mejorar mi estrategia",
        "Acepto que los obstáculos son parte de la lucha por crear mi propio sentido de vida",
        "Considero que las dificultades pueden ser un signo de algo trascendental que guía mi camino"
    ],
    [
        "Intento buscar una solución justa que promueva el bienestar de todos",
        "Reflexiono sobre la situación y cuestiono la naturaleza de la justicia misma",
        "Me esfuerzo por actuar conforme a principios racionales, en armonía con la naturaleza",
        "Pienso que cada uno debe enfrentarse a las injusticias según sus propios principios, sin seguir normas impuestas",
        "Creo que es una oportunidad para buscar un propósito más profundo y trascender la situación"
    ]
];
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
    if (i < 10) {
        mostrarTexto('../views/juego.html'); //aca ya se modifica el contPrincipal. OJO QUE ES ASYNC
    } else {
        mostrarTexto('../views/resultado.html');
    }
    setTimeout(() => {actualizarJuego(i);}, 1500);
    setTimeout(aparecerTexto, 2400);
}

function actualizarJuego(i){
    if (i < 10){
        document.getElementById('numeroPregunta').innerHTML = numPreg(i);
        document.getElementById('pregunta').innerHTML = preguntas[i];
        document.getElementById('respuesta').innerHTML = agregarRespuestas(i);
    } else {
        mostrarResultado();
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
    let filosofo = getFilosofoElegido();
    document.getElementById('filosofo').innerHTML = filosofo;
    agregarImagenResultados(filosofo);       
    document.getElementById('perfilResultado').innerHTML = getPerfilResultado(filosofo);
    document.getElementById('infoResultado').innerHTML = getInfoResultado(filosofo);
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