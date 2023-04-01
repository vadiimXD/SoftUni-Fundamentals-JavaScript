function race(arr) {
    let playersInGame = {};
    let players = arr.shift().split(", ")
    let patternNames = /(?<name>[A-Za-z])/g
    let patternDistance = /\d/g
    for (const player of players) {
        playersInGame[player] = 0;
    }
    for (const line of arr) {
        if (line === "end of race") {
            break;
        }
        let name = line.match(patternNames).join("");
        let distance = line.match(patternDistance);
        let totalDistance = 0;
        for (const el of distance) {
            totalDistance += Number(el)
        }

        if (playersInGame.hasOwnProperty(name))
            playersInGame[name] += Number(totalDistance)
    }
    let entries = Object.entries(playersInGame).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${entries[0][0]}`)
    console.log(`2nd place: ${entries[1][0]}`)
    console.log(`3rd place: ${entries[2][0]}`)
}

race(['George, Peter, Bill, Tom',

    'G4e@55or%6g6!68e!!@ ',

    'R1@!3a$y4456@',

    'B5@i@#123ll',

    'G@e54o$r6ge#',

    '7P%et^#e5346r',

    'T$o553m&6',

    'end of race']);