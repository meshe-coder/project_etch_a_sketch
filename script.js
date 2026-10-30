const gridContainer= document.querySelector(".grid-container")
const gridBtn=document.querySelector(".gridBtn")
gridBtn.addEventListener("click",setGridContainer)
function setGridContainer(){
    const answer = prompt("Set your grid size (1–100):")
    if (answer === null) return

    const gridNumber = Number(answer)
    if (!Number.isInteger(gridNumber) || gridNumber < 1 || gridNumber > 100) {
        alert("Enter a whole number between 1 and 100.")
        return
    }

    gridContainer.replaceChildren()
    gridContainer.style.setProperty("--grid-size", gridNumber)

    const cells = document.createDocumentFragment()
    for (let i = 0; i < gridNumber * gridNumber; i++) {
        const cell = document.createElement("div")
        cell.classList.add("grids")
        cells.appendChild(cell)
    }
    gridContainer.appendChild(cells)
}
