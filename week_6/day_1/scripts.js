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


// var title = document.body.children[0];

// var title = document.getElementById('main-header');

var title = document.querySelector('#main-header');

title.innerHTML = 'Almost December';

title.style.color = 'red';



