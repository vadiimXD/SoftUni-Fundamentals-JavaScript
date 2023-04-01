function converToJson(firstName, lastName, hairColor) {
    let personInfo = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }
    console.log(JSON.stringify(personInfo))
}

converToJson('George', 'Jones', 'Brown');