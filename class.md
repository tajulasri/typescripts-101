```javascript

class Student {

    first_name: string;
    last_name: string;
    matrixnumber: string;
    email: string;


    setFirstName(first_name: string) {
        this.first_name = first_name;
    }

    getFirstName() {
        return this.first_name;
    }
}

var student = new Student();
//console.log(student)
student.setFirstName("ali baba kassim")
console.log(student.getFirstName());


```