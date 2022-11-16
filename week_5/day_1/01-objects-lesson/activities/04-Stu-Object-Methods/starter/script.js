//WRITE YOUR CODE BELOW
var menu = {
    tea: 90,
    coffee: 70,
    martini: 120
}

console.log(menu);

var totalMenu = 0;

for (var price of Object.values(menu)){
    totalMenu += price;
}

console.log('This is the total of the Menu: '+totalMenu);