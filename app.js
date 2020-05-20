
 const mainBoard = document.querySelector('.grid')
 const shapeBoard = document.querySelector('.shape-container')
 

 const colors = ['red','magenta','green','blue','yellow','pink','purple','brown','gray']
 const score = document.querySelector('#score')
 // Create your board
 const myShapeBoard = new Board(25,'cell',shapeBoard)
 const myNewBoard = new Board(210,'cell',mainBoard)


 //Draw your board
  myNewBoard.createBoard(210)
  myShapeBoard.createBoard(25)
 
 let myBoardSquares = Array.from(document.querySelectorAll('.grid div'))
 let myShapeBoardSquares = Array.from(document.querySelectorAll('.shape-container div'))
 

 let selectedColor = Math.floor(Math.random() * colors.length)
 let mainShape = new Shape(4,colors[selectedColor],10,30,myBoardSquares,true)
 let selectedShape = new Shape(1,colors[selectedColor],5,5,myShapeBoardSquares,true)

 let currentShape = Math.floor(Math.random() * 5 )
 let selectedShapeIndex = Math.floor(Math.random() * 4)
 mainShape.createShape(currentShape,selectedShapeIndex)
 selectedShape.createShape(currentShape,selectedShapeIndex)
 const timerId = setInterval(function(){
    mainShape.moveDown()
 },1000)

