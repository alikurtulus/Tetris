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

}