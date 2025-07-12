// js/main.ts
var student1 = {
    firstName: 'Alice',
    lastName: 'Wanjiku',
    age: 21,
    location: 'Nairobi'
};
var student2 = {
    firstName: 'Brian',
    lastName: 'Odhiambo',
    age: 22,
    location: 'Kisumu'
};
var studentsList = [student1, student2];
var table = document.createElement('table');
table.border = '1';
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
document.body.appendChild(table);
