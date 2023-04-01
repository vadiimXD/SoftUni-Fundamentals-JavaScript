function commonElements(firstArr, secondArr) {

    for (let i = 0; i < firstArr.length; i++) {
        let firstWord = firstArr[i];
        for (let j = 0; j < secondArr.length; j++) {
            let secondWord = secondArr[j];

            if (firstWord === secondWord) {
                console.log(firstWord)
            }
        }
    }

}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);
console.log(`----------------------------`)
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])