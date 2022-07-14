const canvas = document.querySelector('.main-canvas');
let color = document.querySelector('#color');

isClicked = false;

console.dir(document.querySelector('input'));

for (let i = 1; i <= 256; i++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    canvas.appendChild(pixel);
}

canvas.addEventListener('mousedown', function (e) {
    isClicked = true;
})

canvas.addEventListener('mousemove', function (e) {
    if (isClicked) {
        e.target.style.background = color.value;
    }
})

canvas.addEventListener('mouseup', function(e) {
    isClicked = false;
})