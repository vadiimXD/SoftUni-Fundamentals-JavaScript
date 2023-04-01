function phoneBook(arr) {
    let obj = {};
    arr.forEach(el => {
        let token = el.split(" ");
        let name = token[0];
        let phone = token[1];
        obj[name] = phone;
    });


    for (const key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`)
    }

}

phoneBook(['Tim 0834212554',

    'Peter 0877547887',

    'Bill 0896543112',

    'Tim 0876566344'])