let inputField = document.getElementById("inputField");
let button = document.getElementById("addToDo");
let container = document.getElementById("toDoContainer");

 

button.addEventListener("click", function () {
  // Aanmaken van een p element oftewel een paragraaf
  // Dit zijn opgeslagen in de variabel paragraph
  let paragraph = document.createElement("p");
  // De waarde van je input (Dus wat je in je input typt), wordt IN
  // Je paragraaf geplaatst
  paragraph.innerText = inputField.value;
  // Paragraaf wordt toegevoegd aan de container
  container.appendChild(paragraph);
  // Input wordt leeggemaakt nadat het is toegevoegd aan de paragraaf.
  inputField.value = "";

 

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  })
  paragraph.addEventListener("dblclick", function () {
    container.removeChild(paragraph);
  })
})