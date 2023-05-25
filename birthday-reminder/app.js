let output = document.querySelector(".person");
let out = "";

fetch("./person.json")
  .then((response) => response.json())
  .then((person) => {
    for (let p of person) {
      out += ` 
    <div class = "card">
     <div class = "info">
      <img src="${p.image}"></img>
      <div class ="tekst">
       <h1>${p.name}</h1>
       <p>${p.years}</p>
      </div>
     </div>
    </div>
    `;
    }

    output.innerHTML = out;
  });
// Clear All-knop

document.querySelector(".clearButton").addEventListener("click", clearPage);

function clearPage() {


  output.innerHTML = "";
}
