function repeatingString(string, repeatTime) {
    let buff = "";
    let loops = forLoop(string, repeatTime);

    console.log(buff)

    function forLoop(text, repTimes) {
        for (let i = 1; i <= repTimes; i++) {
            buff += text
            
        }
        return buff;
    }

}


repeatingString("abc", 3);