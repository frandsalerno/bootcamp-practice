// var students = ['Bob', 'Jane', 'Timmy'];

// for (var index = 0; index < students.length; index++){
//     console.log(students[index]);
// }

// students.forEach(name => console.log('Welcome to the class ' + name));

// console.log(students[1]);

// alert('Hey, this is cool!');

// var response = confirm('Would you like to contoinue playing?');

// response = prompt('Please enter your name');

// console.log(response);

// if (response){
//     alert('it ss true');
// }

// var color = prompt('Give me your favorite color');

// document.body.style.background=color;




for (;true;) {
    // Define a random number between 1 and 5
    var myNumber = (Math.floor(Math.random()*5)+1);

    //Prompt the user to guess the number
    var userNumber = prompt('Guess a number between 1 and 5');

    // console.log(userNumber);

    //check IF the random number matches the user's chocie
    if (myNumber==userNumber){
        //if they guess it right ALERT stars icons and Well done and change the background color to tomato
        alert('Well done ⭐️');
        // document.body.style.background='tomato';
        //if they don't guess it, alert TRY AGAIN, and print a big L
    } else {
    alert('Try again');
    // document.body.style.fontSize = '275px';
    // document.body.innerText = "L";
    }

    var keepPlaying = confirm ('Keep playing?');

    if (!keepPlaying){
        break;
    }
}

// console.log(Math.floor(Math.random()*5)+1);