function createInitialGrid() {
    const INITIAL_GRID_LENGTH = 4;
    createGrid(4);
    drawTrail();
    const gridSize = document.querySelector('#grid-size');
    gridSize.addEventListener('click', () => askGridSize());
}

function createGrid(gridLength) {
    const container = document.querySelector('.container');
    for(let i = 0; i < gridLength ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        square.style.width = (100 / gridLength).toString() + 'vw';
    }
}

function drawTrail() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            const redVal = Math.round(Math.random() * 255).toString();
            const greenVal = Math.round(Math.random() * 255).toString();
            const blueVal = Math.round(Math.random() * 255).toString();
            square.style.backgroundColor = `rgb(${redVal}, ${greenVal}, ${blueVal})`; 
        });
    });
}

function askGridSize() {
    console.log("askGridSize() was called");

    const gridLength = prompt(`Enter the number of squares per side for the grid.\nThe maximum is 100.`);
    if (gridLength > 100) {
        alert("Enter a number that is 100 or less.");
        return;
    }

    if (!gridLength) {
        return;
    }

    console.log("gridLength = " + gridLength);
    const body = document.querySelector('body');
    const container = document.querySelector('.container');
    body.removeChild(container);

    const newContainer = document.createElement('div');
    newContainer.classList.add('container');
    body.appendChild(newContainer);

    createGrid(gridLength);
    drawTrail();
}

createInitialGrid();