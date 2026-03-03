
// Question 12: Create a student object and perform the following operations in one program:-

const student = {
  name: "Mayank kumar",
  age: 21,
  grade: "A",
};

student["school"] = "Meerut Public School";

delete student.grade;

const marks = {
  math: 98,
  english: 85,
  science: 76,
};

student["marks"] = marks; // Add the marks key in the object

for (let val in student.marks) {
  console.log(`${val} : ${student.marks[val]}`); //
}

student["greet"] = function () {
  console.log(`Hello , ${this.name} `);
};

console.log(student.greet());

