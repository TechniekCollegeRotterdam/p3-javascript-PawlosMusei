// let output = document.querySelector(".output");
// //oude manier
// let car_name = "Fiat";
// let model = "500";
// let weight = "850kg";
// let color = "white";

// function drive() {
//   return "I'm driving";
// }

// // nieuwe versie vanobjecten maken
// const car = {
//   //porerties
//   name: "fiat",
//   model: "500",
//   weight: "850kg",
//   color: "white",
//   //arrays
//   repairs: ["koppeling", "banden", "riem"],
//   //methods
//   start: function () {
//     return "I start the car";
//   },
//   drive: function () {
//     return "I'm driving";
//   },
//   brake: function () {
//     return "I brake";
//   },
//   stop: function () {
//     return "I stop";
//   },
// };
// // car.name = "Seat";
// // console.log(car.name);

// output.innerHTML = `
// <p>De naam van de auto is ${car.name}</p>
// <p>${car.drive()}</p>
// `

let output = document.querySelector(".output");
const book = {
    //porerties
    title: "Gerrad",
    athor: "Pawlos",
    pubilsher: "Gerrad",
    year: 2050,
    sold: 1000000,
    price: 50,
}
output.innerHTML = `
<p>${book.title}</p>
<p>${book.athor}</p>
<p>${book.pubilsher}</p>
<p>${book.year}</p>
<p>${book.sold}</p>
<p>${book.price}</p>
`