const gridContainer= document.querySelector(".grid-container")
const grids=document.querySelectorAll(".grids")
const gridBtn=document.querySelector(".gridBtn")
function getGridNumber(){
    let gridNumber = Number(prompt("hey there lets get to drawing,choose your grids:"))
    if (gridNumber%4!=0){
    alert("choose a 4 by 4 grid(even number divisible by 4,click the button again to reset)click the button again")
    
}
else{
    return gridNumber
}}

gridBtn.addEventListener("click",getGridNumber)
function setGridContainer(){
let gridNumber = getGridNumber
for(i=0;i<=gridNumber;i++){
    gridContainer.appendChild(grids)
}
}
setGridContainer()