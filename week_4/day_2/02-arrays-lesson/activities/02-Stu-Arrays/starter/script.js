// WRITE YOUR CODE HERE

var students = ['Fran', 'Flor', 'Denu', 'Valentino']; 

console.log(students.length);

students.forEach(name => console.log('Welcome to the class ' + name));

students[0] = 'Daniel';

if (students[0] != 'Fran'){
    console.log(students[0] + ' is in class');
}

console.log(students[students.length - 1]);