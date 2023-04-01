function adressBook(input) {
    let obj = {};
    input.forEach(el => {
        let token = el.split(":");
        let name = token[0];
        let phone = token[1];
        obj[name] = phone;
    });

    let entries = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, adress] of entries) {
        console.log(`${name} -> ${adress}`)
    }
}

adressBook(['Tim:Doe Crossing',

    'Bill:Nelson Place',

    'Peter:Carlyle Ave',

    'Bill:Ornery Rd'])