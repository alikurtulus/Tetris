class Shape{
    constructor(startPosition,color,width,height,targetElement,isDraw){
        this.color = color
        this.startPosition = startPosition
        this.width = width
        this.height = height
        this.targetElement = targetElement
        this.isDraw = isDraw
        this.currentTetromino =''
        this.squares = []
        this.selectedShape = 1
        this.theTetrominoes = []
        
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

        this.theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]
    
        this.currentTetromino = this.theTetrominoes[selectedShape][selectedShapeIndex]
       
        this.selectedShape = selectedShape
        let isDraw = this.isDraw
        
           
            this.draw()

    }
    draw(){
        this.currentTetromino.forEach(index => {
            this.targetElement[this.startPosition+ index].classList.add('tetromino')
            this.targetElement[this.startPosition + index].style.background = this.color
        })
    }
    undraw(){
        this.currentTetromino.forEach(index => {
            this.targetElement[this.startPosition+ index].classList.remove('tetromino')
            this.targetElement[this.startPosition + index].style.background = 'black '
        })
    }

    
    moveDown(){
       
        this.undraw()
        this.startPosition += this.width
        this.draw()
        this.freeze()

    }
    freeze(){
        if(this.currentTetromino.some(index => this.targetElement[this.startPosition + index + this.width].classList.contains('taken'))){
            this.currentTetromino.forEach(index => {
            this.targetElement[this.startPosition + index].classList.add('taken')
            })
            let random = Math.floor(Math.random() * 5)
            let currentRotation = Math.floor(Math.random() * 4)
            this.currentTetromino = this.theTetrominoes[random][currentRotation]
            let randomStartPosition = Math.floor(Math.random() * 4)
            this.startPosition = 4
            this.draw()
        }
    }
}

