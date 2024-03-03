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

initializeGame()

// functions:

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