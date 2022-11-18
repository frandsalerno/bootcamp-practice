var str = 'some string';

function doSomething(){
    var privateVal = 'This is private';
    var anotherVal = 'another'
    // console.log('Do Something');
    return {
        priv: privateVal, 
        another: anotherVal
    };
}

// doSomething();

// if(true){
//     var age = 99;
// }

var vals = doSomething();
console.log(vals.priv);