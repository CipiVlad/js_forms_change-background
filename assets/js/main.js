// farb-variablen deklarieren
// let red = document.getElementById('red');
// let green = document.getElementById('green');
// let blue = document.getElementById('blue');

// output für Hintergrundfarbe -> variable deklarieren
// let color = 'rgb(' + red + ',' + green + ',' + blue + ')';

// style von body
// document.body.style.backgroundColor = color;

// output der für Hintergrundfarbe innerHtml
// document.getElementById('colorOutput').innerHtml = color;

// function
function changeBackground() {
    // console.log(red.value);
    // console.log(green.value);
    // console.log(blue.value);
    let red = document.getElementById('red').value;
    let green = document.getElementById('green').value;
    let blue = document.getElementById('blue').value;
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.body.style.backgroundColor = color;
    document.getElementById('colorOutput').innerHtml = ':' + color;
}

