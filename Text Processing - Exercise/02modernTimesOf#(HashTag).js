function modernTimesOfHashtag(text) {
    let textArr = text.split(" ")
    let result = []
    let boolean = true;
    for (const word of textArr) {
        if (word.startsWith("#") && word.length > 1) {
            let newWord = "";
            for (const el of word) {
                if (el.charCodeAt() > 48 && el.charCodeAt() < 57) {
                    boolean = false;
                    newWord = "";
                    break;
                } else {
                    if (el !== "#") {
                        boolean = true;
                        newWord += el
                    }
                }
            }
            if (boolean === false) {

            } else {
                result.push(newWord)
            }
        }
    }
    console.log(result.join("\n"))
}

modernTimesOfHashtag('Nowadays #6everyone uses # to tag a p#al word in #socialMedia');