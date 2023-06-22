const festivalContainer = document.querySelector("#festival-container");
const festivalURL = "http://localhost:3000/people";
const festivalForm = document.querySelector("#festival-form");
let allfestival = [];
//read
fetch(`${festivalURL}`)
  .then((response) => response.json())
  .then((festivals) => {
    let out = "";
    for (let festival of festivals) {
      allfestival = festivals;
      out += `
      <div id="festival">

      <p>${festival.name}</p>
      <p>${festival.surname}</p>
      <p>${festival.city}</p>
      <p>${festival.number}</p>
      <p>${festival.mail}</p>


      <button data-id="${festival.id}" id="delete-${festival.id}" data-action="delete">Delete</button>
      </div>

      `;
    }
    festivalContainer.innerHTML = out;
  });

// delete
festivalContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.dataset.action === "delete") {
    console.log(e.target.dataset.action);
    document.querySelector(`#delete-${e.target.dataset.id}`).remove();
    fetch(`${festivalURL}/${e.target.dataset.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
});

