let button = document.getElementById("btn")


let block = document.getElementById("block")


block.addEventListener("mouseover", function(){
    block.classList.add("highlight")
})
block.addEventListener("mouseleave", function(){
    block.classList.remove("highlight")
})
