// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Be my only one", time: 4 },
  { text: "El nombre por el cual quiero llamarte", time: 8 },
  { text: "Agarrémonos de las manos", time: 15 },
  { text: "Y caminemos juntos", time: 18 },
  { text: "En una noche lluviosa, en nuestros días solitarios", time: 26 },
  { text: "Coloréame con tu luz brillante", time: 33 },
  { text: "Daré lo mejor de mí", time: 38 },
  { text: "Si me prometes que estaremos juntos", time: 42 },
  { text: "Now I believe", time: 48 },
  { text: "La, la, la, la, la, canto una canción", time: 51 },
  { text: "Yo te estuve buscando, buscando, buscando", time: 55 },
  { text: "My, oh my, oh my, oh, mi renegonaaa", time: 62 },
  { text: "Be my only love", time: 68 },
  { text: "Cada paso que demos", time: 74 },
  { text: "Se sentirá tan bien, se sentirá como si estuviéramos bailando", time: 79 },
  { text: "My, oh my, oh my, oh, mi niña hermosa", time: 84 },
  { text: "My only love", time: 89 },
  { text: "Be my only one", time: 95 },
  { text: "No va con la cancion pero queria decirte q te extraño", time: 101 },
  { text: "Fueron días q dormí tarde para q sea más cortos", time: 105 },
  { text: "y así poderte ver lo más pronto posible", time: 109 },
  { text: "para estar a tu lado otra vez y decirte lo mucho q te extrañé", time: 113 },
  { text: "me dan ganas de decirtelo pero veo q mjr la pasas allá", time: 117 },
  { text: "y la vrd no quiero ser un problema en tus decisiones", time: 121 },
  { text: "prefiero q disfrutes de este tiempo y q pienses en cosas buenas", time: 125 },
  { text: "te amo y nunca dejaré de hacerlo aunque me lo pidas", time: 131 },
  { text: "si t quieres quedar ahí unos días más, ntp por mi", time: 134 },
  { text: "Te quiero mucho mailov, solo deseo besarte y abrazarte una vez más", time: 137 },
  { text: "Now I belive", time: 141 },
  { text: "La, la, la, la, la, canto una canción", time: 144 },
  { text: "Yo te estuve buscando, buscando, buscando", time: 149 },
  { text: "Meu, oh meu, oh, meu xodó", time: 154 },
  { text: "My only love", time: 160 },
  { text: "Mi único amor, cada vez que te veo", time: 165 },
  { text: "Quiero apoyarme en ti, quiero tenerte", time: 170 },
  { text: "Con un amor así, incluso el sueño más inmaduro", time: 176 },
  { text: "Podría hacerse realidad", time: 182 },
  { text: "Now I believe", time: 187 },
  { text: "Cada paso que demos", time: 192 },
  { text: "Se sentirá tan bien, se sentirá como si estuviéramos bailando", time: 196 },
  { text: "My, oh my, oh my, oh my love", time: 201 },
  { text: "Sé mi único y último amor, Mishh", time: 206 },
  { text: "Prdn si te hice perder el tiempo, solo q", time: 213 },
  { text: "desde q te fuiste no quise aceptarlo", time: 216 },
  { text: "no logré olvidarte por tu bn, y solo pensaba en q seguías aquí", time: 219 },
  { text: "al menos para no molestarte en tu viaje", time: 222 },
  { text: "quiero q sepas q tú siempre serás...", time: 225 },
  { text: "Mi Única/My Only One", time: 224 },
  { text: "Te amodoro", time: 235},
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);