let containerDiv = document.querySelector(".container");



let i;
let j;
let ColumnDiv;
let CellDiv;
let buttonReset;
let k;
let cells;
var girdSize;

grid();

function grid(){
    gridSize = prompt("Please enter the intial grid size please");
}


let container2 = document.createElement('div');
container2.classList.add('container2');
document.body.appendChild(container2);


buttonReset = document.createElement('button');
buttonReset.classList.add('reset');
buttonReset.innerHTML = "Reset Grid";
container2.appendChild(buttonReset);

const getWidth = function(targetElement) {

    const style = window.getComputedStyle(targetElement);
    const widthStr = style.getPropertyValue('width');                //getting '500px';
    const widthValue = widthStr.replace('px', '');

    return widthValue;                                              //returns string
}


const getHeight = function(targetElement) {

    const style = window.getComputedStyle(targetElement);
    const heightStr = style.getPropertyValue('height');                //getting '500px';
    const heightValue = heightStr.replace('px', '');

    return heightValue;                                                 //returns string
}

//Clears Grid 



makeGrid();


function makeGrid()
{
    for( i = 0; i < gridSize; i++)
    {
        
         rowDiv = document.createElement('div');
         rowDiv.classList.add('row')
        
        rowDiv.style.height = `${getWidth(containerDiv)/gridSize}px`;
         containerDiv.appendChild(rowDiv)
         for(j = 0; j < gridSize; j++ )
         {
            CellDiv = document.createElement('div');
            CellDiv.classList.add('cell')
            CellDiv.style.width = `${getHeight(containerDiv)/gridSize}px`;

            
            rowDiv.appendChild(CellDiv);
            CellDiv.addEventListener("mouseover", function(){
                this.style.backgroundColor = "red";

            } )
         
            


         }
    

        

    }

}





buttonReset.addEventListener('click', function(){


   cells = document.getElementsByClassName('cell');
   for(k = 0; k < cells.length; k++)
   {
       cells[k].style.backgroundColor = "white";
   }    

})


