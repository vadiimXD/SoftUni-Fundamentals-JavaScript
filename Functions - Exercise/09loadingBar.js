function loadingBar(bars) {
    let buff = "";
    let firstLoop = procentsAdder(bars)
    let secondLoop = pointAdder(bars)

    function procentsAdder(bars) {
        for (let i = 10; i <= bars; i += 10) {
            buff += "%";
        }
    }
    function pointAdder(bars) {
        for (let j = 10; j <= 100 - bars; j += 10) {
            buff += ".";
        }
    }


    
    if (bars === 100) {
        console.log(`100% Complete!`)
        console.log(`[${buff}]`)
    }
    if (bars !== 100) {
        console.log(`${bars}% [${buff}]`)
        console.log(`Still loading...`)
    }

}

loadingBar(20);