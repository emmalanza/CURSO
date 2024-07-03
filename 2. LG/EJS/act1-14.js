// for (let i = 10; i >= 0; i = i-1) {
//     console.log(i);
// }


// let num = window.prompt("Introduce un número y te sale su tabla de multiplicar")

// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} es igual a: ${num*i}`);
// }


// function factorialize(n){
//     if (n < 0) {
//         console.log("El factorial no está definido para números negativos.");
//     }else if (n===0 ||  n===1) {
//         return 1;
//     }else {
//         let factorial = 1;

//         for (let i = n; i > 1; i-- ){
//             //console.log(`Factorial = i ${i} * f ${factorial}`);
//             factorial *= i;
//             //console.log(`f ${factorial}`);
//         }

//         return factorial;
//     }
// }
// let num = window.prompt("Introduce un número para averiguar su factorial:");
// console.log(`El factorial de ${num} es ${factorialize(num)}`);


// const dni = window.prompt("Intruzcaa un DNI:");
// const dni = "71777342T";
// let nums; let letra;

// for (let i = 0; i < dni.length; i++) {
//     if (i < 8){
//         nums = nums + dni[i];
//     }
//     else {
//         letra = dni[i];
//     }
// }
// console.log("Los números del DNI son:", nums);
// console.log(nums.length);
// console.log("La letra del dni es: ", letra);
// console.log(letra.length);

let ultimo = 1; let penultimo = 1;
let fibo= `${ultimo} ${penultimo}`;

for (let i = 1; i < 5; i++) {

    ultimo = ultimo + penultimo;
    console.log(`ultimo ${ultimo} penultimo ${penultimo}`);   
    console.log(`Secuencia: ${fibo} ${ultimo} 🍕`);
    fibo = fibo + " " + ultimo;
    penultimo = ultimo - penultimo;
    console.log("ult ", ultimo, "penult", penultimo );
}