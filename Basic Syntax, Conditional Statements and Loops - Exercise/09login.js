function login(input) {
   
    let incPass = 0;

    let pass = "";
    let username = input[0];
    for (let i = username.length - 1; i >= 0; i--) {
        pass += username[i]
    }

    for (let y = 1; y < input.length; y++) {
        let passwords = input[y];


        if (passwords === pass) {
            console.log(`User ${username} logged in.`)
        } else {
            incPass++
            if (incPass === input.length - 1) {
                console.log(`User ${username} blocked!`)
                break;
            }
            console.log(`Incorrect password. Try again.`)
        }
    }

}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);