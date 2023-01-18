// function test(){

// }

// //expression function

// var nomad = function(){
//     console.log('nomad');
// }

// //arrow function

// var add = (a,b) => a+b;
// var sum = add(5,10);

// //if only one paramater

// var printNAme = name => console.log(name);

// printNAme('Fran');

// console.log(sum);

var data = {
    name: 'fran',
    age: '37',
    hobbies: ['fishing', 'coding'],
    printName: function(){
        var capitalize = () => this.name[0].toUpperCase() + this.name.slice(1);
        
        this.name = capitalize();

        console.log(this.name);
    }
}

data.printName();