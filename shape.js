class Shape{
    constructor(realShape,viewShape,mainBoard,scoreDisplay,timerId,timeId,resetBtn){
        this.realShape = realShape
        this.viewShape = viewShape
        this.colors = ['#d9455f','magenta','green','blue','#DE8F6E','#88AB75','#45046a','#303960','#9a1f40','#bc658d']
        this.selectedTermino = Math.floor(Math.random() * 5 )
        this.selectedtheminoRotated =  Math.floor(Math.random() * 4 )
        this.score = 0
        this.scoreDisplay = scoreDisplay
        this.currentRealTetromino = []
        this.currentViewTetromino = []
        this.theRealTetrominoes = []
        this.theViewTetrominoes = []
        this.selectedColor = this.colors[ Math.floor(Math.random() * this.colors.length)]
        this.mainBoard = mainBoard
        this.resetBtn=resetBtn
        this.createShape(10)
        this.createShape(5)
        this.timerId = timerId
        this.timeId = timeId
    }
    createShape(width){
        let GRID_WIDTH
        let GRID_HEIGHT
        if(width === 10){
            GRID_WIDTH =  this.realShape.width
            GRID_HEIGHT = this.realShape.height
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
            this.theRealTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]
       
            this.currentRealTetromino = this.theRealTetrominoes[this.selectedTermino][this.selectedtheminoRotated]
        }
        else if(width === 5){
            GRID_WIDTH =  this.viewShape.width
            GRID_HEIGHT = this.viewShape.height
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
            this.theViewTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]
       
            this.currentViewTetromino = this.theViewTetrominoes[this.selectedTermino][this.selectedtheminoRotated]
        }
        
        this.draw(width)
    }
    draw(width){
      if(width === 10){
        this.currentRealTetromino.forEach(index => {
            this.realShape.selectedElement[this.realShape.startPosition + index].classList.add('tetromino')
            this.realShape.selectedElement[this.realShape.startPosition + index].style.background = this.selectedColor
        })
      }
      else if(width === 5){
        this.currentViewTetromino.forEach(index => {
            this.viewShape.selectedElement[this.viewShape.startPosition + index].classList.add('tetromino')
            this.viewShape.selectedElement[this.viewShape.startPosition + index].style.background = this.selectedColor
        })
      }
       
    }
    undraw(width){
        if(width === 10){
           
            this.currentRealTetromino.forEach(index => {
                this.realShape.selectedElement[this.realShape.startPosition + index].classList.remove('tetromino')
                this.realShape.selectedElement[this.realShape.startPosition + index].style.background = 'black '
            })
           
        }
        else{
            this.currentViewTetromino.forEach(index => {
                this.viewShape.selectedElement[this.viewShape.startPosition + index].classList.remove('tetromino')
                this.viewShape.selectedElement[this.viewShape.startPosition + index].style.background = 'black '
            })
        }
    }
    moveDown(){
        this.undraw(10)
        this.realShape.startPosition += this.realShape.width
        this.draw(10)
        this.freeze()
    }
    moveLeft() {
        this.undraw(10)
        const isAtLeftAge = this.currentRealTetromino.some(index => (this.realShape.startPosition + index)  % this.realShape.width === 0)
        if(!isAtLeftAge) this.realShape.startPosition -= 1

        if(this.currentRealTetromino.some(index =>  this.realShape.selectedElement[this.realShape.startPosition + index].classList.contains('taken'))){
            this.realShape.startPosition +=1
        }
        this.draw(10)
    }
    moveRight(){
       
        this.undraw(10)
        const isAtLeftAge = this.currentRealTetromino.some(index => (this.realShape.startPosition + index)  % this.realShape.width === this.realShape.width -1)
        if(!isAtLeftAge) this.realShape.startPosition +=1

        if(this.currentRealTetromino.some(index =>  this.realShape.selectedElement[this.realShape.startPosition + index].classList.contains('taken'))){
            this.realShape.startPosition -=1
        }
        this.draw(10)
    }
    freeze(){
      
        if(this.currentRealTetromino.some(index => this.realShape.selectedElement[this.realShape.startPosition + index + this.realShape.width].classList.contains('taken'))){
            this.undraw(5)
            this.currentRealTetromino.forEach(index => {
                this.realShape.selectedElement[this.realShape.startPosition + index].classList.add('taken')
             })
            let random = Math.floor(Math.random() * 5)
            this.selectedTermino = random
            this.selectedtheminoRotated = Math.floor(Math.random() * 4)
            this.currentRealTetromino = this.theRealTetrominoes[random][this.selectedtheminoRotated]
            this.currentViewTetromino = this.theViewTetrominoes[random][this.selectedtheminoRotated]
            let randomStartPosition
            randomStartPosition = 4
            this.realShape.startPosition = randomStartPosition
            this.selectedColor = this.colors[ Math.floor(Math.random() * this.colors.length)]
            this.draw(10)
            randomStartPosition = 6
            this.viewShape.startPosition = randomStartPosition
            this.draw(5)
            this.addScore()
            this.gameOver()
               
        }
       
    }
    rotate(){
       this.undraw(10)
       this.selectedtheminoRotated ++
       if(this.selectedtheminoRotated === 4 ){
        this.selectedtheminoRotated = 0
       }
       this.currentRealTetromino = this.theRealTetrominoes[this.selectedTermino][this.selectedtheminoRotated]
       this.draw(10)
    }
    addScore(){
        for(let  i=0; i< 200; i += this.realShape.width){
            const row = [i, i+1, i+2,i+3,i+4,i+5,i+6,i+7,i+8,i+9]
           
            if(row.every(index => this.realShape.selectedElement[index].classList.contains('taken'))){
                this.score += 10
                this.scoreDisplay.innerText = this.score
                row.forEach(index => {
                    this.realShape.selectedElement[index].style.background ='black'
                    this.realShape.selectedElement[index].classList.remove('taken')  || this.realShape.selectedElement[index].classList.remove('tetromino')
                })
                const squaresRemoved = this.realShape.selectedElement.splice(i, this.realShape.width)
                this.realShape.selectedElement = squaresRemoved.concat(this.realShape.selectedElement)
                console.log(this.realShape)
                this.realShape.selectedElement.forEach(cell =>  this.mainBoard.appendChild(cell))
            }
        }
    }
    gameOver(){
        if(this.currentRealTetromino.some(index => this.realShape.selectedElement[this.realShape.startPosition + index].classList.contains('taken'))){
              this.scoreDisplay.innerText ='Game over'
              this.resetBtn.style.display = 'block'
              clearInterval(timerId)
              clearInterval(timeId)
              timerId = null
              timeId= null
              return true
        }
    }
    reset(){
        
        clearInterval(this.timerId)
        this.scoreDisplay.innerText=0
        

    }
  
}
