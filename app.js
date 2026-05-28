/*
todo -- Instrucciones:
Crear un programa en Javascript que realice lo siguiente:
1. Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
2. Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
3. Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
4. Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
*/

/*
todo -- PASOS / PSEUDOCÓDIGO
1. Solicitar al usuario 3 números por let number1 = Number(prompt()). Esto hará que lo que ingrese el usuario sea un número y esté guardado en una variable que puede cambiar.

2. Buscar los números que puedan ser iguales

3. Crear una nueva variable que guarde los números en un array

4. Ordenar el array de menor a mayor

5. Imprimir cuál es el número mayor, menor y medio.

6. Imprimir los números de mayor a menor

7. Revertir el array

8. Imprimir los números de menor a mayor.
*/

// todo -- Código

//Paso 1: Solicitar al usuario 3 números por let number1 = Number(prompt()). Esto hará que lo que ingrese el usuario sea un número y esté guardado en una variable que puede cambiar.
let number1 = Number(prompt("Ingresa el primer número"));
let number2 = Number(prompt("Ingresa el segundo número"));
let number3 = Number(prompt("Ingresa el tercer número"));

//Paso 2: Buscar los números que puedan ser iguales
if(number1 === number2){
    const alert1 = document.getElementsByTagName("main")[0];

    alert1.innerHTML = `
    <div class="alert alert-primary" role="alert">
        El número ${number1} y el número ${number2} son iguales
    </div>
    `
} if(number2 === number3){
    const alert2 = document.getElementsByTagName("main")[0];

    alert2.innerHTML = `
    <div class="alert alert-primary" role="alert">
        El número ${number2} y el número ${number3} son iguales
    </div>
    `
} if(number1 === number3){
    const alert3 = document.getElementsByTagName("main")[0];

    alert3.innerHTML = `
    <div class="alert alert-primary" role="alert">
        El número ${number1} y el número ${number3} son iguales
    </div>
    `
}

//Paso 3: Crear una nueva variable que guarde los números en un array
const arrNumbers = [number1, number2, number3];
console.log(arrNumbers);

//Paso 4: Ordenar el array de menor a mayor
const orderedArrNumbers = arrNumbers.toSorted((a, b) => a - b);
console.log(orderedArrNumbers);

//Paso 5: Revertir el array
const reversedArrNumbers = [...orderedArrNumbers].reverse();
console.log(reversedArrNumbers)

//Paso 6: Imprimir cuál es el número mayor, menor y medio.
const cardList = document.getElementsByTagName("main")[0];

cardList.innerHTML = `
    <div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Número mayor: ${reversedArrNumbers[0]}</li>
        <li class="list-group-item">Número medio: ${reversedArrNumbers[1]}</li>
        <li class="list-group-item">Número menor: ${reversedArrNumbers[2]}</li>
    </ul>
    </div>
`

//Paso 7: Imprimir los números de mayor a menor

const orderedNumbers = document.getElementsByTagName("main")[1];

orderedNumbers.innerHTML = `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
        Ordenados de mayor a menor
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${reversedArrNumbers[0]}</li>
        <li class="list-group-item">${reversedArrNumbers[1]}</li>
        <li class="list-group-item">${reversedArrNumbers[2]}</li>
    </ul>
    </div>
`

//Paso 8: Imprimir los números de menor a mayor.
console.log(`Los numeros ordenados de menor a mayor son ${orderedArrNumbers[0]}, ${orderedArrNumbers[1]}, ${orderedArrNumbers[2]}`);

const reversedNumbers = document.getElementsByTagName("main")[2];

reversedNumbers.innerHTML = `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
        Ordenados de menor a mayor
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${orderedArrNumbers[0]}</li>
        <li class="list-group-item">${orderedArrNumbers[1]}</li>
        <li class="list-group-item">${orderedArrNumbers[2]}</li>
    </ul>
    </div>
`