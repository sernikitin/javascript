var wordList =        
    [
        "trigonon",
        
    ];
const maxTries = 5;
var guessedLetters = [];
var currentWordIndex;
var guessingWord = [];
var remainingGuesses = 0;
var gameStarted = false;
var gameEnded = false;
var wins = 0;

function refresh() {
    remainingGuesses = maxTries;
    gameStarted = false;
    currentWordIndex = Math.floor(Math.random() * (wordList.length));
    guessedLetters = [];
    guessingWord = [];
    for (var i = 0; i < wordList[currentWordIndex].length; i++) {
        guessingWord.push("*");
    }
    document.getElementById("anyKeyToStart").style.cssText = "display: none";
    document.getElementById("gameover-image").style.cssText = "display: none";

    updateDisplay();
};
function updateDisplay() {

    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord[i];
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    document.getElementById("hideMain").style.visibility = "visible";
    if (remainingGuesses <= 0) {
        document.getElementById("gameover-image").style.cssText = "display: block";
        document.getElementById("anyKeyToStart").style.cssText = "display:block";
        document.getElementById("hideMain").style.visibility = "hidden";
        gameEnded = true;
    }
};
document.onkeydown = function (event) {
    if (gameEnded) {
        refresh();
        gameEnded = false;
    } else {

        if (event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};
function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (!gameStarted) {
            gameStarted = true;
        }
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            checkGuess(letter);
        }
    }
    updateDisplay();
    checking();
};
function checkGuess(letter) {
    var positions = [];
    for (var i = 0; i < wordList[currentWordIndex].length; i++) {
        if (wordList[currentWordIndex][i] === letter) {
            positions.push(i);
        }
    }
    if (positions.length <= 0) {
        remainingGuesses--;
    } else {

        for (var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
};
function checking() {
    if (guessingWord.indexOf("*") === -1) {
        document.getElementById("anyKeyToStart").style.cssText = "display: block";
        wins++;
        gameEnded = true;
    }
};





// function gamePlay(player){
  
//     var computerGuess = computer[Math.floor(Math.random() * computer.length)];
//     if ((player === "rock") || (player === "sciss") || (player === "paper"))
//     {
//         if ((player === "rock") && (computerGuess === "sciss")) {
//             document.getElementById("Play").innerHTML = '<img src="unnamed.png"  id="rock" onclick="gamePlay(getPlayer("rock"), computer)">'
//             // alert("you lost")
//         } else if ((player === "rock") && (computerGuess === "paper")) {
//             // alert("you lost")
//         } else if ((player === "sciss") && (computerGuess === "rock")) {
//             document.getElementById("Play").innerHTML = '<img src="scissors.png" id= "sciss" onclick="gamePlay(getPlayer("sciss"), computer)>'
//             document.getElementById("comp").innerHTML = '<img src="unnamed.png"  id="rock" onclick="gamePlay(getPlayer("rock"), computer)">'
//         } else if ((player === "sciss") && (computerGuess === "paper")) {
//             // alert("you won")
//         } else if ((player === "paper") && (computerGuess === "rock")) {
//             //alert("u won")
//             document.getElementById("Play").innerHTML = '<img id = "paper" onclick="gamePlay(getPlayer("paper"), computer)"  src="paper.png">'
//             document.getElementById("comp").innerHTML = '<img src="unnamed.png"  id="rock" onclick="gamePlay(getPlayer("rock"), computer)">'
//         } else if ((player === "paper") && (computerGuess === "sciss")) {
//             alert("u lost")
//         } else if (player === computerGuess) {
//             alert("try again")
//         }
//     console.log("ComputerPicked",computerGuess)
//     console.log("UserPicked", player)




