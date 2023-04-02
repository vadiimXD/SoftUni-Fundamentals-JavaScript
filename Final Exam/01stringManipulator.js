function stringManipulator(input) {
    let string = input.shift();

    let line = input.shift();

    while (line !== 'End') {
        let value = line.split(' ');
        let command = value.shift();

        switch (command) {
            case 'Translate': {
                let [char, replacement] = value;
                while (string.includes(char)) {
                    string = string.replace(char, replacement);
                }
                console.log(string);
                break;
            }
            case 'Includes': {
                let subStr = value.shift();
                if (string.includes(subStr)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            }
            case 'Start': {
                let start = value.shift();
                let length = start.length;
                let startStr = string.slice(0, length);
                if (startStr === start) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            }
            case 'Lowercase': {
                string = string.toLowerCase();
                console.log(string);
                break;
            }
            case 'FindIndex': {
                let char = value.shift();
                let lastIndex = string.lastIndexOf(char);
                console.log(lastIndex);
                break;
            }
            case 'Remove': {
                let [start, count] = value;
                count = Number(count);
                start = Number(start)
                let end = start + count
                let replace = string.slice(start, end);
                string = string.replace(replace, '');
                console.log(string);
            }
        }
        line = input.shift();
    }
}
// stringManipulator(["//Thi5 I5 MY 5trING!//", "Translate 5 s", "Includes string", "Start //This", "Lowercase", "FindIndex i", "Remove 0 10", "End"])
stringManipulator(["*S0ftUni is the B3St Plac3**",

    "Translate 2 o",

    "Includes best",

    "Start the",

    "Lowercase",

    "FindIndex p",

    "Remove 2 7",

    "End"])