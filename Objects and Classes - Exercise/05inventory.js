function inventory(arr) {
    let obj = {};
    let res = [];
    for (let line of arr) {
        let [name, level, items] = line.split(" / ");
        items = items.split(", ")
        obj = {
            Hero: name,
            level: level,
            items: items,
        }
        res.push(obj)
        res.sort((heroA, heroB) => heroA.level - heroB.level);
      
    }

for(let el of res) {

    console.log(`Hero: ${el.Hero}`)
    console.log(`level => ${el.level}`)
    console.log(`items => ${el.items.join(", ")}`)
}
}

inventory([

    'Isacc / 25 / Apple, Gravi tyGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'

]);