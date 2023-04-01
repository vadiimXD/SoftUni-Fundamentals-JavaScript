function foreingLanguages(lan) {


    if (lan === "England" || lan === "USA") {
        console.log("English")
    } else if (lan === "Spain" || lan === "Argentina" || lan === "Mexico") {
        console.log(`Spanish`)
    } else {
        console.log(`unknown`)
    }
}

foreingLanguages("USA");