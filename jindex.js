//default grid size
createGrid(25,25);

let selectedColor = 'black';

function createGrid(rows, columns) {
    let gridContainer = document.getElementById('gridContainer');

    //clears gridContainer
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    const gridContainerWidth = gridContainer.clientWidth;
    const gridContainerHeight = gridContainer.clientHeight;

    //creates div's
    for (let i = 0; i < rows * columns; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square';
        gridContainer.appendChild(gridSquare);
        
        //sets width of squares
        let divWidth = Math.floor(gridContainerWidth / columns);
        let divHeight = Math.floor(gridContainerHeight / rows);
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


