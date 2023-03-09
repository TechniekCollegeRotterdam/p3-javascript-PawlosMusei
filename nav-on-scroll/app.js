let lastScrollY = window.scrollY
let nav =  document.getElementById("nav");



window.addEventListener('scroll', () => { 
    console.log(window.scrollY)
    if(lastScrollY <= window.scrollY){
        nav.classList.add("hide") 
    } else {
        nav.classList.remove("hide") 
    }
    lastScrollY = window.scrollY;
});