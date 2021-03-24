let playerTurn = 'playerOne'
let circles =  document.querySelectorAll('.circle')
// console.log(circles.length)
for (let i=0; i < circles.length; i++){


  circles[i].addEventListener('click', (event) => {
    if(event.target.classList.contains('available')){
    // console.log(event.target)
        if (playerTurn === 'playerOne'){
            event.target.classList.add('playerOne')
            // alert('playerOne')
            playerTurn= "playerTwo"
        }else {
            event.target.classList.add('playerTwo')
            // alert('playerTwo')
            playerTurn= 'playerOne'
        }


// check to see if 'available' has been clicked. if so move up one
        event.target.classList.remove('available')
        let currentCircleId = event.target.id
        let idArray = currentCircleId.split("")
        // console.log(idArray)
        let num = parseInt(idArray[1])
        num += 1
        idArray[1] = num
        const newId = idArray.join("")
        console.log(newId)
        document.querySelector(`#${newId}`).classList.add('available')
        console.log(currentCircleId)

     }
    })

  }

const reset = () => {
  circles.forEach(circle => {
    circle.classList.remove("playerOne")
    circle.classList.remove("playerTwo")
  })

}

//-------------------------------------------------------
//check array for winner
function checkWinner (){

let winningArrays = [
[0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10],
[34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24],
[21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31],
[13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3],
[0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22],
[40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18],
[3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25],
[37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15],
[6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24],
[41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10],
[14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17],
[6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31],
[21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18],
[5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22],
[2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25],
[40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32],
[11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4],
[5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
[15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25],
[26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30],
[36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28],
[8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31],
[11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]
];

for( let i = 0; i < winningArrays.length; i ++){
  let circle0 = circles[winningArrays[i][0]]
  let circle1 = circles[winningArrays[i][1]]
  let circle2 = circles[winningArrays[i][2]]
  let circle3 = circles[winningArrays[i][3]]
// console.log(circle0.classList)


  if (circle0.classList.contains('playerOne')
  && circle1.classList.contains('playerOne')
  && circle2.classList.contains('playerOne')
  && circle3.classList.contains('playerOne')){
  alert('Player One Wins!!')
  reset()
  }

  else if (circle0.classList.contains('playerTwo')
  && circle1.classList.contains('playerTwo')
  && circle2.classList.contains('playerTwo')
  && circle3.classList.contains('playerTwo')){
  alert('Player Two wins!!')
  reset()
        }

    }

}
circles.forEach(circle => circle.addEventListener('click', () => {
  checkWinner()
}))



// referenced petes tik tac toe solution
//   if (boxes[0].classList.contains('x') && boxes[1].classList.contains('x') && boxes[2].classList.contains('x')) {
//     playerWins(boxes, 'x')
//     hasWinner = true
//   } else if (boxes[0].classList.contains('o') && boxes[1].classList.contains('o') && boxes[2].classList.contains('o')) {
//     playerWins(boxes, 'o')
//     hasWinner = true
//   }
// })
