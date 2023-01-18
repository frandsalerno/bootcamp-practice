// var baseURL = 'https://swapi.dev/api/';

// fetch(baseURL + 'people')
//     .then(res => res.json())
//     .then(data => console.log(data));

// var vs const & let
// console.log(age);

var age = 37;

if(true){
    var test = 'test';
}

// console.log(test);

// LET

let age2 = 43;
age2++;

// console.log(age2);

if(true){
    let something = 'something';
}

// console.log(something);


const age3 = 40;
// age3++;

// console.log(age3);

const fruits = ['orange', 'apple', 'kiwi'];

// fruits.forEach(fruit => console.log(fruit));

const newArr = fruits.map(fruit => {
    return fruit + ' is a great way to build your immunity';
});

// console.log(newArr);

const data = [
    {
        name: 'Fran',
        age: 37
    },
    {
        name: 'Onder',
        age: 30
    },
    {
        name: 'Sarah',
        age: 20
    },
    {
        name: 'Sarah',
        age: 30
    }
];

const onder = data.find(obj => obj.name === 'Onder');
const sarah = data.find(obj => obj.name === 'Sarah');

const filtered = data.filter(obj => obj.name !== 'Sarah');

const sorted = data.sort((a,b) => b.age - a.age);

console.log(sorted);

