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

// function getSqrt(num){
//     num = parseInt(num);
//     if(num<0){
//         console.log("No se puede calcular la raíz cuadrada de un número negativo.");
//     }else {
//         return Math.sqrt(num);
//     }
// }

// var num = window.prompt("Introduzca un número para saber su raíz cuadrada:");
// console.log(`La raíz cuadrada de ${num} es ${getSqrt(num)}`); 


//Ejercicio 10

// function esBisiesto(year){
//     if(year % 4 === 0|| (year % 100 === 0 && year % 400 === 400)) {
//         return true;
//     }else {
//         return false;
//     }
// }


//Ejercicio 17
//funcion que desglosa la cantidad que le pasas en billetes, monedas de euro y centimos de mayor a menor
function desglosarCantidad(cant){
    cant = cant.toString(); //pasamos la cantidad a string para separar la parte entera de la decimal
    let entero = "";
    let decimal = "";

    let  br = 0; //variable donde guardo en que posicion esta la coma para calcular la parte decimal
    
    let billetes = [500, 200, 100, 50, 20, 10, 5];
    let euros = [2, 1];
    let cents = [50, 20, 10, 5, 2, 1];

    //separo la parte entera
    for (let i = 0; i < cant.length; i++) {
        if(cant[i] === ',' || cant[i] === '.'){
            br = i+1;
            break;
        }else {
            entero = entero + cant[i];
        }
    } 

    //separo la parte decimal
    if(br>0){
        for (let i = br; i < cant.length; i++) {
           decimal = decimal + cant[i];
        }
    }

    //paso las cantidades en string a numero para hacer operaciones matematicas
    decimal = parseInt(decimal);
    entero = parseInt(entero);
    
    //aqui compruebo si hay decimales para mostrar un mensaje u otro :)
    if(isNaN(decimal)){
        console.log("Desglose de", entero, "€");
    }else{

        console.log("Desglose de", entero, "€ y", decimal, "céntimos");
    }

    //calculamos cuantos billetes de cada son
    for (let i = 0; i < billetes.length; i++) {
        //console.log("Division del entero", entero, "entre", billetes[i], "=", entero/billetes[i]);
        if((entero / billetes[i]) >= 1){
            console.log(`Billetes de ${billetes[i]} €: ${parseInt(entero / billetes[i])}`)
            entero = entero-(billetes[i] * parseInt(entero / billetes[i]));
        }
    }

    //si el valor entero es mayor que 0 despues de restar los billetes, 
    //calculamos cuantas monedas de cada son
    if (entero > 0){
        for (let i = 0; i < euros.length; i++) {
            //console.log("Division del entero", entero, "entre", euros[i], "=", entero/euros[i]);
            if((entero / euros[i]) >= 1){
                console.log(`Monedas de ${euros[i]} €: ${parseInt(entero / euros[i])}`)
                entero = entero- (euros[i] * parseInt(entero / euros[i]));
            }
        }
    }

    //calculamos cuantos centimos de cada son en caso de que haya
    if(isNaN(decimal)){
        for (let i = 0; i < cents.length; i++) {
    
            if((decimal / cents[i]) >= 1){
                console.log(`Monedas de ${cents[i]} céntimos: ${parseInt(decimal / cents[i])}`)
                decimal = decimal- (cents[i] * parseInt(decimal/cents[i]));
            }
        }
    }
}

desglosarCantidad(window.prompt("Ingresa un importe:"));
