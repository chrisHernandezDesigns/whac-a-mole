const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPostition
let currentTime = 60
let timerId = null

function randomSquare(){
    squares.forEach(square => { //selects all squares and removes mole class
        square.classList.remove('mole')
    })
    
    let randomSquare = squares[Math.floor(Math.random() * 9)] //selects at random and adds mole class
    randomSquare.classList.add('mole')

    hitPostition = randomSquare.id
}

squares.forEach(square =>{
    square.addEventListener('mousedown', () =>{ //keeps score of hitpoints
        if(square.id == hitPostition){
            result++
            score.textContent = result
            hitPostition = null
        }
    })
})

function moveMole(){
    timerId = setInterval(randomSquare, 500) //moves mole at 1000ms
}


moveMole();

function countDown(){ //time count down
currentTime --
timeLeft.textContent = currentTime
if(currentTime == 0){
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('GAME OVER! Your Final Score is ' + result)
}
}

let countDownTimerId = setInterval(countDown, 1000)