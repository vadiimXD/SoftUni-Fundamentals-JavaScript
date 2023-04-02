function solve(input) {

    let friends = input.shift().split(", ");

    let blacklistC = 0;
    let lostC = 0;


    while (input[0] !== "Report") {

        let [command, firstInput, secondInput] = input.shift().split(" ");
        let index, name, secName;


        switch (command) {

            case "Blacklist":
                name = firstInput;

                if (friends.includes(name)) {
                    blacklistC++;
                    console.log(`${name} was blacklisted.`);
                    friends[friends.indexOf(name)] = "Blacklisted";
                }
                else {
                    console.log(`${name} was not found.`);
                }
                break;

            case "Error":
                index = Number(firstInput);
                name = friends[index];

                if (index >= 0 && index <= friends.length - 1) {

                    if (name !== "Blacklisted" && name !== "Lost") {
                        lostC++;
                        friends[index] = "Lost"
                        console.log(`${name} was lost due to an error.`);
                    }

                }
                break;

            case "Change":
                index = Number(firstInput);
                name = friends[index];
                secName = secondInput;

                if (index >= 0 && index <= friends.length - 1) {
                    console.log(`${name} changed his username to ${secName}.`);
                    friends[index] = secName;
                }

                break;

        }

    }

    console.log(`Blacklisted names: ${blacklistC}`);
    console.log(`Lost names: ${lostC}`);
    console.log(friends.join(" "));
}


// solve((["Mike, John, Eddie",

//     "Blacklist Mike",

//     "Error 0",

//     "Report"]))

// solve((["Mike, John, Eddie, William", "Error 3", "Error 3", "Change 0 Mike123", "Report"]))
solve((["Mike, John, Eddie, William",

    "Blacklist Maya",

    "Error 1",

    "Change 4 George",

    "Report"]))