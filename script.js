const canvas = document.querySelector('.main-canvas');
let color = document.querySelector('#color');
const randomColorBtn = document.querySelector('#randomColor');

let isClicked = false;
let isRandomColor = false;

// console.dir(document.querySelector('input'));

for (let i = 1; i <= 256; i++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    canvas.appendChild(pixel);
}

randomColorBtn.addEventListener('click', function () {
    isRandomColor = true;
})

canvas.addEventListener('mousedown', function (e) {
    isClicked = true;
})
canvas.addEventListener('mousemove', function (e) {
    if (isClicked) {
        if (isRandomColor) {
            e.target.style.background = randomColor();

        } else e.target.style.background = color.value;
    }
})
canvas.addEventListener('mouseup', function (e) {
    isClicked = false;
    isRandomColor = false;
})

function randomColor() {
    R = Math.floor(Math.random() * 256);
    G = Math.floor(Math.random() * 256);
    B = Math.floor(Math.random() * 256);
    
    return `rgb(${R}, ${G}, ${B})`;
}