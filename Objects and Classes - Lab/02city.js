function city(personInfo) {
    for (let key of Object.keys(personInfo)) {
        console.log(key + " -> " + personInfo[key])
    }
}

city({

    name: "Sofia",

    area: 492,

    population: 1238438,

    country: "Bulgaria",

    postCode: "1000"

})