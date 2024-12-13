/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function anagrama(a: string, b: string) {
  //eliminamos los espacios y convertimos en minuscula todo.

  a = a.replace(/\s+/g, "").toLowerCase();
  b = b.replace(/\s+/g, "").toLowerCase();

  // creamos dos nuevas variables para almacenar las palabras
  //.split(''): Convierte el string en un array de caracteres.
  //.sort(): Ordena las letras alfabéticamente.
  //.join(''): Vuelve a unir las letras en un string.

  const aTransformada = a.split("").sort().join("");
  const bTransformada = b.split("").sort().join("");

  //comparamos las cadenas.

  return aTransformada === bTransformada;
}

console.log(anagrama("rosa", "asor"));
console.log(anagrama("salchicha", "amor"));
