function schoolGrades(arr) {
    let students = {};
    let newGrades = [];
    for (const el of arr) {
        let token = el.split(" ");
        let name = token.shift()
        let grade = token.map(x => Number(x));
        let sum = 0;
        // let avarage = 0;
        if (students[name]) {
            
            for (let el1 of grade) {
                grade.push(el1)
            }
            // students[name] = students[name].concat(grade)
        } else {
            students[name] = grade
        }

        for (const num of grade) {


            sum += num;

        }
        let avarage = sum / grade.length;
        students[name] = grade
    }
    let entries = Object.entries(students).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, grade] of entries) {
        console.log(`${name}: ${grade}`)
    }
}

schoolGrades(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6']);

console.log(`------------------------------`)
schoolGrades(['Steven 3 5 6 4',

    'George 4 6',

    'Tammy 2 5 3',

    'Steven 6 3'])



/*
function schoolGrades(input) {
    let students = {};

    for (let line of input) {
        let student = line.split(` `);
        let name = student.shift();
        let grade = student.map(x => Number(x));
        if (students[name]) {
            students[name] = students[name].concat(grade)
        } else {
            students[name] = grade
        }
    }
    let sortStudents = Object.entries(students).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [name, grades] of sortStudents) {
        let sum = 0;
        for (let grade of grades) {
            sum += grade
        }
        let average = sum / grades.length;
        console.log(`${name}: ${average.toFixed(2)}`);
    }
}
 */