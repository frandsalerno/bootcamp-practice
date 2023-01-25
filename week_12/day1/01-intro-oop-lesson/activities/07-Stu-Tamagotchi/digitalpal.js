function DigitalPal(pet_name) {
    this.name = pet_name;
}

DigitalPal.prototype.printName = function() {
    console.log(`Hi, I am ${this.name}`);
}

const teddy = new DigitalPal('Teddy');
const larry = new DigitalPal('Larry');

teddy.printName();
larry.printName();