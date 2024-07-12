console.log("Hola funciono ^^");

var entero = "";
var decimal = "";
// var valoresAceptados = /^[0-9]+$/;
var regexNum = /^\d+$/;

// let billetes = [500, 200, 100, 50, 20, 10, 5];
// let euros = [2, 1];
// let cents = [50, 20, 10, 5, 2, 1];  

function getFormData(ev){

    entero = "";
    decimal = "";
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

    if(comprobarCantidad(cantidad, checkedB,checkedE,checkedC) !== true){
        document.getElementById("money").reset();
        window.alert("No se puede desglosar la cantidad de esa manera. Seleccione otros importes.");
    }else{
        desglosarCantidad(checkedB,checkedE,checkedC);
    }
}

function separarCantidad(cant) {

    console.log("Función separar cantidad jeje")

    cant = cant.toString(); //pasamos la cantidad a string para separar la parte entera de la decimal
    let  br = 0; //variable donde guardo en que posicion esta la coma para calcular la parte decimal
    
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

    //me aseguro de que la parte decimal no tenga mas de 2 dígitos
    if(decimal.length > 2) {
        decimal = decimal.charAt(0) + decimal.charAt(1);
    }
    
    //compruebo que los datos introducidos sean números o en su defecto la parte decimal
    //esté vacía (en el caso de un número entero) y que la parte decimal no supere los 2 dígitos
    if(regexNum.test(entero) && (regexNum.test(decimal) || decimal === "")) {

        if(decimal.length === 1){
            decimal = decimal + "0";
        }else if (decimal.charAt(0) === "0" ){
            decimal = decimal.slice(1);
        }

        //paso las cantidades en string a numero para hacer operaciones matematicas 
        //y duelvo un true que indico que la cantidad es correcta 
        entero = parseInt(entero);
        decimal = parseInt(decimal);
        return true;

    }else {
        return false; //en su defecto devuelvo un false para indicar que la cantidad es incorrecta 
    }

}

function comprobarCantidad(cant, billetes, euros, cents){

    console.log("Funcion comprobar :P");
    //compruebo que la cantidad es correcta para poder empezar a operar con ella
    if(separarCantidad(cant) === true){ 

        let ent = entero;
        let dec = decimal;

        //a partir de aquí vamos a calcular que la cantidad que se nos ha pasado se puede desglosar
        //correctamente con los billetes, euros y centimos que se han seleccionado

        //empezamos dividiendo entre los billetes
        for (let i = 0; i < billetes.length; i++) {
            if((ent / billetes[i]) >= 1){
                ent = ent-(billetes[i] * parseInt(ent / billetes[i]));
            }
        }
        

        //si la cantidad entera no queda a cero es que con los billetes no hemos podido desglosar 
        //toda la cantidad y procedemos a hacer lo mismo con las monedas de euro
        if (ent > 0){
            for (let i = 0; i < euros.length; i++) {
                if((ent / euros[i]) >= 1){
                    ent = ent- (euros[i] * parseInt(ent / euros[i]));
                }
            }
        }
        
        //lo mismo con los centimos, en este caso tenemos que multiplicar la cantidad entera por 100 ya que
        //estamos trabajando con centimos
        if (ent > 0) {
            ent = ent * 100;
            for (let i = 0; i < cents.length; i++) {
                if((ent / cents[i]) >= 1){
                ent = ent - (cents[i] * parseInt(ent/cents[i]));
                }
            }
        }

        //si despues de comprobar que con los billetes, euros y centimos que tenemos no se puede
        //desglosar la parte entera, devolvemos false y pedimos que se seleccionen otros importes
        if(ent>=1){
            console.log("No se ha podido desglosar la cantidad conrrectamente.");
            return false;
        }

        if(!isNaN(dec)){
            for (let i = 0; i < cents.length; i++) {
                if((dec / cents[i]) >= 1){
                console.log(`Monedas de ${cents[i]} céntimos: ${parseInt(dec / cents[i])}`)
                dec = dec- (cents[i] * parseInt(dec/cents[i]));
                }
            }
        }


        //si despues de comprobar que con los centimos que tenemos no se puede
        //desglosar la parte decimal, devolvemos false y pedimos que se seleccionen otros importes
        if(dec >= 1){
            console.log("No se ha podido desglosar la cantidad conrrectamente.");
            return false;
        }

        //en el caso de que se pueda desglosar correctamente toda la cantidad (tanto parte entera como decimal)
        //devolvemos true
        return true; 

    }else {  //si la funcion separarCantidad devuelve false pedimos que se ingrese un número 
        document.getElementById("money").reset();
        window.alert("Tienes que ingresar un número");
        return true;
    }

}

function desglosarCantidad(billetes, euros, cents){
    
    //aqui compruebo si hay decimales para mostrar un mensaje u otro :)
    if(isNaN(decimal)){
        console.log("Desglose de", entero, "€");
    }else{

        console.log("Desglose de", entero, "€ y", decimal, "céntimos");
    }

    //calculamos cuantos billetes de cada son
    for (let i = 0; i < billetes.length; i++) {
        if((entero / billetes[i]) >= 1){
            console.log(`Billetes de ${billetes[i]} €: ${parseInt(entero / billetes[i])}`)
            entero = entero-(billetes[i] * parseInt(entero / billetes[i]));
        }
    }

    //si el valor entero es mayor que 0 despues de restar los billetes, 
    //calculamos cuantas monedas de cada son
    if (entero > 0){
        for (let i = 0; i < euros.length; i++) {
            if((entero / euros[i]) >= 1){
                console.log(`Monedas de ${euros[i]} €: ${parseInt(entero / euros[i])}`)
                entero = entero- (euros[i] * parseInt(entero / euros[i]));
            }
        }
    }

    if (entero > 0){
        entero = entero * 100;
        for (let i = 0; i < cents.length; i++) {
            if(((entero) / cents[i]) >= 1){
            console.log(`Monedas de ${cents[i]} céntimos: ${parseInt(entero / cents[i])}`)
            entero = entero - (cents[i] * parseInt(entero/cents[i]));
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

//TODO juntar los céntimos de la parte enntera y decimal, en el caso en que haya que desglosar la
//TODO parte entera en céntimos