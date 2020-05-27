document.addEventListener("DOMContentLoaded", function(event){
    console.log('Página renderizada')
});

function colorMix(){
    var red = document.querySelector('#red').value;    
    document.querySelector('#valueRed').value = red;
    var green = document.querySelector('#green').value;    
    document.querySelector('#valueGreen').value = green;
    var blue = document.querySelector('#blue').value;    
    document.querySelector('#valueBlue').value = blue;

    var result = document.querySelector('#result')
    var finalColor = `rgb(${red},${green},${blue})`
    result.value = `Copie: ${finalColor}`
    
    document.querySelector('#colorCanvas').style.backgroundColor = finalColor;
    
}

document.querySelector('#red').addEventListener('input',colorMix);
document.querySelector('#green').addEventListener('input',colorMix);
document.querySelector('#blue').addEventListener('input',colorMix);


colorMix();
