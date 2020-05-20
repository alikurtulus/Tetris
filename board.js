class Board {
    constructor(cellsNumber,className,targetBoard){
        this.cellsNumber = cellsNumber
        this.className = className
        this.targetBoard = targetBoard
    }
    createBoard(cellsNumber){
       for(let i = 0; i < cellsNumber; i++){
          const cell = document.createElement('div')
          cell.className = this.className
          this.targetBoard.appendChild(cell)
          
       }
       

    }

}