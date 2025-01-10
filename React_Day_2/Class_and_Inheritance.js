class Person {
    constructor(name, age) {
        this.fullName = name;  // Properly initialize properties
        this.age = age;
    }

    getFullName() {
        return this.fullName;  // Method to get fullname
    }

    getAge() {
        return this.age;  // Method to get age
    }
}

// Create an instance of the Person class
const person1 = new Person("Ghanashyam", 18);

// Log the properties directly
console.log(person1.fullName, person1.age);

// Log the results of the methods
console.log("Function called: ", person1.getFullName(), person1.getAge());

class Student extends Person{
    constructor(name,age,work,rollNo){
        super(name,age);
        this.work=work;
        this.rollNo=rollNo;
    }
    getWork(){
        return this.work;
    }
    greet(){
        console.log("Welcome: ",this.fullName);
    }
}

const st1 = new Student("Ghanashyam KC",18,"Study",16);
console.log("Full Name is",st1.fullName,"rollNo = ", st1.rollNo);
console.log(st1.getWork());
st1.greet();