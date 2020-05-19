let containerDiv = document.querySelector(".container");
let i;
let j;
let ColumnDiv;
let CellDiv;
let buttonReset;
let k;
 buttonReset = document.createElement('button');
buttonReset.classList.add('reset');
buttonReset.innerHTML = "Reset Grid";
containerDiv.appendChild(buttonReset);

//Clears Grid 



makeGrid();

function makeGrid()
{
    for( i = 0; i < 16; i++)
    {
        
         ColumnDiv = document.createElement('div');
         ColumnDiv.classList.add('column')
         containerDiv.appendChild(ColumnDiv)
         for(j = 0; j < 16; j++ )
         {
            CellDiv = document.createElement('div');
            CellDiv.classList.add('cell')
            ColumnDiv.appendChild(CellDiv);
            CellDiv.addEventListener("mouseover", function(){
                this.style.backgroundColor = "red";

            } )
         
            


         }
    

        

    }

}

console.log(document.body.childNodes)

buttonReset.addEventListener('click', function(){

   

})


