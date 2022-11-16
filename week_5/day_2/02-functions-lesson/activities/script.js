var dog = {
    type: 'dog',
    breed: 'sausage',
    sound: 'woof!',
    legAmount: 4
}

var cat = {
    type: 'cat',
    breed: 'british shorthair',
    sound: 'meow!',
    legAmount: 4
}

var tarantula = {
    type: 'spider',
    breed: 'mexican red-knee',
    sound: null,
    legAmount: 8
}



// console.log(dog);
// console.log(cat);
// console.log(tarantula);

var petDB = [dog, cat, tarantula];
// console.log(Object.keys(tarantula));


// var tarantula = Object.keys(tarantula);

// console.log(petDB);

// for (i = 0; i < petDB.length; i++){
//     var pet = petDB[i];

//     var el = document.createElement('p');
//     el.innerText = `
//         Type: ${pet.type}
//         Breed: ${pet.breed}
//         Sound: ${pet.sound}
//         Amount of legs: ${pet.legAmount}
//     `;

//     document.body.append(el);
    
//     // console.log(`
//     //     Type: ${pet.type}
//     //     Breed: ${pet.breed}
//     //     Sound: ${pet.sound}
//     //     Amount of legs: ${pet.legAmount}
//     // `);
// }


// for(var pet of petDB ){
//     // console.log(x);
//     console.log(`
//         Type: ${pet.type}
//         Breed: ${pet.breed}
//         Sound: ${pet.sound}
//         Amount of legs: ${pet.legAmount}
//     `);

//     // if (pet.type === 'cat') break;
// }

// for(var prop in tarantula ){
//     // var pet = petDB[i];
//     console.log(`${prop}: ${tarantula[prop]}`);
// }


// for(var prop of Object.keys(tarantula) ){
//     // var pet = petDB[i];
//     console.log(`${prop}: ${tarantula[prop]}`);
// }

for(var val of Object.values(tarantula) ){
    // var pet = petDB[i];
    // console.log(`${val}: ${tarantula[val]}`);
    console.log(val);
}

