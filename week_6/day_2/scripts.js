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
    var main = document.querySelector('.output');
    for (var obj of arr){
        var div = document.createElement('div');
        var h3 = document.createElement('h3');
        h3.innerHTML = 'User information';
        div.appendChild(h3);
        for(prop in obj){
            var p = document.createElement('p');
            p.innerText = `${prop}: ${obj[prop]}`;
            div.appendChild(p);
            // console.log(`
            // ${prop}: ${obj[prop]}
            // `);
        }
        main.appendChild(div);
    }
}

printer(users1);
