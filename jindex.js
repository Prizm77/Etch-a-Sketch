//default grid size
createGrid(25,25);

let selectedColor = 'black';

function createGrid(rows, columns) {
    let container = document.getElementById('container');

    //clears container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    //creates div's
    for (let i = 0; i < rows * columns; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square';
        container.appendChild(gridSquare);
        
        //sets width of squares
        let divWidth = Math.floor(containerWidth / columns);
        let divHeight = Math.floor(containerHeight / rows);
        gridSquare.style.width = divWidth + 'px';
        gridSquare.style.height = divHeight + 'px';
    
        //painting div's
        gridSquare.addEventListener('mouseover', ()=> {
            gridSquare.style.backgroundColor = selectedColor;
              
        })
        }
    };

//resize functionality
const resizeBar = document.getElementById('resizeBar');
resizeBar.addEventListener('input', ()=> {
    let size = resizeBar.value;
    createGrid(size, size);
})

//get selected color
const colorPicker = document.getElementById('colorPicker')
colorPicker.addEventListener('input', ()=> {
    selectedColor = colorPicker.value;
})


