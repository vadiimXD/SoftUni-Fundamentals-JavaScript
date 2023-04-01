function nxnMatrix(num) {
    let resArr = [];
    for (let i = 0; i < num; i++) {
        let output = "";
        for (let j = 0; j < num; j++) {
            output += `${num} `;
        }
        resArr.push(output);
    }
    console.log(resArr.join("\n"));
}

nxnMatrix(3);