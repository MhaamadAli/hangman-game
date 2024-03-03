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

const randomWord = getRandomWord(words);



// functions:

function getRandomWord(wordsArray) {
    return wordsArray[Math.floor(Math.random() * wordsArray.length)];
}