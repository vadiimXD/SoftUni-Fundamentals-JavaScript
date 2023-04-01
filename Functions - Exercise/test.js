function passwordValidator(password) {
    let buff = "";
    let counter = 0;
    let valid1 = true;
    let valid2 = true;
    let valid3 = true;
    let false1Counter = 0;
    let false2Counter = 0;
    let false3Counter = 0;

    if (password.length >= 6 && password.length <= 10) {
        valid1 = true;
        for (let elements of password) {
            elements = elements.charCodeAt(0);

            if ((elements >= 48 && elements <= 57) || (elements >= 65 && elements <= 90) || (elements >= 97 && elements <= 122)) {
                valid2 = true;
                if (elements >= 48 && elements <= 57) {
                    counter++;
                    if (counter === 2) {
                        valid3 = true;
                        break;
                    } else {
                        valid3 = false;
                    }
                }
            } else {
                valid2 = false;

                continue;
            }
        }
    } else {
        valid1 = false;
        false1Counter++
    }


    if (valid1 && valid2 && valid3 === true) {
        console.log(`Password is valid`)

    }

    if (valid1 === false) {
        console.log(`Password must be between 6 and 10 characters`)
    }

    if (valid2 === false) {
        console.log(`Password must consist only of letters and digits`)
    }

    if (valid3 === false) {
        console.log(`Password must have at least 2 digits`)
    }
}



// passwordValidator('logIn');
// passwordValidator('MyPass123');
passwordValidator('Pa$s$s');
