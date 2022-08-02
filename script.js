const canvas = document.querySelector('.main-canvas');
let color = document.querySelector('#color');
const randomColorBtn = document.querySelector('#random-color');
const gridSize = document.querySelector('#grid-size');
const gridRows = document.querySelector('#grid-rows');
const gridColumns = document.querySelector('#grid-columns');

let isClicked = false;
let isRandomColor = false;
let isColor = false;

// console.dir(document.querySelector('input'));

for (let i = 1; i <= (16 * 16); i++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    canvas.appendChild(pixel);
}

gridSize.addEventListener('input', function () {
    gridRows.textContent = gridSize.value;
    gridColumns.textContent = gridSize.value;
})

gridSize.addEventListener('mouseup', function (e) {
    setGridSize(gridSize.value);
})

color.addEventListener('click', function (e) {
    isColor = true;
    isRandomColor = false;
})

randomColorBtn.addEventListener('click', function (e) {
    isRandomColor = true;
    isColor = false;
})

canvas.addEventListener('mousedown', function (e) {
    isClicked = true;
    if (isClicked) {
        if (isRandomColor) {
            e.target.style.background = randomColor();

        }
        else {
            e.target.style.background = color.value;
        }
    }
})
canvas.addEventListener('mouseover', function (e) {
    if (isClicked) {
        if (isRandomColor) {
            e.target.style.background = randomColor();

        }
        else if (isColor) {
            e.target.style.background = color.value;
        }

        else e.target.style.background = color.value;
    }

})
canvas.addEventListener('mouseup', function (e) {
    isClicked = false;
})

function setGridSize(size) {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 1; i <= (size * size); i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        canvas.appendChild(pixel);
    }
}

function randomColor() {
    R = Math.floor(Math.random() * 256);
    G = Math.floor(Math.random() * 256);
    B = Math.floor(Math.random() * 256);

    return `rgb(${R}, ${G}, ${B})`;
}