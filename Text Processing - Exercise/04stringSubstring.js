function stringSubstring(word, text) {
    let textInLower = text.toLowerCase()
    word = word.toLowerCase()
    if (textInLower.includes(word)) {
        console.log(word)
    } else {
        console.log(`${word} not found!`)
    }
}

stringSubstring('jaascript', 'JavaScript is the best programming language');