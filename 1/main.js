/* 1. Cree un objeto donde se almacenen los productos de un supermercado con su respectivo precio. Los
productos son:
Papa, Arroz, Lentejas, Aceite. Luego imprima cada uno de los precios almacenados en el objeto anterior con su
respectivo producto. */

let supermercado = { "papa": 2000, "arroz": 5000, "lentejas": 2500, "aceite": 10000 }

for ( clave in supermercado) {
    console.log("clave", clave);
    console.log("valor", supermercado[clave]);
    console.log("--------");
    }