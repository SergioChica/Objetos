/* 2. Cree un objeto vacío, p.e. let objeto = {} y agregue tres pares clave-valor. Imprima todo el objeto para verificar
que
se han agregado las nuevos pares clave-valor */

let objeto = {}
objeto[1] = "uno";
objeto[2] = "dos";
objeto[3] = "tres";

for (clave in objeto) {
    console.log("Clave", clave);
    console.log("Valor", objeto[clave]);
    console.log("____________");
}