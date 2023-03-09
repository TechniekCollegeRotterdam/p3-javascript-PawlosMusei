//functie, console.log jouw naam als je op de button klikt

let btn = document.getElementById("btn");

window.addEventListener("keydown", function(e){
    //console.log(e.key);
    if(e.key == "h") {
        console.log('Pawlos');
    }
    else{
        console.log('toets is verkeerd')
    }
    //Als ik de 'h' toets inklik
    // console je naam
});

window.addEventListener("mousemove", function(e){

    if(e.clientX == 0){
        console.log('ik ben aan het zijkant');

    }
})