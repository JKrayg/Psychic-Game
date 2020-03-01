var allLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesleft = 9;
var badGuess = [];

var computerGuess = allLetters[Math.floor(Math.random() * allLetters.length)];
console.log(computerGuess);


function reset() {
    computerGuess = allLetters[Math.floor(Math.random() * allLetters.length)];
    guessesleft = 9;
    badGuess = [];
    console.log(computerGuess);
        
}


document.onkeyup = function(event) {
var userGuess = event.key;

if (userGuess == computerGuess) {
    wins++;
    reset()
    guessesleft++;

} if (userGuess != computerGuess) {
    guessesleft--;

} if (guessesleft === 0) {
    losses++;
    reset()

} else if (badGuess.indexOf(userGuess) === - 1) {
    badGuess.push(userGuess);

} else {
    guessesleft++;
}

document.getElementById("currentletter").innerHTML = "";
document.getElementById("userwins").innerHTML = "Wins: " + wins;
document.getElementById("userlosses").innerHTML  = "Losses: " + losses;
document.getElementById("guessesremaining").innerHTML = "Guesses left: " + guessesleft;
document.getElementById("playerguesses").innerHTML  = "Your guesses so far: " + badGuess;
}