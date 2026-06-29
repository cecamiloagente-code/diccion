const EXERCISES = {
  trabalenguas: {
    title: "Precisión con trabalenguas",
    focus: "Marca cada consonante sin correr. Prioriza claridad antes que velocidad.",
    warmup: "Relaja mandíbula, labios y lengua. Repite tres veces: la, le, li, lo, lu.",
    label: "claridad",
    items: [
      "Tres tristes tigres tragan trigo en un trigal, mientras otros tres tigres tropiezan entre trastos, troncos torcidos y treinta trenzas de trigo.",
      "Pablito clavó un clavito pequeño en la tabla de Pablo, pero Pablo preguntó preocupado qué clavito tan pequeño había clavado Pablito.",
      "Compré pocas copas, pocas copas compré, y como pocas copas compré, con calma conté cada copa antes de colocarlas cuidadosamente.",
      "El cielo está enladrillado; quien lo desenladrille con destreza y paciencia, buen desenladrillador será cuando termine la tarde.",
      "Rápido ruedan las ruedas rojas del carro, pero Rodrigo reduce la marcha para pronunciar rueda, ruta, rumbo y regreso sin atropellarse.",
      "La bruja Bruna borda broches brillantes, barre briznas bajo el banco y brinda brebajes breves a Bruno antes del desayuno.",
      "Trina trajo tres trajes trenzados, treinta trapos transparentes y un trompo travieso que tropezó contra tres tronos de trapo.",
      "Clara clasificó claveles claros, clavos clavados y clips plateados, mientras Claudio calculaba cuántos claveles cabían en cada caja.",
      "Graciela graba grandes grabaciones, grita con gracia, gradúa su garganta y agradece al grupo por guardar silencio durante la grabación.",
      "Prudencio prepara panes, pruebas, platos profundos y preguntas precisas, pero primero pronuncia despacio cada palabra para practicar precisión.",
      "El perro de Rita corre por la carretera, recoge ramas raras y regresa radiante cuando Roberto repite correctamente la erre.",
      "Si seis sastres suizos cosen seis sacos suaves, Susana separa sesenta cintas sin silbar la ese ni cerrar la sonrisa.",
      "Chucho escucha chasquidos, chistes y choques chiquitos, mientras Chela choca cucharas chatas contra ocho charolas de chocolate.",
      "Ñoño soñó con ñames, piñatas y montañas pequeñas, y al despertar enseñó a Toño a pronunciar mañana sin apretar la lengua.",
      "Teresa trae tortillas tostadas, tazas tibias y tomates tiernos, pero tartamudea si trata de terminar todo demasiado temprano.",
      "Diego dijo diez discursos difíciles, dudó durante dos segundos y después dominó cada detalle con dientes, lengua y decisión.",
      "La flauta de Flor forma frases fluidas, flota frente al farol y florece cuando Fabiola sopla firme sin forzar.",
      "Braulio brinda bravas bromas breves, brinca sobre un borde brillante y bloquea la brisa con un brazo bien abierto.",
      "Crece el crisantemo cruzando cristales claros, mientras Cristina critica con cuidado cada cruce de cr, cra, cre, cri, cro y cru.",
      "El dragón dorado duerme derecho, despierta de día y declara despacio que dominar la dicción demanda disciplina diaria.",
      "Plácido planta plátanos plateados, plancha pliegues prolijos y aplica plena paciencia para pronunciar pla, ple, pli, plo y plu.",
      "Gustavo guardó guantes grandes, guirnaldas grises y gotas gruesas, y luego guió al grupo con una garganta relajada.",
      "Jorge junta jarras, joyas, juncos y jabón, y jamás deja de ajustar la mandíbula antes de jugar con la jota.",
      "El rey Enrique arregla relojes raros, recorre rincones rocosos y repite rico, raro, rápido y rumbo hasta lograr claridad.",
      "Quico quiso quince quesos pequeños, cuatro quenas quietas y una esquina tranquila para practicar que, qui, cua, cue y cui.",
    ],
  },
  vocales: {
    title: "Vocales abiertas",
    focus: "Sostén las vocales con aire estable y abre más de lo habitual.",
    warmup: "Pronuncia a, e, i, o, u con una mano en el abdomen para sentir el apoyo.",
    label: "apertura",
    items: [
      "Ana ama la mañana clara; Elena eleva esa escena serena; Iris insiste, Olga observa y Úrsula usa su voz con amplitud.",
      "La casa clara guarda palabras largas, pausadas y amables para hablar con calma, abrir cada vocal y sostener el aire.",
      "Aire amplio, eco entero, idea limpia, ola honda y último impulso forman una secuencia para abrir la boca sin tensión.",
      "Amalia canta al alba, levanta la cara, relaja la garganta y deja que cada vocal salga amplia, estable y luminosa.",
      "Elena espera en el enorme escenario, ensaya lentamente el cierre de cada frase y evita esconder la e entre los dientes.",
      "Irene inicia ideas íntimas, ilumina imágenes invisibles y insiste en pronunciar la i con sonrisa ligera y mandíbula tranquila.",
      "Olga observa horizontes hondos, ordena oraciones redondas y ofrece una voz sonora que no se queda atrapada en la boca.",
      "Úrsula usa un susurro útil, sube un último impulso y une vocales profundas con una respiración uniforme y cómoda.",
      "Abrir la a ayuda a proyectar palabras claras, agradables y largas cuando la frase necesita avanzar sin perder naturalidad.",
      "Elevar la e exige equilibrio entre lengua, labios y dientes, especialmente en enunciados extensos que demandan energía constante.",
      "Insistir en la i mejora la nitidez de ideas difíciles, invitaciones íntimas y instrucciones importantes durante una conversación.",
      "Ordenar la o permite redondear sonidos hondos, sostener tonos moderados y otorgar peso a cada oración expresiva.",
      "Unir la u con aire suficiente ayuda a pronunciar futuros, murmullos, dudas y puntos finales sin apagar la voz.",
      "Mariana prepara una larga narración, alarga las vocales necesarias y marca cada pausa para que nadie pierda el mensaje.",
      "Ezequiel lee textos extensos, elige un ritmo sereno y permite que la e conserve presencia desde el inicio hasta el cierre.",
      "Isabela imagina islas iluminadas, inicia una historia íntima y articula cada sílaba sin apretar labios ni lengua.",
      "Octavio ordena objetos redondos, observa tonos oscuros y pronuncia oraciones con una o abierta, clara y sostenida.",
      "Ubaldo utiliza una útil rutina, une un murmullo suave con volumen suficiente y cuida que la u no desaparezca.",
      "Cada mañana, la voz avanza más clara cuando la boca abre espacio, el aire acompaña y la frase termina completa.",
      "En esta escena serena, el hablante eleva el pecho, relaja el cuello y permite que cada vocal respire.",
      "Una idea bien pronunciada necesita aire, intención, apertura y una vocal final que no se pierda al bajar el volumen.",
      "Hablar con vocales amplias no significa exagerar siempre; significa tener espacio suficiente para que la palabra se entienda.",
      "La lectura pausada de vocales largas entrena la boca para proyectar sin gritar, sostener sin cansar y cerrar sin cortar.",
      "Cuando una frase combina a, e, i, o y u, conviene recorrerla despacio para notar dónde se cierra la mandíbula.",
      "Vocalizar con calma antes de una reunión mejora la expresión, ordena la respiración y reduce la tensión del rostro.",
    ],
  },
  consonantes: {
    title: "Consonantes difíciles",
    focus: "Ataca con suavidad erre, ese, de, te y pe. Evita comerte la última sílaba.",
    warmup: "Haz vibrar labios con aire, luego alterna: tra, dra, pra, bra, gra.",
    label: "precisión",
    items: [
      "Rosa recorre rápido la carretera, pero reduce el ritmo para pronunciar cada palabra, redondear la erre y terminar la frase.",
      "Susana sostiene seis sesiones semanales sin silbar la ese, sin cerrar la sonrisa y sin perder suavidad en la salida.",
      "Pedro prepara propuestas prudentes, pregunta primero y pronuncia perfecto el principio para practicar pe, pre, pro y pru.",
      "Daniel distingue datos delicados, describe decisiones difíciles y detiene la lengua justo a tiempo para marcar cada de.",
      "Tomás toma té tibio, trata temas técnicos y termina todas las palabras con una te limpia, breve y firme.",
      "Carolina corrige cartas cortas, calcula costos concretos y coloca cada ca, que, qui, co y cu con precisión.",
      "Beatriz busca buenos balances, brinda bases breves y baja la barbilla para no borrar la be al final.",
      "Fernando firma frases firmes, fija la mirada al frente y frena la fuerza para que la efe no se vuelva aire.",
      "Gabriel guarda grandes guías, gana seguridad gradual y golpea suavemente la ge sin endurecer la garganta.",
      "Jazmín junta juguetes, jarras y joyas, pero jamás fuerza la jota ni deja que la mandíbula se tense.",
      "Lorena lee líneas largas, libera la lengua y logra que la ele suene ligera incluso cuando la frase acelera.",
      "Mónica mueve manos moderadas, mantiene mejor memoria muscular y marca la eme sin cerrar demasiado los labios.",
      "Nicolás narra noticias nuevas, nombra números necesarios y no deja que la ene nasal apague la vocal siguiente.",
      "Patricia presenta proyectos potentes, prepara preguntas pertinentes y pronuncia cada pe con apoyo, no con presión.",
      "Ramiro repite relatos raros, rueda la erre con cuidado y regula la fuerza para no sonar rígido.",
      "Sofía separa sonidos sutiles, sostiene silencios sanos y suaviza la ese cuando la oración se vuelve extensa.",
      "Valentina vende verduras verdes, vocaliza valores variables y deja que la ve salga visible sin morder de más.",
      "Ximena examina textos exactos, explica ejemplos extensos y evita convertir la equis en un sonido confuso.",
      "Yolanda ayuda a Yolima, yergue la voz con suavidad y ya no mezcla la ye con una i débil.",
      "Zacarías organiza zonas, zapatea despacio y hace sonar la zeta con intención clara cuando el acento lo requiere.",
      "Arturo parte cartas, corta tartas y comparte datos ciertos sin comerse las consonantes finales de cada palabra.",
      "Claudia mezcla frases con br, dr, fr y tr para fortalecer la lengua sin perder naturalidad ni volumen.",
      "El director del proyecto pidió precisión, prudencia y presencia para presentar problemas prácticos ante todo el equipo.",
      "Durante la entrevista, Patricia respondió despacio, articuló preguntas complejas y dejó respirar cada consonante importante.",
      "Cuando el discurso se acelera, conviene bajar el ritmo, terminar las sílabas y volver a pronunciar desde el apoyo.",
    ],
  },
  lectura: {
    title: "Lectura expresiva",
    focus: "Usa pausas intencionales. Cambia énfasis para que las ideas tengan dirección.",
    warmup: "Lee una frase neutral, luego repítela con sorpresa, seguridad y calma.",
    label: "expresión",
    items: [
      "Hablar bien no significa hablar rápido. Significa elegir el ritmo adecuado para que cada idea llegue completa, clara y útil.",
      "Cuando una frase termina, permite que respire. Esa pausa breve ayuda a que la siguiente idea tenga fuerza y dirección.",
      "Una voz clara nace de escuchar con atención, ordenar el pensamiento y pronunciar sin tensión antes de responder.",
      "Si quieres convencer a alguien, no empieces elevando el volumen; empieza organizando la intención, la pausa y la primera palabra.",
      "Cada presentación mejora cuando el hablante mira el punto principal, respira con calma y deja que la frase avance sin prisa.",
      "La expresión oral gana profundidad cuando las palabras importantes reciben más intención, pero las palabras secundarias conservan claridad.",
      "Un mensaje breve puede sonar poderoso si el inicio es firme, el desarrollo es ordenado y el cierre queda completo.",
      "Antes de responder una pregunta difícil, respira, piensa la primera idea y pronuncia el comienzo con seguridad tranquila.",
      "Leer con expresión no es actuar de más; es permitir que el sentido de la frase guíe el tono de voz.",
      "Cuando una historia cambia de emoción, la voz puede cambiar de color sin perder naturalidad, respeto ni precisión.",
      "Una pausa bien ubicada puede aclarar una idea compleja mejor que muchas palabras dichas de manera apresurada.",
      "El oyente entiende más cuando el hablante separa ejemplos, conclusiones y advertencias con una respiración visible.",
      "Si una frase es larga, divide su sentido en grupos pequeños y pronuncia cada grupo como una unidad completa.",
      "El énfasis correcto no cae siempre en la palabra más fuerte, sino en la palabra que sostiene la intención.",
      "Una explicación técnica se vuelve cercana cuando la voz combina ritmo estable, palabras claras y pausas oportunas.",
      "Cuando leas una noticia, distingue el dato principal, la consecuencia más importante y el cierre que resume la información.",
      "Para sonar más seguro, baja un poco la velocidad, termina cada palabra y evita rellenar silencios con muletillas.",
      "La claridad aparece cuando el pensamiento tiene orden, la respiración tiene espacio y la boca termina lo que empieza.",
      "Un buen cierre no necesita gritar; necesita una última frase completa, una pausa breve y una mirada estable.",
      "Si te equivocas al leer, no corras para esconderlo; pausa, retoma desde la palabra anterior y continúa con calma.",
      "En una conversación importante, escuchar con paciencia ayuda a responder con una voz más serena, precisa y convincente.",
      "Una frase motivadora pierde fuerza si se dice sin pausas, sin dirección y sin cuidar la pronunciación de los finales.",
      "Para narrar una experiencia personal, alterna detalles concretos con pausas pequeñas para que la audiencia imagine la escena.",
      "Cuando expliques una decisión, separa contexto, motivo y acción; así tu voz acompaña el orden de tus ideas.",
      "La práctica diaria convierte una voz tensa en una voz disponible, expresiva y capaz de sostener conversaciones exigentes.",
    ],
  },
  respiracion: {
    title: "Respiración y pausa",
    focus: "Respira antes de cada grupo de sentido y termina las frases con aire suficiente.",
    warmup: "Inhala por nariz cuatro tiempos, pausa dos, exhala por boca seis.",
    label: "pausa",
    items: [
      "Respiro antes de hablar. Mantengo el aire. Termino la frase. Pauso. Continúo con claridad y sin apretar la garganta.",
      "Primero observo. Luego ordeno la idea. Después pronuncio con calma, firmeza y precisión hasta cerrar el pensamiento.",
      "Mi voz avanza con intención: una idea, una pausa, una frase completa y un final que conserva energía.",
      "Inhalo por la nariz, siento apoyo en el abdomen y comienzo la frase solo cuando el cuerpo está disponible.",
      "Cada pausa me permite recuperar aire, organizar la siguiente idea y evitar que la voz se vuelva tensa.",
      "Cuando una oración es extensa, divido el sentido en partes respirables para que el oyente pueda acompañarme.",
      "Antes de una palabra importante, hago una pausa breve y dejo que el aire sostenga la intención sin empujar.",
      "Si me quedo sin aire, bajo la velocidad, termino la palabra actual y respiro antes de continuar.",
      "La respiración tranquila reduce la prisa, mejora la dicción y ayuda a que la voz conserve presencia.",
      "Una pausa no es un vacío incómodo; es una señal que ordena el mensaje y protege la claridad.",
      "Al terminar una frase, no dejo caer la última sílaba; sostengo el aire suficiente para cerrar con precisión.",
      "Practico grupos cortos de palabras, respiro entre ellos y escucho cómo la voz se vuelve más estable.",
      "Cuando hablo frente a otros, apoyo los pies, libero los hombros y permito que la respiración guíe el ritmo.",
      "Si siento tensión en el cuello, exhalo despacio, relajo la mandíbula y vuelvo a empezar con menos fuerza.",
      "La voz no necesita presión para llegar lejos; necesita aire constante, boca disponible y pensamiento ordenado.",
      "Puedo leer una frase larga sin perder claridad si respiro antes, marco pausas y mantengo el apoyo.",
      "Cada exhalación controlada me ayuda a pronunciar finales de palabra que antes se perdían por falta de aire.",
      "Durante una explicación, uso pausas para separar causas, ejemplos y resultados sin interrumpir la continuidad del mensaje.",
      "La calma de la respiración se escucha en la voz cuando las palabras aparecen completas y sin urgencia.",
      "Si una emoción acelera mi habla, vuelvo al aire, bajo el ritmo y permito que la frase respire.",
      "Una buena pausa antes de responder demuestra control, ayuda a pensar y evita que la voz salga comprimida.",
      "Cuando practico respiración, no busco llenar el pecho de tensión, sino permitir que el aire entre cómodo.",
      "La frase termina mejor cuando la exhalación acompaña hasta el último sonido y no se corta a mitad.",
      "Pausar después de una idea importante permite que el oyente procese el contenido y que mi voz descanse.",
      "Respirar, pronunciar y pausar son tres acciones sencillas que, repetidas con atención, transforman la expresión oral.",
    ],
  },
};

const state = {
  activeType: "trabalenguas",
  activeText: "",
  timer: null,
  remainingSeconds: 180,
  startedAt: null,
  sessionSeconds: Number(localStorage.getItem("diccionSessionSeconds") || 0),
  sessionCount: Number(localStorage.getItem("diccionSessionCount") || 0),
  recognition: null,
  isListening: false,
  recorder: null,
  stream: null,
  chunks: [],
};

const elements = {
  exerciseType: document.querySelector("#exerciseType"),
  duration: document.querySelector("#duration"),
  speed: document.querySelector("#speed"),
  speedOutput: document.querySelector("#speedOutput"),
  paceLabel: document.querySelector("#paceLabel"),
  focusLabel: document.querySelector("#focusLabel"),
  newExercise: document.querySelector("#newExercise"),
  startTimer: document.querySelector("#startTimer"),
  resetTimer: document.querySelector("#resetTimer"),
  timerText: document.querySelector("#timerText"),
  exerciseTitle: document.querySelector("#exerciseTitle"),
  exerciseText: document.querySelector("#exerciseText"),
  focusText: document.querySelector("#focusText"),
  warmupText: document.querySelector("#warmupText"),
  sessionMinutes: document.querySelector("#sessionMinutes"),
  sessionCount: document.querySelector("#sessionCount"),
  recordButton: document.querySelector("#recordButton"),
  playback: document.querySelector("#playback"),
  recordingStatus: document.querySelector("#recordingStatus"),
  listenButton: document.querySelector("#listenButton"),
  speechSupport: document.querySelector("#speechSupport"),
  transcript: document.querySelector("#transcript"),
  scoreValue: document.querySelector("#scoreValue"),
  scoreRing: document.querySelector(".score-ring"),
  jumpToPractice: document.querySelector("#jumpToPractice"),
  quickRoutine: document.querySelector("#quickRoutine"),
};

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\wñáéíóúü\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateSessionStats() {
  elements.sessionMinutes.textContent = `${Math.floor(state.sessionSeconds / 60)} min`;
  elements.sessionCount.textContent = String(state.sessionCount);
  localStorage.setItem("diccionSessionSeconds", String(state.sessionSeconds));
  localStorage.setItem("diccionSessionCount", String(state.sessionCount));
}

function highlightTargetSounds(text, type) {
  const patterns = {
    trabalenguas: /\b(tr|gr|br|cl|cr|dr|pr|pl)\w*/gi,
    vocales: /[aeiouáéíóúü]{2,}/gi,
    consonantes: /\b\w*(rr|r|s|d|t|p)\w*\b/gi,
    lectura: /\b(pausa|idea|voz|ritmo|frase|claridad)\b/gi,
    respiracion: /\b(respiro|pausa|aire|calma|frase)\b/gi,
  };

  return text.replace(patterns[type], (match) => `<mark>${match}</mark>`);
}

function pickExercise() {
  const type = elements.exerciseType.value;
  const group = EXERCISES[type];
  const item = group.items[Math.floor(Math.random() * group.items.length)];

  state.activeType = type;
  state.activeText = item;
  elements.exerciseTitle.textContent = group.title;
  elements.exerciseText.innerHTML = highlightTargetSounds(item, type);
  elements.focusText.textContent = group.focus;
  elements.warmupText.textContent = group.warmup;
  elements.focusLabel.textContent = group.label;
  elements.transcript.textContent = "";
  elements.scoreValue.textContent = "--";
  elements.scoreRing.style.setProperty("--score", "0%");
}

function resetTimer() {
  clearInterval(state.timer);
  state.timer = null;
  state.startedAt = null;
  state.remainingSeconds = Number(elements.duration.value);
  elements.timerText.textContent = formatTime(state.remainingSeconds);
  elements.startTimer.textContent = "Iniciar";
}

function completePractice() {
  clearInterval(state.timer);
  state.timer = null;
  state.startedAt = null;
  state.sessionCount += 1;
  updateSessionStats();
  elements.startTimer.textContent = "Iniciar";
}

function startTimer() {
  if (state.timer) {
    const elapsed = Math.max(0, Math.floor((Date.now() - state.startedAt) / 1000));
    state.sessionSeconds += elapsed;
    state.remainingSeconds = Math.max(0, state.remainingSeconds - elapsed);
    updateSessionStats();
    clearInterval(state.timer);
    state.timer = null;
    state.startedAt = null;
    elements.startTimer.textContent = "Continuar";
    return;
  }

  state.startedAt = Date.now();
  elements.startTimer.textContent = "Pausar";
  state.timer = setInterval(() => {
    const elapsed = Math.max(0, Math.floor((Date.now() - state.startedAt) / 1000));
    const nextValue = Math.max(0, state.remainingSeconds - elapsed);
    elements.timerText.textContent = formatTime(nextValue);

    if (nextValue === 0) {
      state.sessionSeconds += state.remainingSeconds;
      state.remainingSeconds = 0;
      elements.timerText.textContent = "00:00";
      completePractice();
    }
  }, 250);
}

async function toggleRecording() {
  if (state.recorder?.state === "recording") {
    state.recorder.stop();
    return;
  }

  if (!window.isSecureContext) {
    elements.recordingStatus.textContent =
      "El micrófono solo funciona en una página segura. Abre la versión HTTPS publicada.";
    return;
  }

  if (!navigator.mediaDevices?.getUserMedia) {
    elements.recordingStatus.textContent =
      "Este navegador no permite grabar desde esta página. Prueba con Chrome, Edge o Safari actualizado.";
    return;
  }

  if (!window.MediaRecorder) {
    elements.recordingStatus.textContent =
      "Tu navegador permite micrófono, pero no ofrece grabación local. Usa un navegador actualizado.";
    return;
  }

  try {
    elements.recordingStatus.textContent = "Solicitando permiso del micrófono...";
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
      },
    });
    const mimeType = getSupportedAudioType();
    const recorderOptions = mimeType ? { mimeType } : undefined;

    state.chunks = [];
    state.stream = stream;
    state.recorder = new MediaRecorder(stream, recorderOptions);
    state.recorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) state.chunks.push(event.data);
    });
    state.recorder.addEventListener("stop", () => {
      const type = state.recorder.mimeType || mimeType || "audio/mp4";
      const blob = new Blob(state.chunks, { type });
      elements.playback.src = URL.createObjectURL(blob);
      state.stream?.getTracks().forEach((track) => track.stop());
      state.stream = null;
      elements.recordButton.textContent = "Grabar voz";
      elements.recordButton.classList.remove("is-active");
      elements.recordingStatus.textContent =
        "Grabación lista. Presiona reproducir y repite la frase menos clara.";
    });
    state.recorder.addEventListener("error", () => {
      state.stream?.getTracks().forEach((track) => track.stop());
      state.stream = null;
      elements.recordButton.textContent = "Grabar voz";
      elements.recordButton.classList.remove("is-active");
      elements.recordingStatus.textContent =
        "La grabación se interrumpió. Revisa permisos del micrófono y vuelve a intentar.";
    });
    state.recorder.start();
    elements.recordButton.textContent = "Detener";
    elements.recordButton.classList.add("is-active");
    elements.recordingStatus.textContent = "Grabando...";
  } catch (error) {
    state.stream?.getTracks().forEach((track) => track.stop());
    state.stream = null;
    elements.recordButton.textContent = "Grabar voz";
    elements.recordButton.classList.remove("is-active");
    elements.recordingStatus.textContent = getMicrophoneErrorMessage(error);
  }
}

function getSupportedAudioType() {
  if (typeof MediaRecorder.isTypeSupported !== "function") return "";

  const candidates = [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/mp4;codecs=mp4a.40.2",
    "audio/mp4",
    "audio/ogg;codecs=opus",
  ];

  return candidates.find((type) => MediaRecorder.isTypeSupported(type)) || "";
}

function getMicrophoneErrorMessage(error) {
  const messages = {
    NotAllowedError:
      "El navegador bloqueó el micrófono. Permite el acceso en la barra de direcciones y vuelve a intentar.",
    SecurityError:
      "El micrófono está bloqueado por seguridad. Abre la página publicada con HTTPS.",
    NotFoundError: "No se encontró un micrófono disponible en este dispositivo.",
    NotReadableError:
      "El micrófono está ocupado por otra aplicación. Cierra la otra app y vuelve a intentar.",
    OverconstrainedError:
      "El micrófono no cumple la configuración solicitada. Prueba con otro dispositivo o navegador.",
  };

  return messages[error?.name] || "No se pudo acceder al micrófono. Revisa permisos y vuelve a intentar.";
}

function similarityScore(expected, actual) {
  const expectedWords = normalizeText(expected).split(" ").filter(Boolean);
  const actualWords = new Set(normalizeText(actual).split(" ").filter(Boolean));

  if (!expectedWords.length || !actualWords.size) return 0;

  const matched = expectedWords.filter((word) => actualWords.has(word)).length;
  return Math.round((matched / expectedWords.length) * 100);
}

function setupSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    elements.speechSupport.textContent =
      "Tu navegador no ofrece escucha automática. Usa Chrome o Edge para evaluar con voz, o usa la grabadora.";
    elements.listenButton.disabled = true;
    elements.listenButton.textContent = "Escucha no disponible";
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = navigator.language?.startsWith("es") ? navigator.language : "es-CO";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.continuous = false;

  recognition.addEventListener("start", () => {
    state.isListening = true;
    elements.listenButton.textContent = "Escuchando...";
    elements.listenButton.classList.add("is-active");
    elements.speechSupport.textContent =
      "Te estoy escuchando. Lee el texto completo y espera el resultado.";
  });

  recognition.addEventListener("result", (event) => {
    const spoken = event.results[0][0].transcript;
    const score = similarityScore(state.activeText, spoken);
    elements.transcript.textContent = spoken;
    elements.scoreValue.textContent = `${score}%`;
    elements.scoreRing.style.setProperty("--score", `${score}%`);
  });

  recognition.addEventListener("end", () => {
    state.isListening = false;
    elements.listenButton.textContent = "Evaluar con voz";
    elements.listenButton.classList.remove("is-active");
  });

  recognition.addEventListener("error", (event) => {
    state.isListening = false;
    elements.listenButton.textContent = "Evaluar con voz";
    elements.listenButton.classList.remove("is-active");
    elements.speechSupport.textContent = getSpeechErrorMessage(event.error);
  });

  state.recognition = recognition;
  elements.speechSupport.textContent =
    "Presiona Evaluar con voz, permite el micrófono y lee el texto. La evaluación depende del navegador.";
}

function startSpeechRecognition() {
  if (!state.recognition) return;

  if (state.isListening) {
    state.recognition.stop();
    return;
  }

  try {
    elements.transcript.textContent = "";
    state.recognition.start();
  } catch (error) {
    elements.speechSupport.textContent =
      "La escucha ya estaba activa o el navegador la bloqueó. Espera unos segundos y vuelve a intentar.";
  }
}

function getSpeechErrorMessage(error) {
  const messages = {
    "not-allowed":
      "El navegador bloqueó el micrófono. Permite el acceso y vuelve a presionar Evaluar con voz.",
    "service-not-allowed":
      "El servicio de reconocimiento de voz está bloqueado en este navegador. Prueba con Chrome o Edge.",
    "no-speech": "No detecté voz. Acércate al micrófono y lee el texto con claridad.",
    audio: "No pude recibir audio del micrófono. Revisa que no esté ocupado por otra app.",
    network:
      "El reconocimiento de voz necesita conexión del navegador. Revisa internet y vuelve a intentar.",
    aborted: "La escucha se canceló. Presiona Evaluar con voz para intentarlo de nuevo.",
  };

  return messages[error] || "No se pudo completar la escucha. Prueba de nuevo en un lugar con menos ruido.";
}

function applySpeed() {
  const value = Number(elements.speed.value);
  elements.speedOutput.textContent = `${value} ppm`;
  elements.paceLabel.textContent = `${value} ppm`;
}

elements.exerciseType.addEventListener("change", () => {
  pickExercise();
});

elements.duration.addEventListener("change", resetTimer);
elements.speed.addEventListener("input", applySpeed);
elements.newExercise.addEventListener("click", pickExercise);
elements.startTimer.addEventListener("click", startTimer);
elements.resetTimer.addEventListener("click", resetTimer);
elements.recordButton.addEventListener("click", toggleRecording);
elements.listenButton.addEventListener("click", startSpeechRecognition);
elements.jumpToPractice.addEventListener("click", () => {
  document.querySelector("#practice").scrollIntoView({ behavior: "smooth", block: "start" });
  elements.exerciseText.focus({ preventScroll: true });
});
elements.quickRoutine.addEventListener("click", () => {
  elements.duration.value = "180";
  elements.exerciseType.value = "lectura";
  resetTimer();
  pickExercise();
  document.querySelector("#practice").scrollIntoView({ behavior: "smooth", block: "start" });
});

applySpeed();
pickExercise();
resetTimer();
setupSpeechRecognition();
updateSessionStats();
