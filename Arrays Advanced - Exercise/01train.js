function train(input) {
    let wagons = (((input.shift()).split(" ")).map(el => Number(el)));

    let maxCapacity = Number(input.shift())
    for (let elements of input) {
        let command = elements.split(" ")
        if (command[0] === "Add") {
            wagons.push(Number(command[1]))
        } else {
            let pass = Number(command[0]);
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + pass <= maxCapacity) {
                    wagons[i] += pass;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(" "))
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])