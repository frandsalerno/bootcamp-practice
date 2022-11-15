var days = ['monday', 'tuesday', 'wednesday'];


var hobbies = ['football','running','cooking'];

var personInfo = ['Fran', 36, true, hobbies]; //bracket notation

// console.log(personData[3][3][0]);

// console.log(days[5]);

// console.log('something');

var data = {
    name: 'Fran',
    age: 36,
    isMarried: true,
    hobbies: hobbies
};

hobbies.push('Volleyball');

var startIndex = hobbies.length / 2;

hobbies.splice(startIndex, 0, 'SPOOORT');

console.log(data.hobbies);
// console.log((hobbies.length/2)-1);

var str = 'Some text';

console.log(str.length);