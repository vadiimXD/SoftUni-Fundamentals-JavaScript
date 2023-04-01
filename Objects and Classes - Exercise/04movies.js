function movies(arr) {

    for (let line of arr) {

        let obj = {};

        if (line.includes(`addMovie`)) {

            let name = line.replace("addMovie ", "");

            obj.name = name;

            for (let line2 of arr) {

                if (line2.includes(`${name} onDate`)) {

                    let theDate = line2.replace(`${name} onDate `, "");
                    obj.date = theDate;
                }

                if (line2.includes(`${name} directedBy`)) {

                    let director = line2.replace(`${name} directedBy `, "");
                    obj.director = director;

                }

            }

            if (Object.keys(obj).length === 3) {
                console.log(JSON.stringify(obj));
            }

        }

    }

}

movies([

    'addMovie Fast and Furious',

    'addMovie Godfather',

    'Inception directedBy Christopher Nolan',

    'Godfather directedBy Francis Ford Coppola',

    'Godfather onDate 29.07.2018',

    'Fast and Furious onDate 30.07.2018',

    'Batman onDate 01.08.2018',

    'Fast and Furious directedBy Rob Cohen'

]);