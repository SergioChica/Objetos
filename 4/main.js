/* 4. Dado el objeto = {"dos": 2, "cinco": 5, "siete": 7, "cuarenta": 40, "cincuenta": 50} recorrer el objeto y mostrar
cuáles de los valores son pares. */

let objeto = {"dos": 2, "cinco": 5, "siete": 7, "cuarenta": 40, "cincuenta": 50}

for (let clave in objeto) {
    if (objeto[clave] % 2 == 0) {
        console.log("Clave", clave);
        console.log("Valor", objeto[clave]);
        console.log("______________");
    }
}