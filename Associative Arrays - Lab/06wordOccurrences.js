function wordOccurrences(input) {
    let words = {};
    for (const el of input) {


        if (words.hasOwnProperty(el)) {
            words[el] += 1
        } else {
            words[el] = 1
        }
    }

    let entries = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (const [word, count] of entries) {
        console.log(`${word} -> ${count} times`)
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
console.log(`---------------------`)
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])