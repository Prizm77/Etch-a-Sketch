let defaultGridSize = 2;

createGrid(4,4);

function createGrid(rows, columns) {
    let container = document.getElementById('container');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    for (let i = 0; i < rows * columns; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square';
        container.appendChild(gridSquare);

        let divWidth = Math.floor(containerWidth / columns);
        let divHeight = Math.floor(containerHeight / rows);
        gridSquare.style.width = divWidth + 'px';
        gridSquare.style.height = divHeight + 'px';
    
        gridSquare.addEventListener('mouseover', ()=> {
            gridSquare.classList.add('selectedSquare');
        })
        }
    };

const resizeButton = document.getElementById('resizeBtn');
resizeButton.addEventListener('click', ()=> {
    let size = prompt('Enter Size:');
    createGrid(size, size);
})
    

// width 100px 50 pixels ...width divided by the amount of divs

