let title = document.getElementById("title");

title.innerText = "U heeft voldoende budget";
title.innerText = "Helaas, te weinig geldt";

let budget = 100;

let product = prompt();

if (budget > product ){
    title.style.color = "green"
    title.innerText = "u heeft voldoende budget";
}else{
    title.style.color = "red"
    title.innerText = "Helaas, te weinig geldt";
}

//product = prompt("Hoeveel kost het product dat je wilt kopen?");

