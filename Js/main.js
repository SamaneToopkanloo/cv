// Player1

var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";   

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1); 


// Player2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// resetGame

function resetGame() {
   

}


// chang color

function rollDice() {
    
    const diceValue = Math.floor(Math.random() * 6) + 1;
  
    const colors = ['#Ad1832', '#6b25be', '#9b25be', '#Be2586', '#Be255b', '#Fd7487' ];
    const randomColor = colors[diceValue - 1];
  
    document.body.style.backgroundColor = randomColor;
    
  }



// Winne

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}