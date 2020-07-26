/* 1 Create a class called student. It should have 4 properties (firstName, lastName, age, grades) with a constructor to set them all. 
Create an instance method that returns a json string representing the object. */
class Student {
    constructor(firstName, lastName, age, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.grades = grades;
    }

    getStudentAsJSON() {
        return JSON.stringify(this); // JSON.stringify will just form a string out of "this"; "this" relates to the class Student properties
    }
}



let Alex = new Student("Alex", "Burgess", 21, [68, 97, 32, 70]); // new Student == normal creation of object
let AlexAsJSON = Alex.getStudentAsJSON(); // Alex. to get the Alex var and . 
console.log(Alex)
console.log(AlexAsJSON); //

/* 2 Create a static method that takes a json string representing the object and returns a new instance of student */

// class Student {
//     constructor(firstName, lastName, age, grades) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.grades = grades;
//     }

//     getStudentAsJSON() {
//         return JSON.stringify(this); // JSON.stringify will just form a string out of "this"; "this" relates to the class Student properties
//     }

//         static toStudent(jsonStudent) {
//             let obj = JSON.parse(jsonStudent); // JSON.parse will turn the string into an object
//             return new Student(obj.firstName, obj.lastName, obj.age, obj.grades); // this is now an object
//         }

// }

// let Alex = new Student("Alex", "Burgess", 21, [68, 97, 32, 70]); // new Student == normal creation of object
// let AlexAsJSON = Student.toStudent; // Alex. to get the Alex var and . 
// console.log(AlexAsJSON); //


// 1 Create a method that writes an array of students to a json file

// let students = [
//     new Student ("Alex", "Burgess", 21, [68, 97, 32, 70]),
//     new Student ("John", "Burgess", 21, [68, 97, 32, 70]),
// ]

// JSON.stringify turns an object into a string
// JSON.parse turns a string into an object
// fs.writeFileSync is used to create a file
// fs.readFileSync is used to read a file and you can use JSON.stringify or JSON.parse to edit the contents of that file being read
// If buffer, the bites inside the file. We can use to string to represent those buffers as strings


