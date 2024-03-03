// variables:

let penaltyCount = 0
let displayedWord = ""
let gameOver = false

const words = [
    "taha",
    "charbel",
    "fly",
    "code",
    "sleep",
    "assignment",
    "due",
    "tech"
]

const penaltyFunctions = [
    head,
    body,
    leftHand,
    rightHand,
    leftLeg,
    rightLeg
];

const randomWord = getRandomWord(words)

const letterButtons = document.querySelectorAll(".letter")

initializeGame()

// functions:

function handleButtonClick(event) {
    const clickedLetter = event.target.textContent.toLowerCase();
    
    
    handleLetter(clickedLetter);
}

letterButtons.forEach(function (letterButton) {
    letterButton.addEventListener("click", handleButtonClick);
});


function getRandomWord(wordsArray) {
    return wordsArray[Math.floor(Math.random() * wordsArray.length)]
}



function initializeGame() {
    displayedWord = "-".repeat(randomWord.length)
    drawDashes(displayedWord)
}


function drawDashes(word) {
    const answerSection = document.getElementById("answer-section")
    answerSection.innerHTML = ""

    word.split('').forEach(character => {
        answerSection.innerHTML += `<span>${character}</span>`
    })
}

document.addEventListener("keypress", function(event) {
    const pressedKey = event.key.toLowerCase();
    if (isAlphabet(pressedKey)) {
        handleLetter(pressedKey);
    }
})

function handleLetter(clickedLetter) {
    if (!gameOver) {
        const index = clickedLetter.charCodeAt(0) - 97
        if (index >= 0 && index <= 25) {
            if (!isLetterInWord(clickedLetter)) { 
                applyPenalty(); 
            } else { 
                displayLetter(clickedLetter); 
                drawDashes(displayedWord); 
            }
        }
        checkGameStatus()
    }
}

function isAlphabet(char) {
    return char >= 'a' && char <= 'z';
}


function isLetterInWord(letter) {
    return randomWord.includes(letter);
}

function applyPenalty() {
    if (penaltyCount < penaltyFunctions.length) {
        penaltyFunctions[penaltyCount]();
        penaltyCount++;
    } else {
        penaltyCount = penaltyFunctions.length;
    }
}


function displayLetter(letter) {
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === letter) {
            
            displayedWord = setCharAt(displayedWord, i, letter);
        }
    }
}


function setCharAt(str, index, char) {
    if (index < 0 || index >= str.length) return str;
    return str.substring(0, index) + char + str.substring(index + 1);
}


function checkGameStatus() {
    if (displayedWord === randomWord) {
        gameOver = true;
        alert("Congratulations! You've won!");
        restartGame();
    } else if (penaltyCount === penaltyFunctions.length) {
        gameOver = true;
        alert("Game over! You've lost. The word was: " + randomWord);
        restartGame();
    }
}


function restartGame() {
    setTimeout(function () {
        location.reload()
    }, 2500)
}
