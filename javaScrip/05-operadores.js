/* operadores logicos verdadero (v) falso (f)

%% and <expresion_1> y <expresion_2>

v | v = v
v | f = f
f | v = f
f | f = f


|| or El ||operador lógico OR ( ) (disyunción lógica) para un conjunto de operandos es verdadero si
 y solo si uno o más de sus operandos es verdadero <expresion 1> o <expresion 2>

v|v = v
v|f = v
f|v = v
f|f = f

! Not <expresion> no <expresion>
 
v = f 
f = v
*/

/* operadores relacionales o de comparacion

Mayor que: a > b            a es mayor que b 
Menor que: a < b            a es menor que b 
Mayor o igual que : a >= b  a es mayor o igual a b 
Menor o igual que :  a<= b  a es menor o igual a b
Igual a == b                a es igual a b
Distintos a ! = b           a es diferente de b 
operador estricito ===
operador diferente estricto  !--
*/

let numero1 = "22";
let numero2 = "15"; 

console.log ( "mayor que:" + numero1 > numero2);

console.log ( "menor que:" + numero1 < numero2);

console.log ("menor o igual que:" + numero1 <= numero2);

console.log ( "mayor o igual que:" + numero1 >= numero2);

console.log ("igual que:" + numero1 == numero2);
                                                          
console.log ("distintos:" + numero1 != numero2);