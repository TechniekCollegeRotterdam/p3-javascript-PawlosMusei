let getal = 0;
let output = document.getElementById('getal');
function verhoogGetal(){
    output.innerText = getal;    
    if (getal ===10)
    {        
        getal = 0;    
    } 
    else{        
        getal++;    
    }
}