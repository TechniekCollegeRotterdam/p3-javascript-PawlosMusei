// //oude manier
// function calculate(a, b){
//     let answer = a * b;
//     console.log(a * b);
// }

// calculate(5,15);

// //arrow function
// const calculate = (a, b) => {
//     let answer = a * b;
//     console.log(answer);
// }

// calculate(5,15);

//oude manier
// let name = "Pawlos";
// let text = "Mijn naam is " + name;
// console.log(text);

//variabelen tonen door middel van backticks
// let name = "Pawlos"

// text = `Mijn naam is: ${name}`;

// console.log(text);

//oude manier
// document.getElementById('output').innerText = text;
// document.getElementsByTagName()
// document.getElementsByClassName()

// nieuwe manier
// document.querySelector('#output').innerText = text;
// document.querySelector('#')
// document.querySelector('#')

// # = is voor een id
// . = voor een className
// niks = voor een tagName

// const cars = ['audi', 'volkswagen', 'mercedes']

//oude manier
// for(let i = 0; i > cars.length; i++){
//     console.log(cars[i]);
// }

//nieuwe manier
// for (let car of cars){
//     console.log(car);
// }

const marvels = ["spiderman", "batman", "nowayhome", "wolverin"];

const addMarvels = () => {
    marvels.push("ironman");
}
for (let marvel of marvels){
    console.log(marvel);
}


