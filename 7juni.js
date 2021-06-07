let primeraCadena = "Dabale arroz la zorra al abad";
let segundaCadena = "El email de Alicia es alicia@demo.com";
console.log('Primera Cadena: ' + primeraCadena );
console.log('Segunda Cadena: ' + segundaCadena );

// Calcular su longitud
let longitudPrimeraCadena = primeraCadena.length;
let longitudSegundaCadena = segundaCadena.length;
console.log('longitud primera cadena: ' + longitudPrimeraCadena);
console.log('longitud segunda cadena: ' + longitudSegundaCadena);

//Indicar el carácter de la posición  5
let caracterPosicion5PrimeraCadena = primeraCadena.charAt(4);
let caracterPosicion5SegundaCadena = segundaCadena.charAt(4);
console.log('caracter en la posicion 5 (primera cadena): ' + caracterPosicion5PrimeraCadena);
console.log('caracter en la posicion 5 (segunda cadena): ' + caracterPosicion5SegundaCadena);

//Devolver el substring de los 5 primeros caracteres.
let substringPrimeraCadena = primeraCadena.slice(0, 5);
let substringSegundaCadena = segundaCadena.slice(0, 5);
console.log('substring primera cadena: ' + substringPrimeraCadena);
console.log('substring segunda cadena: ' + substringSegundaCadena);

//Devolver el.substring de los 5 últimos caracteres.
let ultimoSubstringPrimeraCadena = primeraCadena.slice(primeraCadena.length - 6, primeraCadena.length);
let ultimoSubstringSegundaCadena = segundaCadena.slice(segundaCadena.length - 6, segundaCadena.length);
console.log('ultimo substring primera cadena: ' + ultimoSubstringPrimeraCadena);
console.log('ultimo substring segunda cadena: ' + ultimoSubstringSegundaCadena);

//Indicar si contiene algún carácter tipo arroba.
if(primeraCadena.includes('@')){
    console.log('La primera cadena SI tiene @');
}else{
    console.log('La primera cadena NO tiene @');
}

if(segundaCadena.includes('@')){
    console.log('La segunda cadena SI tiene @');
}else{
    console.log('La segunda cadena NO tiene @');
}


// Funciones y el imput a partir de aqui :)
// Hacer una página que introduzca un string en un campo de texto y haga estas funciones.

function enviarDatos(){
    let respuestaCadena = document.getElementById('respuestaCadena');
    let cadenaDeTexto = document.getElementById('cadena').value;
    // Calcular su longitud
    respuestaCadena.innerHTML = "La longitud de la cadena es: " + cadenaDeTexto.length + '<br>';
    // Indicar el carácter de la posición  5
    respuestaCadena.innerHTML += "El caracter en la posicion (5) : " + cadenaDeTexto.charAt(4) + '<br>';
    // Devolver el substring de los 5 primeros caracteres.
    respuestaCadena.innerHTML += "El substring de los primeros (5) caracteres : " + cadenaDeTexto.slice(0, 5) + '<br>';
    // Devolver el.substring de los 5 últimos caracteres.
    respuestaCadena.innerHTML += "El substring de los ultimos (5) caracteres : " + cadenaDeTexto.slice(cadenaDeTexto.length - 5, cadenaDeTexto.length) + '<br>';
    // Indicar si contiene algún carácter tipo arroba
    if(cadenaDeTexto.includes('@')){
        respuestaCadena.innerHTML += "SI contiene @ <br>";
    }else{
        respuestaCadena.innerHTML += "NO contiene @ <br>";
    }
    //Vamos a escribir el contenido de un string con un carácter separador ("-") entre cada uno de los caracteres del string.
    let caracteres = cadenaDeTexto.split("");
    let cadenaTemporal = caracteres.join("-")
    respuestaCadena.innerHTML += cadenaTemporal + "<br>";

}

 /**
     * 
     * 
     * 
     * 
     * Ejercicio 4:
     */
    let cadena4 = "Hora de inicio de la reunión;04/06/2021 8:57;Título de la reunión;General;Nombre completo;Hora de Unión;Hora de salida;Duración;Correo electrónico;Rol";
    console.log("EJERCICIO 4:");
    console.log(cadena4);
    console.log("El primer (;) esta en la posicion: " + cadena4.indexOf(";"));
    console.log("El ultimo (;) esta en la posicion: " + cadena4.lastIndexOf(";"));

    let array 
