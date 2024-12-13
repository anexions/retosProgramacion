/*
 * Crea una función que sea capaz de encriptar y desencriptar texto
 * utilizando el algoritmo de encriptación de Karaca
 * (debes buscar información sobre él).
 */

function encriptacion(texto: string) {
  let invertido = texto.split("").reverse().join("");

  let encriptado = invertido.replace(/[aeiou]/g, (vocal) => {
    switch (vocal) {
      case "a":
        return "0";
      case "e":
        return "1";
      case "i":
        return "2";
      case "o":
        return "2";
      case "u":
        return "3";

      default:
        return vocal;
    }
  });

  return encriptado;
}

console.log(encriptacion("Los humanos no merecen tanto poder."));
