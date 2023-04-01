function employees(arr) {
    let obj = {};

    for (let employees of arr) {
        // let personalNum = employees.length;
        obj[employees] = employees.length;

        // console.log(`Name: ${employees} -- Personal Number: ${personalNum}`)
    }

    for (let key of Object.keys(obj)) {
        console.log(`Name: ${key} -- Personal Number: ${obj[key]}`)
    }
}

employees([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

]);