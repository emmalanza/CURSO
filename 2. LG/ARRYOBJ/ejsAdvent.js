//PRIMER REGALO REPETIDO 

// const gifts1 = [2, 1, 3, 5, 3, 2];
// function findFirstRepeated(gifts) {
//     const mySet = new Set();
//     for (let i = 0; i < gifts.length; i++) {
//         if (mySet.has(gifts[i])) {
//             return gifts[i];
//         }
//         mySet.add(gifts[i]);
//     }
//     return -1;
// }
// console.log(findFirstRepeated(gifts2)); 


//PONEMOS EN MARCHA LA FABRICA
// const gifts = ['tren', 'oso', 'pelota'];
// const materials = 'tronesa';
// function manufacture (gifts, materials) {

//     let copyOfGifts = [].concat(gifts); 
//     let canManufacture = [];

//     for (let i = 0; i < copyOfGifts.length; i++) {

//         for (char1 of copyOfGifts[i]){
//             for (char2 of materials){
//                 if(char1 === char2){
//                     copyOfGifts[i] = copyOfGifts[i].replace(char2, "");
//                 }
//             }
//             if(copyOfGifts[i] === ""){
//                 canManufacture.push(gifts[i]);
//             }
//         }   
//     }
//     console.log(canManufacture);
//     return canManufacture;

// }
// manufacture(gifts, materials);


//EL ELFO TRAVIESO
// const original = 'stepfor'
// const modified = 'stepor'
// function findNaughtyStep(original, modified) {
      
//     const maxLength = Math.max(original.length, modified.length);
    
//     for (let i = 0; i < maxLength; i++) {

//         if (original[i] !== modified[i]) {

//             if(original.length === maxLength){
//                 return original[i];
//             }

//             return modified[i];
//         }
//     }
    
//     return '';

//   }
//   console.log(findNaughtyStep(original, modified));


//DALE LA VUELTA AL PARÉNTESIS

// const message = "hola (odnum)";
// const message = "(olleh) (dlrow)!";
// const message = "sa(u(cla)atn)s (oef)";   
// function decode(message){

//     const match = message.match(/\(([^()]+)\)/);
//     console.log(match);
//     if (!match) return message;

//     const cleanedMatch = match[0].slice(1, -1).split("").reverse().join("");
//     const result = message.replace(match[0], cleanedMatch);

//     return decode(result);

// }
// console.log("Decode:", decode(message));