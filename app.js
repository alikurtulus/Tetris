
 const mainBoard = document.querySelector('.grid')
 const shapeBoard = document.querySelector('.shape-container')
 

 const colors = ['red','magenta','green','blue','yellow','pink','purple','brown','gray']
 const score = document.querySelector('#score')
 // Create your board
 const myShapeBoard = new Board(16,'cell',shapeBoard)
 const myNewBoard = new Board(200,'cell',mainBoard)


 //Draw your board
  myNewBoard.createBoard(200)
  myShapeBoard.createBoard(16)
 
 let myBoardSquares = Array.from(document.querySelectorAll('.grid div'))
 let myShapeBoardSquares = Array.from(document.querySelectorAll('.shape-container div'))
 

 let selectedColor = Math.floor(Math.random * (colors.length))
 let mainShape = new Shape(4,colors[selectedColor],10,20,myBoardSquares)
 let selectedShape = new Shape(2,colors[selectedColor],4,4,myShapeBoardSquares)

 let currentShape = Math.floor(Math.random() * 5 )
 let selectedShapeIndex = Math.floor(Math.random() * 4)
 mainShape.createShape(currentShape,selectedShapeIndex)
 selectedShape.createShape(currentShape,selectedShapeIndex)


