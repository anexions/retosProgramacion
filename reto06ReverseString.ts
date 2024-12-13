/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function reverse(a: string) {
  return a.split("").reverse().join("-"); //Lo convertimos en array, le damos la vuelta y lo unimos.
}

console.log(reverse("Hola"));
