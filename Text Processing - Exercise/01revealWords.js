function revealWords(needToReplace, text) {
    let textArr = text.split(" ")
    let wordsArr = needToReplace.split(", ")

    for (const word of wordsArr) {
        for (let index = 0; index < textArr.length; index++) {
            if (textArr[index].startsWith('*') && word.length === textArr[index].length) {
                textArr[index] = word;
            }
        }
    }
    console.log(textArr.join(" "))
}

revealWords('great', 'softuni is ***** place for learning new programming languages');