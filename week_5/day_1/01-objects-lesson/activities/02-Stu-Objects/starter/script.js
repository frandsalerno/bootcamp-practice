//WRITE YOUR CODE BELOW
var customerOrder = {
    drinksName : 'Martini',
    sugars : 4,
    ready : true
}

console.log(customerOrder.drinksName);
console.log(customerOrder.sugars);

if (customerOrder.ready){
    console.log('Ready for pick-up');
}else{
    console.log('Still in order queue');
}