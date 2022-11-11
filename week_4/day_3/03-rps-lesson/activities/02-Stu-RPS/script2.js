//Variables that don't change - STATIC
var choices = ['r','p', 's'];
var winningConditions = ['pr','rs','sp'];

//Stats variables that will change
var wins = 0, losses = 0, ties = 0;

//
while(true){
    var compChoice = choices[Math.floor(Math.random()*choices.length)];
    var userChoice = prompt('Choose r, p or s');
    var result = userChoice+compChoice;

    //comparison logic

    if(compChoice === userChoice){
        ties++;
        alert('You tied');
    } else if (winningConditions.includes(result)){
        wins++;
        alert('You won!');
    } else {
        losses++;
        alert('You lose');
    }
    alert(`Wins: ${wins}\nLosses: ${losses}\nTies: ${ties}`);
    
    var continuePlaying = confirm('Do you want to keep playing?');

    if (!continuePlaying){
        document.body.innerText = "Thanks for playing";
        break;
    }

}


