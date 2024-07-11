console.log("Hola funciono ^^");

function getFormData(ev){

    let cantidad = 0;
    let checkedB = [];
    let checkedE = [];
    let checkedC = [];

    ev.preventDefault()
    console.log("Funcion getFormData funcionando jeje");

    cantidad = document.querySelectorAll('input[name="cantidad"]')[0].value;
    const checkedBoxes = document.querySelectorAll("input:checked");
    //console.log(checkedBoxes, cantidad);

    checkedBoxes.forEach(element => {
        console.log("value",element.value, "name", element.name);
        if(element.name === "bill"){
            checkedB.push(parseInt(element.value));
        }else if (element.name === "eu"){
            checkedE.push(parseInt(element.value));
        }else if(element.name === "cent"){
            checkedC.push(parseInt(element.value));
        }
    });

    checkedB.sort((a,b) => b-a);
    checkedE.sort((a,b) => b-a);
    checkedC.sort((a,b) => b-a);
    console.log(checkedB);
    console.log(checkedE);
    console.log(checkedC);

    desglosarCantidad(cantidad,checkedB,checkedE,checkedC);

}


function desglosarCantidad(cant, billetes, euros, cents){
    cant = cant.toString(); //pasamos la cantidad a string para separar la parte entera de la decimal
    let entero = "";
    let decimal = "";

    let  br = 0; //variable donde guardo en que posicion esta la coma para calcular la parte decimal
    
    // let billetes = [500, 200, 100, 50, 20, 10, 5];
    // let euros = [2, 1];
    // let cents = [50, 20, 10, 5, 2, 1];

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
    entero = parseInt(entero);
    decimal = parseInt(decimal);

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
    if(!isNaN(decimal)){
        for (let i = 0; i < cents.length; i++) {
    
            if((decimal / cents[i]) >= 1){
                console.log(`Monedas de ${cents[i]} céntimos: ${parseInt(decimal / cents[i])}`)
                decimal = decimal- (cents[i] * parseInt(decimal/cents[i]));
            }
        }
    }
}

