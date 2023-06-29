/* 6. Dado el siguiente objeto = { numeros: [45, 78, 22, 89, 8] } recorrer el valor de la clave números. */

let objeto = { numeros: [45, 78, 22, 89, 8] }

for (let clave in objeto) {
    console.log("Clave", clave);
    console.log("Valor", objeto[clave]);
}