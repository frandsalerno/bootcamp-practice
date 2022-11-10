// WRITE YOUR CODE HERE

var students = ['Fran', 'Flor', 'Denu', 'Valentino']; 
var original = students[0];

console.log(students.length);

students.forEach( => console.log('Welcome to the class ' + name));

students[0] = 'Daniel';

if (students[0] != original){
    console.log(students[0] + ' is in class');
} else {
    console.log('Fran is still in class');
}

console.log(students[students.length - 1]);