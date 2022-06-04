let palabraLenguaje;
let cant_errores = 0;
let cant_aciertos = 0;

const palabras = [
  "python",
  "javascript",
  "ruby",
  "java",
  "c",
  "kotlin",
  "go",
  "php",
  "swift",
  "r",
  "typescript",
];
const btn = id("boton-iniciar");
const imagen = id("imagen");
const btn_letras = document.querySelectorAll("#letras button");

/* click en iniciar juego */
btn.addEventListener("click", iniciar);

function iniciar(event) {
  alert("Una pista... las palabras a adivinar son lenguajes de programación.");
  id("resultado").innerHTML = "";
  imagen.src = "img/img0.jpg";
  btn.disabled = true;
  cant_errores = 0;
  cant_aciertos = 0;

  const parrafo = id("palabra-oculta");
  parrafo.innerHTML = "";

  const cantidadDePalabras = palabras.length;
  const valorRandom = obtenerRandom(0, cantidadDePalabras);

  palabraLenguaje = palabras[valorRandom];
  console.log(palabraLenguaje);
  const cant_letras = palabraLenguaje.length;

  for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].disabled = false;
  }

  for (let i = 0; i < cant_letras; i++) {
    const span = document.createElement("span");
    parrafo.appendChild(span);
  }
}

/* click de adivinar letra */
for (let i = 0; i < btn_letras.length; i++) {
  btn_letras[i].addEventListener("click", click_letras);
}

function click_letras(event) {
  const spans = document.querySelectorAll("#palabra-oculta span");
  const button = event.target; //cuál de todas las letras, llamó a la función.
  button.disabled = true;

  const letra = button.innerHTML.toLowerCase();
  const palabra = palabraLenguaje.toLowerCase(); // .toUpperCase( )

  let acerto = false;
  for (let i = 0; i < palabra.length; i++) {
    if (letra == palabra[i]) {
      //la variable i es la posición de la letra en la palabra.
      //que coincide con el span al que tenemos que mostarle esta letra...
      spans[i].innerHTML = letra;
      cant_aciertos++;
      acerto = true;
    }
  }

  if (acerto == false) {
    cant_errores++;
    const source = `img/img${cant_errores}.jpg`;
    imagen.src = source;
  }

  if (cant_errores == 7) {
    id("resultado").innerHTML = "Perdiste, la palabra era " + palabraLenguaje;
    game_over();
  } else if (cant_aciertos == palabraLenguaje.length) {
    id("resultado").innerHTML = "Ganaste, felicitaciones!!";
    game_over();
  }
  console.log(
    "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acerto
  );
}

/* fin del juego */
function game_over() {
  for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].disabled = true;
  }

  btn.disabled = false;
}

game_over();
