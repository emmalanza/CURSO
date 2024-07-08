//Ejercicio 1

// function sayHi(firstName="", secondName="", thirdName="", gender = ""){

//     if(gender === "masculino") {
//         console.log(`Hola señor ${firstName} ${secondName} ${thirdName}`);
//     }else if (gender === "femenino"){
//         console.log(`Hola señora ${firstName} ${secondName} ${thirdName}`);
//     }else{
//         console.log(`Hola ${firstName} ${secondName} ${thirdName}`);
//     }
// }

// var fullName = window.prompt("Introduzca su nombre y apellidos:").split(" ");
// var gender = window.prompt("Introduzca su género:").toLowerCase();

// sayHi(fullName[0], fullName[1], fullName[2], gender);


//Ejercicio 4

// function getDouble(num){
//     num = num * 2;
//     return num;
// }

// var num = window.prompt("Introduzca un número y se le devolverá el doble:");
// console.log(getDouble(num));


//Ejercicio 5

// function getPerimeter(side){
//     let perimeter = 4 * parseInt(side);
//     return perimeter;
// }

// var side = window.prompt("Ingrese el lado del cuadrado:");
// console.log(`El perimetro del cuadrado es: ${getPerimeter(side)}`);


//Ejercicio 6

// const pi = 3.1416;
// function getArea(radio) {
//     radio = parseInt(radio);
//     let area = radio * radio * pi;
//     console.log(`El area de la circunferencia es: ${area}`);
// }

// getArea(38);


//Ejercicio 7

// function isPositive(num){
//     num = parseInt(num);
//     if(num < 0){
//         return false;
//     }else {
//         return true;
//     }
// }

// var num = window.prompt("Ingrese un número para saber si es positivo o negativo:");

// if(isPositive(num)){
//     console.log("El número es positivo 👍🏿");
// }else {
//     console.log("El número es negativo 👎🏿");
// }


//Ejercicio 9

function getSqrt(num){
    num = parseInt(num);
    if(num<0){
        console.log("No se puede calcular la raíz cuadrada de un número negativo.");
    }else {
        return Math.sqrt(num);
    }
}

var num = window.prompt("Introduzca un número para saber su raíz cuadrada:");
console.log(`La raíz cuadrada de ${num} es ${getSqrt(num)}`); 