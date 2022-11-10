//unchanging go in the global scope
var choices = ['r', 'p', 's'];
var winningCond = ['pr', 'sp', 'rs']

var scored = 0;
var scorew = 0;
var scorel = 0;

for (counter=0;counter<10;counter++) {
    //changing variables go in the loop cycle
    var userChoice = prompt('Choose r, p or s');
    var compChoice = choices[Math.floor(Math.random()*choices.length)];
    
    // console.log(compChoice, userChoice)
    var result = userChoice + compChoice;

    //if user choice is the same as computer choice, this is a draw
    if(userChoice===compChoice){
        alert('This is a draw');
        scored++;
        //If the winningcond includes the result
    }else if(result===winningCond){
        //The user won
        alert('You win');
        scorew++;
        //else the user lost
    }else{
        alert('You lose');
        scorel++;
    }
}

alert('You tied '+scored+' times, You win '+scorew+' times and you lost '+scorel+' times');
