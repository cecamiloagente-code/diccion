const EXERCISES = {
  trabalenguas: {
    title: "Precisión con trabalenguas",
    focus: "Marca cada consonante sin correr. Prioriza claridad antes que velocidad.",
    warmup: "Relaja mandíbula, labios y lengua. Repite tres veces: la, le, li, lo, lu.",
    label: "claridad",
    items: [
      "Tres tristes tigres tragan trigo en un trigal, y entre trigo y trastos trabajan sin titubear.",
      "Pablito clavó un clavito pequeño; ¿qué clavito pequeño clavó Pablito?",
      "Compré pocas copas, pocas copas compré, y como pocas copas compré, pocas copas pagué.",
      "El cielo está enladrillado; quien lo desenladrille, buen desenladrillador será.",
    ],
  },
  vocales: {
    title: "Vocales abiertas",
    focus: "Sostén las vocales con aire estable y abre más de lo habitual.",
    warmup: "Pronuncia a, e, i, o, u con una mano en el abdomen para sentir el apoyo.",
    label: "apertura",
    items: [
      "Ana ama la mañana clara; Elena eleva esa escena serena; Iris insiste, Olga observa, Úrsula usa su voz.",
      "La casa clara guarda palabras largas, pausadas y amables para hablar con calma.",
      "Aire amplio, eco entero, idea limpia, ola honda, último impulso.",
    ],
  },
  consonantes: {
    title: "Consonantes difíciles",
    focus: "Ataca con suavidad erre, ese, de, te y pe. Evita comerte la última sílaba.",
    warmup: "Haz vibrar labios con aire, luego alterna: tra, dra, pra, bra, gra.",
    label: "precisión",
    items: [
      "Rosa recorre rápido la carretera, pero reduce el ritmo para pronunciar cada palabra.",
      "Susana sostiene seis sesiones semanales sin silbar la ese ni cerrar la sonrisa.",
      "Pedro prepara propuestas prudentes, pregunta primero y pronuncia perfecto el principio.",
    ],
  },
  lectura: {
    title: "Lectura expresiva",
    focus: "Usa pausas intencionales. Cambia énfasis para que las ideas tengan dirección.",
    warmup: "Lee una frase neutral, luego repítela con sorpresa, seguridad y calma.",
    label: "expresión",
    items: [
      "Hablar bien no significa hablar rápido. Significa elegir el ritmo adecuado para que cada idea llegue completa.",
      "Cuando una frase termina, permite que respire. Esa pausa breve ayuda a que la siguiente idea tenga fuerza.",
      "Una voz clara nace de escuchar con atención, ordenar el pensamiento y pronunciar sin tensión.",
    ],
  },
  respiracion: {
    title: "Respiración y pausa",
    focus: "Respira antes de cada grupo de sentido y termina las frases con aire suficiente.",
    warmup: "Inhala por nariz cuatro tiempos, pausa dos, exhala por boca seis.",
    label: "pausa",
    items: [
      "Respiro antes de hablar. Mantengo el aire. Termino la frase. Pauso. Continúo con claridad.",
      "Primero observo. Luego ordeno la idea. Después pronuncio con calma, firmeza y precisión.",
      "Mi voz avanza con intención: una idea, una pausa, una frase completa.",
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
