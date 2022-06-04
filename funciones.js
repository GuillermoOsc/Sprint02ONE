function id(str) {
  return document.getElementById(str);
}

function obtenerRandom(num_min, num_max) {
  const amplitud_valores = num_max - num_min; //valor más alto - valor más bajo del random... (7 - 0)
  const valorRandom =
    Math.floor(Math.random() * amplitud_valores) +
    num_min; /* 5 - 15 = 10 + 5 */
  return valorRandom;
}

// Funcion para añadir nuevas palabras al array palabras ============================================
