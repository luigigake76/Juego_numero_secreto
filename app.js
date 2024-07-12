//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del número secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';
let numeroSecreto = 0; //Le asigna la funcion generarNumeroSecreto().
let intentos = 0; 
let listaNumerosSorteados = [];
let numeroMaximo = 10; //rango maximo de combinaciones de numeros.


//Esta funcion introduce texto en los elementos de DOM (ejem: H1, p)
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Esta funcion es llamada por el boton intentar del index.html
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto)); //la funcion Typeof nos muestra el tipo del dato por la consola.
    //console.log(numeroDeUsuario);
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto === numeroDeUsuario); //El triple valida valor y tipo de dato.
    console.log (intentos);
    if (numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'Vez' : 'veces'}.`);
        //obtiene al boton con Id reiniar en el HTML y le remueve el atributo "disabled".
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    }else {
        //El usuario no acerto.
        if (numeroSecreto < numeroDeUsuario){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

//Esta funcion genera un numero aleatorio
function generarNumeroSecreto(){
   let numeroSecreto = Math.floor(Math.random() * numeroMaximo)+1;
   //Si ya sorteamos todos los numeros.
   if (numeroMaximo == listaNumerosSorteados.length){
        return "ya se sortearon todos los numeros secretos posibles.";
   }else{
        //Si el numero secreto esta incluido en la lista.
        if (listaNumerosSorteados.includes(numeroSecreto)){
        //La funcion se autollama ("recursividad").
        return generarNumeroSecreto();    
        } else{
        //adiciona el numero secreto generado a la lista.
        listaNumerosSorteados.push(numeroSecreto);
        return numeroSecreto;
   }

   }
   
}

function reiniciarJuego(){
    //Limpiar la caja.
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros.    
    //Generar el numero aleatorio.
    //Inicializar el numero de intentos.  
    condicionesIniciales();  
    //Deshabilitar el boton de nuevo juego.
    //obtiene al boton con Id reiniar en el HTML y le configura el atributo "disabled" con valor "true".
    document.querySelector('#reiniciar').setAttribute('disabled','true'); 
    
};

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();


//  *****************  Desafio Funciones  *****************************

//1.Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo(){
    console.log("Hola mundo");
}
//saludo();

//2.Crear una función que reciba un nombre como parámetro y muestre 
//"¡Hola, [nombre]!" en la consola.
function saludo(nombre){
    console.log(`¡Hola, ${nombre}!`);
}
//saludo("Luigi");

//3.Crear una función que reciba un número como parámetro y devuelva 
//el doble de ese número.
function doblar(numero){
    return numero * 2;
}
//console.log(doblar(4));

//4.Crear una función que reciba tres números como parámetros y 
//devuelva su promedio.
function promed(num1, num2, num3){
    let suma = num1 + num2 + num3;
    let promedio = suma / 3;
    return  promedio;
}
//console.log(promed(4, 8, 10));

//5.Crear una función que reciba dos números como parámetros y 
//devuelva el mayor de ellos.
function numeroMayor(num1, num2){
    if (num1>num2){
        console.log(`Numero ${num1} es mayor a ${num2}`);
    } else{
        console.log(`Numero ${num2} es mayor a ${num1}`);
    }
    return  promedio;
}
//numeroMayor(4, 8);

//6.Crear una función que reciba un número como parámetro y 
//devuelva el resultado de multiplicar ese número por sí mismo.
function cuadrar(numero){
    numero *= numero;
    return numero;
}
//console.log(cuadrar(5));

//7.Crea una función que calcule el índice de masa corporal (IMC) 
//de una persona a partir de su altura en metros y peso en 
//kilogramos, que se recibirán como parámetros.
function imc(altura, peso){
    imc = peso / altura ** 2;
    console.log(`Tu indice de masa corporal es ${imc}.`)
}

//imc(1.74, 80);

//8.Crea una función que calcule el valor del factorial de un 
//número pasado como parámetro.
function factorial(numero){
    
    if (numero < 0){ 
        console.log("Factorial no esta definido para nùmeros negativos");
    }
    if (numero === 0){
        return 1; 
    }
    
    let factorialResultado = 1;
    let contador = 1;

    while (contador <= numero){
        factorialResultado = factorialResultado * contador;
        contador++;
    }
     return factorialResultado;
}

//console.log(factorial(5));

//9.Crea una función que convierta un valor en dólares, pasado como 
//parámetro, y devuelva el valor equivalente en reales
//(moneda brasileña,si deseas puedes hacerlo con el valor del dólar 
//en tu país). Para esto, considera la cotización del dólar 
//igual a R$4,80.
function cambioDolar(cantidad, taza){
    return cantidad * taza;
   }
   
//console.log(cambioDolar(100, 3.5));   

//10.Crea una función que muestre en pantalla el área y el perímetro 
//de una sala rectangular, utilizando la altura y la anchura que se 
//proporcionarán como parámetros.
function areaPerimetroRectangulo(altura, base){
    let perimetro = altura * 2 + base * 2; 
    let area = base * altura;
    return `El area de la sala es ${area} metros cuadrados y el perimetro es de ${perimetro} metros.`

}

//console.log(areaPerimetroRectangulo(8, 20));

//11.Crea una función que muestre en pantalla el área y el perímetro 
//de una sala circular, utilizando su radio que se proporcionará como 
//parámetro. Considera Pi = 3,14.
function areaPerimetroCirculo(radio){
    const pi = 3.1416
    let perimetro = (radio * 2) * pi; 
    let area = pi * radio ** 2;
    return `El area del circulo es ${area} metros cuadrados y el perimetro es de ${perimetro} metros.`

}
//console.log(areaPerimetroCirculo(3));

//12.Crea una función que muestre en pantalla la tabla de multiplicar 
//de un número dado como parámetro.
function tablaMultiplicar(n){
    contador = 0;
    while (contador <= 12){
        multiplicacion = n * contador;
        console.log(`${n} x ${contador} = ${multiplicacion}`);
        contador++;
    }
}
//tablaMultiplicar(5);


//*********************Desafio Listas *******************************

//1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
//console.log(listaGenerica);

//2. Crea una lista de lenguajes de programación llamada 
//"lenguagesDeProgramacion con los siguientes elementos: 
//'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
//console.log(lenguajesDeProgramacion);

//3. Agrega a la lista "lenguagesDeProgramacion los siguientes 
//elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
//console.log(lenguajesDeProgramacion);

//4. Crea una función que muestre en la consola todos los elementos 
//de la lista "lenguagesDeProgramacion.
function lenguajesProgramacion(){
    
    let contador = 0;
    while (contador <= lenguajesDeProgramacion.length - 1 ){
        console.log(`el lenguaje de programacion en el indice ${contador} es ${lenguajesDeProgramacion[contador]}`)
        contador++;
    }
}
//lenguajesProgramacion();

//5. Crea una función que muestre en la consola todos los elementos 
//de la lista "lenguagesDeProgramacion en orden inverso.
function lenguajesProgramacion2(){
    
    let contador = lenguajesDeProgramacion.length - 1;
    while (contador >= 0 ){
        console.log(`el lenguaje de programacion en el indice ${contador} es ${lenguajesDeProgramacion[contador]}`)
        contador--;
    }
}
//lenguajesProgramacion2();

//6. Crea una función que calcule el promedio de los elementos en 
//una lista de números.
let listaVacia = [];
let notas = [15,20, 17,11,13];
let notas2 = [5,16,10,20,30];
let notas3 = [2,3,5];
function promedio(lista){
    if (lista.length === 0) return "La lista esta vacia.";
    let contador = 0;
    let sumaNumeros = 0;
    while (contador <= lista.length -1){
       sumaNumeros += lista[contador]; 
       contador++;
    }
    return sumaNumeros/contador;
    

}
//console.log(promedio(notas));
//console.log(promedio(listaVacia));

//7. Crea una función que muestre en la consola el número más 
//grande y el número más pequeño en una lista.
function minimoMaximo(lista){
    if (lista.length === 0) return "La lista esta vacia.";
    minimo = lista[0];
    maximo = lista[0];
    contador = 0;
    while (contador <= lista.length -1){
        
        if (lista[contador] > maximo) maximo = lista[contador];
        if (lista[contador] < minimo) minimo = lista[contador]; 
        contador++;       
    }
    return `El numero mas pequeño de la lista es ${minimo} y el mas grande es ${maximo}.`
    
}
//console.log(minimoMaximo(notas));

//8. Crea una función que devuelva la suma de todos los elementos 
//en una lista.
function sumaTotal(lista) {
    let i = 0;
    let suma = 0;
    while (i <= lista.length -1 ){
        suma += lista[i];
        i++;
    }
    return suma; 
}
//console.log(sumaTotal(notas));

//9. Crea una función que devuelva la posición en la lista donde 
//se encuentra un elemento pasado como parámetro, o -1 si no 
//existe en la lista.
function buscarPosicion(lista, elemento){
   
   let i = 0;
   while (i <= lista.length-1){
        if (lista[i] === elemento){   
        //retorna la posicion y termina la funcion     
        return `El elemento ${elemento} se encuentra en la posicion ${i} de la lista`;
        }
        i++;
    }    
    
    return -1; //Retorna -1 si el elemento no se encuentra en la lista.
}
//console.log(buscarPosicion(notas, 13));


//10. Crea una función que reciba dos listas de números del mismo 
//tamaño y devuelva una nueva lista con la suma de los elementos 
//uno a uno.
function sumaElementosParalelos(lista1, lista2){
    if (lista1.length === 0) return "Las lista 1 esta vacia.";
    if (lista2.length === 0) return "Las lista 2 esta vacia.";
    if (lista1.length != lista2.length) return "Las listas no son del mismo tamaño.";
    
    let listaResultado = []; 
    for(let i=0; i < lista1.length; i++){
      let suma = lista1[i] + lista2[i];  
      //Agrego a listaResualtado la suma de ambas listas iteradas paralelamente.  
        listaResultado.push(suma);
    }
    return listaResultado;
}
//console.log(sumaElementosParalelos(listaVacia, notas3));

//11. Crea una función que reciba una lista de números y devuelva 
//una nueva lista con el cuadrado de cada número.
function cuadradoElementos(lista){
    if (lista.length === 0) return "Las lista esta vacia.";    
    
    let listaResultado = [];

    for(let i=0; i < lista.length; i++){
      let cuadrado = lista[i] ** 2;  
      //Agrego a listaResualtado la suma de ambas listas iteradas paralelamente.  
        listaResultado.push(cuadrado);
    }
    return listaResultado;
}
//console.log(cuadradoElementos(notas3));
