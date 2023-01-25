function Person (name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.haveBirthday = function(){
    this.age++;
    console.log('Happy Birthday!');
}

Person.prototype.printDetails = function(){
    console.log(`Name: ${this.name} | Age: ${this.age} `);
}

module.exports = Person;;