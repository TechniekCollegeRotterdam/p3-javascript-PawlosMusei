let getal = 0;
function verhoogGetal(){    
    getal++;    
    document.getElementById("getal")
    .innerHTML = getal;    
    if (getal ===10)
    {getal = 0;}
}