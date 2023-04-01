function arrayManipulations(input) {

    let arr = input[0].split(' ').map(Number);
    let commands = input.slice(1);

    for (let i = 0; i < commands.length; i++) {
        let tokens = commands[i].split(' ');
        let command = tokens[0];
        let params = tokens.slice(1).map(Number);
        arr = funcCommands(command, params, arr);

    }
        return arr.join(" ");
        return arr;

    function funcCommands(command, params, arr) {
        switch (command) {
            case "Add": arr.push(params[0]); return arr;
            case "Remove": arr = arr.filter(x => x !== params[0]); return arr;
            case "RemoveAt": arr.splice(params[0], 1); return arr;
            case "Insert": arr.splice(params[1], 0, params[0]); return arr;
        }
        return arr.join(" ");
    }

}



console.log(arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']));