// Example usage of Directors
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    return firstName.charAt(0) + ". " + lastName;
};
console.log(printTeacher("John", "Doe")); // Output: J. Doe
// 5. StudentClass Implementation
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Example usage of StudentClass
var student = new StudentClass("Joy", "Muiru");
console.log(student.displayName()); // Output: Joy
console.log(student.workOnHomework()); // Output: Currently working
