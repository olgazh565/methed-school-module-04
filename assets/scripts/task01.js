'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (allStudentsArr, failedStudentsArr) => {

    return allStudentsArr.filter(item => failedStudentsArr.indexOf(item) === -1)

};

console.log(filter(allStudents, failedStudents));
