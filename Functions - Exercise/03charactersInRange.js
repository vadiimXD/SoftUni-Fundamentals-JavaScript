function charactersInRange(start, end) {
    let buff = "";
    let startCharInNumber = startChar(start);
    let endCharInNumber = endChar(end);
    let returnChars = forLoop(startCharInNumber, endCharInNumber)

    function startChar(start) {
        return start.charCodeAt(0);
    }

    function endChar(end) {
        return end.charCodeAt(0);
    }

    function forLoop(startCharInNumber, endCharInNumber) {
        if (startCharInNumber < endCharInNumber) {
            for (let i = startCharInNumber + 1; i < endCharInNumber; i++) {

                buff += String.fromCharCode(i) + " ";
            }
        } else {
            for (let i = endCharInNumber + 1; i < startCharInNumber; i++) {

                buff += String.fromCharCode(i) + " ";
            }
        }
        return buff;
    }
    console.log(buff)
}

charactersInRange('a',
    'd');
console.log(`------------------`)
charactersInRange('#',
    ':');
console.log(`------------------`)
charactersInRange('C',
    '#');