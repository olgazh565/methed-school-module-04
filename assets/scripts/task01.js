'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (allStudentsArr, failedStudentsArr) => {

    const succeededStudents = allStudentsArr.filter(item => failedStudentsArr.indexOf(item) === -1)

    return succeededStudents;
};

console.log(filter(allStudents, failedStudents));
