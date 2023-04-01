function ladyBugs(tokens) {
    let fieldSize = +tokens[0];
    let ladyBugs = [];

    for (let i = 0; i < fieldSize; i++) {
        ladyBugs[i] = 0;
    }

    let initialIndexes = tokens[1].split(' ').map(index => +index);

    for (let i = 0; i < ladyBugs.length; i++) {
        if (initialIndexes.includes(i)) {
            ladyBugs[i] = 1;
        }
    }


    for (let i = 2; i < tokens.length; i++) {
        let command = tokens[i].split(' ');

        if (command[0].toLowerCase() !== 'end') {
            let index = +command[0];

            if (index < 0 || index >= ladyBugs.length) {
                continue;
            }

            if (ladyBugs[index] === 0) {
                continue;
            }


            let direction = command[1];
            let flyLength = +command[2];

            if (flyLength < 0) {
                flyLength = Math.abs(flyLength);
                switch (direction) {
                    case 'right':
                        direction = 'left';
                        break;
                    case 'left':
                        direction = 'right';
                        break;
                }
            }

            ladyBugs[index] = 0;
            let isBugFlying = true;

            while (isBugFlying) {
                switch (direction) {
                    case 'right':
                        if (index + flyLength >= ladyBugs.length) {
                            isBugFlying = false;
                        } else {
                            if (ladyBugs[index + flyLength] === 0) {
                                ladyBugs[index + flyLength] = 1;
                                isBugFlying = false;
                            } else {
                                isBugFlying = true;
                                index += flyLength;
                            }
                        }
                        break;

                    case 'left':
                        if (index - flyLength < 0) {
                            isBugFlying = false;
                        } else {
                            if (ladyBugs[index - flyLength] === 0) {
                                ladyBugs[index - flyLength] = 1;
                                isBugFlying = false;
                            } else {
                                isBugFlying = true;
                                index -= flyLength;
                            }
                        }
                        break;
                }
            }
        }
    }

    console.log(ladyBugs.join(' '));
}

ladyBugs([3, '0 1',
    '0 right 1',
    '2 right 1'])