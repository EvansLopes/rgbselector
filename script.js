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

    var finalColor = 'rgb('+ red + ',' + green + ',' + blue + ')'
    
    document.querySelector('#colorCanvas').style.backgroundColor = finalColor;
    console.log(red + ',' + green + ',' + blue);
}

document.querySelector('#red').addEventListener('input',colorMix);
//document.querySelector('#valueRed').value = red.value;
document.querySelector('#green').addEventListener('input',colorMix);
document.querySelector('#blue').addEventListener('input',colorMix);

colorMix();
