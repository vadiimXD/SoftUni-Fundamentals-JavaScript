function oddOccurrences(input) {
    let map = new Map();
    input = input.split(' ').map(x => x.toLowerCase());

    for (let word of input) {
        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            let count = map.get(word);
            map.set(word, count + 1);
        }
    }

    map = new Map([...map].filter(x => x[1] % 2 !== 0));
    console.log([...map.keys()].join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');