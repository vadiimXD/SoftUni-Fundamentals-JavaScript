function companyUsers(input) {
    let company = {};

    for (const companyData of input) {
        let [companyName, employee] = companyData.split(" -> ")

        if (!company.hasOwnProperty(companyName)) {
            company[companyName] = [];
            company[companyName].push(employee)

        } else if (company[companyName].includes(employee)) {

        } else {
            company[companyName].push(employee)

        }
    }

    let entries = Object.entries(company).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, emp] of entries) {
        console.log(`${name}`)
        // let names = emp.split(" ")
        for (const el of emp) {
            console.log(`-- ${el}`)
        }
    }
}

companyUsers([

    'SoftUni -> AA12345',

    'SoftUni -> CC12344',

    'Lenovo -> XX23456',

    'SoftUni -> AA12345',

    'Movement -> DD11111'

])