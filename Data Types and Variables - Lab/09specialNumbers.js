function specialNumbers(num) {

    for (let i = 1; i <= num; i++) {
        let numAsSting = i.toString();
        let sum = 0;

        for (let j = 0; j < numAsSting.length; j++) {
            let curChar = numAsSting[j];
            let curNum = Number(curChar);
            sum += curNum;

        }

        let isSpecial = (sum === 5 || sum === 7 || sum === 11);
        console.log(`${i} -> ${isSpecial ? 'True' : "False"}`)
    }

}

specialNumbers(15);