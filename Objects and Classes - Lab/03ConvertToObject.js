function convertToObject(toObjFromJson) {
    let person = JSON.parse(toObjFromJson)

    for (key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`)
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')