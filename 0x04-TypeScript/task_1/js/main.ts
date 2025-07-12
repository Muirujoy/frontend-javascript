// 1. Teacher Interface
interface Teacher {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  [key: string]: any; // allows extra attributes like contract
}

// 2. Directors Interface extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage of Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// 3. printTeacherFunction Interface & Implementation
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // Output: J. Doe

// 4. Student Interfaces
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// 5. StudentClass Implementation
class StudentClass implements StudentInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage of StudentClass
const student = new StudentClass("Joy", "Muiru");
console.log(student.displayName()); // Output: Joy
console.log(student.workOnHomework()); // Output: Currently working
