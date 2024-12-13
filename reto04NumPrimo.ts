/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function esPrimo(n: number) {
  if (n <= 1) return false; // Los números <= 1 no son primos

  // Iteramos desde 2 hasta la raíz cuadrada de n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false; // Si encontramos un divisor, no es primo
    }
  }

  return true; // Si no encontramos divisores, es primo
}

// Ejemplo de uso
console.log(esPrimo(2));  // true
console.log(esPrimo(4));  // false
console.log(esPrimo(13)); // true
console.log(esPrimo(25)); // false

