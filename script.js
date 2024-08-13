function createGrid() {
    const container = document.querySelector('#container');
    for(let i = 0; i < 16; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

}

function drawTrail() {
    const squares = document.querySelectorAll('div.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'dimgray';
        });
    });
}

createGrid();
drawTrail();