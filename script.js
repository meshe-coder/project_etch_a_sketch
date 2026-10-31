const gridContainer= document.querySelector(".grid-container")
const gridBtn=document.querySelector(".gridBtn")
let gridNumber
// Tracks whether the mouse is currently held down for drawing.
let isDrawing = false

// Stop drawing when the pointer is released or canceled.
document.addEventListener("pointerup", () => {
    isDrawing = false
})
document.addEventListener("pointercancel", () => {
    isDrawing = false
})

function getGridNumber(){
    // Ask how many cells should fit along each side of the square grid.
    const input = prompt("input your grid number size,grid by grid format:")
    if(input === null) return null
    gridNumber = Number(input)
    return gridNumber
}
gridBtn.addEventListener("click",() => {
    const result = getGridNumber()
    // Don't rebuild the grid if the prompt was canceled.
    if(result !== null){
        setGridNumber()
    }
})
function setGridNumber(){
    // Only accept whole-number grid sizes that are multiples of four.
    if(!Number.isInteger(gridNumber) || gridNumber < 4 || gridNumber % 4 !== 0){
        alert("set 4 by 4")
        return
    }
    // Clear the old grid and tell the stylesheet how wide each cell should be.
    gridContainer.innerHTML = ""
    gridContainer.style.setProperty("--grid-size", gridNumber)
    // Create enough cells to fill a gridNumber-by-gridNumber grid.
    for(let i=0;i<gridNumber*gridNumber;i++){
        const grid = document.createElement("div")
        grid.classList.add("grids")
        // Start drawing and color this cell when the left mouse button is pressed.
        grid.addEventListener("pointerdown", (event) => {
            if(event.button !== 0) return
            isDrawing = true
            grid.style.backgroundColor = "black"
        })
        // Color each cell the pointer enters while drawing is active.
        grid.addEventListener("pointerenter", () => {
            if(isDrawing){
                grid.style.backgroundColor = "black"
            }
        })
        gridContainer.appendChild(grid)
    }
}