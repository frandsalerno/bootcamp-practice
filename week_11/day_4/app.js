const data = {
    name: 'Fran',
    age: '37',
    info: {
        lat: '12123123.1231',
        long: '212354.12312',
        location: 'Argentina'
    }
};


// const personAge = data.age;
const {age: personAge, name: personName, info: {location} } = data;

// console.log(personAge, personName, location);

function getWeather ({info: {location}}){
    console.log(location);
}

// getWeather(data);

const colors = ['orange', 'green','red'];

// const [o, a] = fruits;

// colors.push('brown');

console.log(...colors);