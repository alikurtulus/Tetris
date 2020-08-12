class Board {
    constructor(cellsNumber,className,targetBoard){
        this.cellsNumber = cellsNumber
        this.className = className
        this.targetBoard = targetBoard
    }
    createBoard(cellsNumber){
       for(let i = 0; i < cellsNumber; i++){
           if(cellsNumber === 210){
                if(i <cellsNumber - 10){
                    const cell = document.createElement('div')
                    cell.className = this.className
                    this.targetBoard.appendChild(cell)
                } 
                else{
                    const cell = document.createElement('div')
                    cell.className = 'taken'
                    this.targetBoard.appendChild(cell)
                }
            }
           else{
            const cell = document.createElement('div')
            cell.className = this.className
            this.targetBoard.appendChild(cell)
           }
          
       }
    }
    clear(){
        const cells = this.targetBoard.children
        console.log(cells)
        for(let i = 0; i< cells.length;i++){
            cells[i].style.background="black"
            cells[i].classList.remove('tetromino')
            if(i<200){
                cells[i].classList.remove('taken')
            }
        }

    }

}