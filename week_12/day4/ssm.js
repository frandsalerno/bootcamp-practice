const Course = require('./course');

class SSM extends Course {
    constructor(class_code, grad_date, name){
        super(class_code, grad_date);
        this.name = name;
    }

    printName(){
        console.log(this.name);
    }
}

module.exports = SSM;