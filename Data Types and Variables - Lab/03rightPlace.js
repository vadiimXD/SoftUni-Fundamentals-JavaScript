function rightPlace(str, char, result) {
    let res = str.replace('_', char);
    let output = res === result ? "Matched" : "Not Matched";
    console.log(output)
}

rightPlace('Str_ng', 'I', 'Strong')



function rightPlace(text, char, result) {
    let string = "";

    for (let i = 0; i < text.length; i++) {
        if (text[i] === "_") {
            string += char;
        } else {
            string += text[i];
        }
    }
    console.log(string === result ? "Matched" : "Not Matched")
}

rightPlace('Str_ng', 'I', 'Strong')