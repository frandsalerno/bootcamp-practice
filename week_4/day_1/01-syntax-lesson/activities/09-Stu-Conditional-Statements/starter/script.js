// Change the values and operators below to test your algorithm meets all conditions
var x = 51;
var expression1 = (x < 25);
var expression2 = (x > 50);
var output = expression1 && expression2;

// Write Your JavaScript Code Here
if (expression1 && expression2) {
    console.log('True ✅ True ✅');
} else if (expression1) {
        console.log('True ✅ False ❌');
} else if (expression2) {
        console.log('False ❌ True ✅ ');
} else{
    console.log('False ❌ False ❌');
}

// switch (output){
//     case (true): 
//     console.log ('True ✅ True ✅');
//     break;
//     case (false): 
//     console.log('True ✅ False ❌');
//     break;
//     case (expression2): 
//     console.log('False ❌ True ✅');
//     break;
//     default:
//     console.log('False ❌ False ❌');  
// }