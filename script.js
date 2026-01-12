let increaseBtn = document.getElementById('increase');
let decreaseBtn = document.getElementById('decrease');
let resetBtn = document.getElementById('reset');
let countDisplay = document.getElementById('count');
let mainDiv = document.getElementById('main');




let count = 0;
increaseBtn.addEventListener('click', () => {
    count++;
    countDisplay.innerHTML = count;
});
decreaseBtn.addEventListener('click', () => {
    count--;
    countDisplay.innerHTML = count;
});
resetBtn.addEventListener('click', () => {
    count = 0;
    countDisplay.innerHTML = count;
});

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

increaseBtn.addEventListener('click', () => {
    mainDiv.style.backgroundColor = randomColor();
});
decreaseBtn.addEventListener('click', () => {
    mainDiv.style.backgroundColor = randomColor();
});
resetBtn.addEventListener('click', () => {
    mainDiv.style.backgroundColor = '#f0f0f0';
});