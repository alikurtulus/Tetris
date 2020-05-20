class Shape{
    constructor(startPosition,color,width,height,targetElement){
        this.color = color
        this.startPosition = startPosition
        this.width = width
        this.height = height
        this.targetElement = targetElement
    }
    createShape(selectedShape,selectedShapeIndex){
        const GRID_WIDTH =  this.width
        const GRID_HEIGHT = this.height
        const lTetromino = [
            [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, 2],
            [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 2],
            [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2],
            [GRID_WIDTH, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2 + 2]
        ]

        const zTetromino = [
            [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
            [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1],
            [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
            [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1]
        ]

        const tTetromino = [
            [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2],
            [1, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
            [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
            [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1]
        ]

        const oTetromino = [
            [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
            [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
            [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
            [0, 1, GRID_WIDTH, GRID_WIDTH + 1]
        ]

        const iTetromino = [
            [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
            [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3],
            [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
            [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3]
        ]

        const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]
    
        let currentTetromino = theTetrominoes[selectedShape][selectedShapeIndex]
        let currentPosition = this.startPosition
        let squares = this.targetElement
        currentTetromino.forEach(index => {
            console.log(index)
            console.log(squares[currentPosition + index]) 
            
            squares[selectedShape+ index].classList.add('tetromino')
        })




    }
}