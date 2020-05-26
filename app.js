
 const mainBoard = document.querySelector('.grid')
 const shapeBoard = document.querySelector('.shape-container')
 const scoreDisplay = document.querySelector('#score')
 const startBtn = document.querySelector('#btn-start')
 const resetBtn = document.querySelector('#btn-reset')
 const timeDisplay = document.querySelector('#time')
 let time = 0
 resetBtn.style.display = 'none'

 // Create your board
 const myShapeBoard = new Board(25,'cell',shapeBoard)
 const myNewBoard = new Board(210,'cell',mainBoard)
 let timerId
 let timeId 



 //Draw your board
  myNewBoard.createBoard(210)
  myShapeBoard.createBoard(25)
 
 let myBoardSquares = Array.from(document.querySelectorAll('.grid div'))
 let myShapeBoardSquares = Array.from(document.querySelectorAll('.shape-container div'))
 
 let viewShape = {
     startPosition:6,
     width:5,
     height:5,
     selectedElement:myShapeBoardSquares
 }
 let realShape = {
    startPosition:4,
    width:10,
    height:20,
    selectedElement:myBoardSquares
 }


const mainShape = new Shape(realShape,viewShape,mainBoard,scoreDisplay,timerId,resetBtn)
 
  

function control(e){
    if(e.keyCode === 37){
        if(timerId){
            mainShape.moveLeft()
        }
        
    }
    else if(e.keyCode === 38){
        if(timerId){
            mainShape.rotate()
        }
      
    }
    else if(e.keyCode === 39){
        if(timerId){
            mainShape.moveRight()
        }
         
    }
    else if(e.keyCode === 40){
        // moveDown
    }
}

document.addEventListener('keyup',control)
startBtn.addEventListener('click', () => {
    if(timerId){
        clearInterval(timerId)
        timerId = null
    }
    else{
        timerId = setInterval(function(){
            mainShape.moveDown()
         
         },500)
         
    }
    if(timeId){
        clearInterval(timeId)
        timeId = null
    }
    else{
        timeId = setInterval(() => {
            time +=1
            timeDisplay.textContent = time
        },1000)
    }

    
})


