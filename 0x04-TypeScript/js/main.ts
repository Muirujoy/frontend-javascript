// js/main.ts

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Wanjiku',
  age: 21,
  location: 'Nairobi',
};

const student2: Student = {
  firstName: 'Brian',
  lastName: 'Odhiambo',
  age: 22,
  location: 'Kisumu',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
table.border = '1';

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
