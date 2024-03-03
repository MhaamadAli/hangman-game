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

const randomWord = getRandomWord(words)

const letterButtons = document.querySelectorAll(".letter")

initializeGame()

// functions:

function handleButtonClick(event) {
    const clickedLetter = event.target.textContent.toLowerCase();
    
    // Process the clicked letter
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


// Process the clicked letter
function handleLetter(clickedLetter) {
    const index = clickedLetter.charCodeAt(0) - 97
    if (index >= 0 && index <= 25) {
        if (!isLetterInWord(clickedLetter)) { // If the letter is not in the word
            applyPenalty(); // Apply penalty
        } else { // If the letter is in the word
            displayLetter(clickedLetter); // Update displayed word
            drawDashes(displayedWord); // Redraw display
        }
    }
}

function isLetterInWord(letter) {
    return randomWord.includes(letter);
}

function applyPenalty() {
    penaltyCount += 1
}


function displayLetter(letter) {
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === letter) {
            // Replace character at index with guessed letter
            displayedWord = setCharAt(displayedWord, i, letter);
        }
    }
}

// Helper function to replace character at specific index in a string
function setCharAt(str, index, char) {
    if (index < 0 || index >= str.length) return str;
    return str.substring(0, index) + char + str.substring(index + 1);
}