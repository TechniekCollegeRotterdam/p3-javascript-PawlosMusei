const festivalContainer = document.querySelector("#festival-container");
const festivalURL = "http://localhost:3000/people";
const festivalForm = document.querySelector("#festival-form");
let allfestival = [];
//read

//create
festivalForm.addEventListener("submit", () => {
  const nameInput = festivalForm.querySelector("#name").value;
  const surnameInput = festivalForm.querySelector("#surname").value;
  const cityInput = festivalForm.querySelector("#city").value;
  const numberInput = festivalForm.querySelector("#number").value;
  const mailInput = festivalForm.querySelector("#mail").value;
  fetch(`${festivalURL}`, {
    method: "POST",
    body: JSON.stringify({
      name: nameInput,
      surname: surnameInput,
      city: cityInput,
      number: numberInput,
      mail: mailInput,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
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
