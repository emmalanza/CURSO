let tecla = window.prompt();

// if (tecla === "a"){
//     console.log("Moverse a la izquierda");
// }
// else if (tecla ==="w") {
//     console.log("Moverse hacia arriba"); 
// }
// else if (tecla === "s") {
//     console.log("Moverse hacia abajo");
// }
// else if (tecla === "d") {
//     console.log("Moverse a la derecha");
// }
// else {
//     console.log("Tecla no reconocida ❌");
// }

switch (tecla) {
    case "a":
        console.log("Moverse a la izquierda");
        break;
    case "w": 
        console.log("Moverse hacia arriba");
        break;
    case "s": 
        console.log("Moverse hacia abajo");
        break;
    case "d": 
        console.log("Moverse a la derecha");
        break;
    default:
        console.log("Tecla no reconocida ❌"); 
        break;
}