/* 
condicionales se utilizan para tomar decisiones dentro de nuesto programa 
*/  
/*const edad = parseInt ( prompt ("ingresa tu edad"));

if (edad >=18) {
    document.write ("eres mayor de edad, puedes votar ");
}
    
    else  {
        document.write ("eres menor de esdad, no puedes votar");
    }*/

    const edad = parseInt ( prompt ("ingresa tu edad"));


    if (edad >=18 && edad <30) {
        document.write ("Eres un joven");
    }

    else if (edad >= 30 && edad <50) {
        document.write ("Eres un adulto")
    }

    else if ( edad >= 50 && edad <=80 ) {
        document.write ("Eres un adulto mayor")
    }
    else if  (edad >= 10 && edad <18 ){
        document.write ("Eres un puberto")
    }

    else if  (edad >= 80 && edad <= 99){
       
        document.write ("Eres un anciano")
}

else if ( edad >= 100 ){ 
        document.write ("Error, me estas chamaqueando, no puedes vivir tanto")
    } 
        
        else {
            document.write ("Eres un niñe");
    }