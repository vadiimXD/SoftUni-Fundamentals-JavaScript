function dictionary(data) {
    let obj = {};
    let words = data.shift().split(" | ");
    let testWords = data.shift().split(" | ");
    let command = data.shift();

    for (let i = 0; i < words.length; i++) {
        let [word, deff] = words[i].split(": ");
        if (obj.hasOwnProperty(word)) {
            obj[word].push(deff);
        } else {
            obj[word] = [];
            obj[word].push(deff);
        }
    }

    if (command === "Test") {
        for (let i = 0; i < testWords.length; i++) {
            let word = testWords[i];
            if (obj.hasOwnProperty(word)) {
                console.log(`${word}:`);
                for (let a = 0; a < obj[word].length; a++) {
                    console.log(` -${obj[word][a]}`);
                }
            }
        }
    } else {
        let keys = Object.keys(obj);
        console.log(keys.join(" "));
    }
}
// dictionary(["programmer: an animal, which turns coffee into code | developer: a magician",

//     "fish | domino",

//     "Hand Over"])

dictionary(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle:make determined efforts to deal with a problem | bit: a short time or distance", "bit | code | tackle", "Test"])

// dictionary(["care: worry, anxiety, or concern | care: a state of mind in which one istroubled | face: the front part of the head, from the forehead to the chin", "care | kitchen | flower", "Test"])