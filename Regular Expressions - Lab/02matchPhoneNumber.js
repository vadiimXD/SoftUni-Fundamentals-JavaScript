function matchPhoneNumber(phoneNumbers) {
    let regex = /\+359(?<delimiter>[ -])2\k<delimiter>\d{3}\k<delimiter>\d{4}\b/g
    let result = [];
    while ((validPhone = regex.exec(phoneNumbers)) !== null) {
        result.push(validPhone[0])
    }
    console.log(result.join(", "))
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);