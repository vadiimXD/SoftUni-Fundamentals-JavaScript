function houseParty(input) {
    let newArr = []
    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        let type = command.split(' is ')

        if (type[1] === "going!") {
            newArr.push(type[0])
        } else {
            console.log(`${type[0]} is not in the list!`)
        }
    }
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);