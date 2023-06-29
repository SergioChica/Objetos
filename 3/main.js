/* 3. Dado el objeto = {password: "admin30905", rol: "admin", edad: 20} cambie el valor de la clave password por
"user_7833", el valor de la clave rol por "user", el valor de la clave edad por 34. Imprima todo el objeto para
verificar los cambios */

let objeto = {password: "admin30905", rol: "admin", edad: 20}

objeto.password = "user_7833";
objeto.rol = "user";
objeto.edad = "34";

for (let clave in objeto) {
    console.log("Clave", clave);
    console.log("Valor", objeto[clave]);
    console.log("___________");
}