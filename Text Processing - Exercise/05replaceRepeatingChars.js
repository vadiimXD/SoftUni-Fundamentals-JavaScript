function replaceRepeatingChars(str) {

    let modifiedStr = '';

    for (let i = 0; i < str.length; i++) {

        if (str[i] !== str[i - 1]) {
            modifiedStr += str[i];
        }
    }

    console.log(modifiedStr)
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');