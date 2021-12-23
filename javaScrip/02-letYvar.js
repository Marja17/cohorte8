/*
 variables se utilizaba anteriormente, son variables globales

 variable let es una variable de contexto, sólo vive en un bloque del codigo

*/
var numero = 40;

console.log (numero);

if (true) { 
    var numero = 50 ;

    console.log (numero);
}

console. log (numero); 

var texto = "boot camp";

console.log (texto)

if (true) {
    
    let texto = "Cohorte 8";

    console.log (texto);

}

console. log (texto); 
