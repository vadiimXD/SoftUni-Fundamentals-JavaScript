function dungeonestDark(input) {
    let rooms = input[0].split("|");
    let health = 100;
    let needToHeal = 0;
    let finalCoins = 0;
    let boolean = true;
    let roomCounter = 0;
    for (let room of rooms) {
        let commands = room.split(" ");
        let whatWeDo = commands[0];
        let value = Number(commands[1])
        roomCounter++;
        if (whatWeDo === "potion") {
            if (value + health > 100) {
                value = value - (value + health - 100);
            }
            health += value;
            console.log(`You healed for ${value} hp.`)
            console.log(`Current health: ${health} hp.`)
        } else if (whatWeDo === "chest") {
            finalCoins += value;
            console.log(`You found ${value} coins.`)
        } else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${whatWeDo}.`)
            } else if (health <= 0) {
                boolean = false;
                console.log(`You died! Killed by ${whatWeDo}.`)
                console.log(`Best room: ${roomCounter}`)
                break;
            }
        }

    }
    if (boolean) {
        console.log(`You've made it!`);
        console.log(`Coins: ${finalCoins}`);
        console.log(`Health: ${health}`)

    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log(`-----------------------------------`)
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])