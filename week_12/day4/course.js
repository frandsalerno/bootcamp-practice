class Course {
    constructor(class_code, grad_date){
        this.class_code = class_code;
        this.grad_date = grad_date;
    }

    printClassCode(){
        console.log(this.class_code);
    }

    printGradDate(){
        console.log(this.grad_date);
    }

    printNAme(){
        console.log('Course');
    }
}

module.exports = Course;