'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (arr1, arr2) => {
    const allStudentsClone = [...arr1];
    const failedStudentsClone = [...arr2];

    for (let key1 of allStudentsClone) {
        for (let key2 of failedStudentsClone) {
            if (key1 === key2) {
                allStudentsClone.splice(allStudentsClone.indexOf(key1), 1);
            }
        }
    }

    return allStudentsClone;
};

console.log(filter(allStudents, failedStudents));
