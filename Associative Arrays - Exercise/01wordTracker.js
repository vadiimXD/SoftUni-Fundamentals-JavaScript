function wordTracker(input) {
    obj = {};
    let wordsNeedToCheck = input.shift().split(" ");
    let words = input;
    for (const word of wordsNeedToCheck) {
        obj[word] = 0;
    }

    for (const word of input) {
        if (obj.hasOwnProperty(word)) {
            obj[word] += 1
        }
    }
    let entries = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    for (const [word, count] of entries) {
        console.log(`${word} - ${count}`)
    }

    // console.log(obj)
}

wordTracker([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'

]);