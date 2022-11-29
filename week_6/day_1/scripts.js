var users1 = [
    {
        name: 'JD',
        age: 42
    },
    {
        name: 'Jane',
        age: 35
    },
    {
        name: 'Sarah',
        age: 38
    }
]

var users2= [
    {
        eyeColor: 'blue',
        height: 1.8
    },
    {
        eyeColor: 'green',
        height: 1.65
    }
]

function printer(arr){
    for (var obj of arr){
        for(prop in obj){
            console.log(`
            ${prop}: ${obj[prop]}
            `);
        }
    }
}

// printer(users2);

console.log(document.body.children[0]);

var newTitle = document.body.children[0];

newTitle.innerHTML = 'Almost December';

console.log(document.body.children[1].children[1]);

