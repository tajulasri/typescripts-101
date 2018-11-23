## Constructor
### What is constructor -  block of code similar to a method that's called when an instance of an object is created

```javascript
class Student {

    first_name: string;
    last_name: string;
    matrixnumber: string;
    email: string;


    //initiate constructor
    constructor(first_name: string,last_name: string) {
        this.first_name = first_name;
        this.last_name = last_name;
    }

    setFirstName(first_name: string) {
        this.first_name = first_name;
    }

    getFirstName() {
        return this.first_name;
    }
}

var student = new Student("first name","last name");
//console.log(student)
console.log(student.getFirstName());




```