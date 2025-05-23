
//console.log(parseInt(Math.random() * 100 + 1));
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    //* validate the value between 1 to 100
    if (isNaN(guess)) {
        alert("Please enter a valid Number")
    } else if (guess < 1) {
        alert("Please enter a number grater then 1")
    } else if (guess > 100) {
        alert("Please enter a number less then 100")
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game over Random was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    //* check the Guesses of the user. The value is higher or lower
    if (guess == randomNumber) {
        displayMessage(`You Guessed it right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`The number is TOOO Low`)
    } else if (guess > randomNumber) {
        displayMessage(`The number is TOOO High`)
    }
}

function displayGuess(guess) {
    //* cleane the input section for the user to guess new Number. 
    userInput.value = "";
    guessSlot.innerHTML += `${guess},`; //* this is pushing vlaues
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message) {
    //*   
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    //*   
    userInput.value = "";
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    //*   
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p)
        playGame = true;
    })
}

