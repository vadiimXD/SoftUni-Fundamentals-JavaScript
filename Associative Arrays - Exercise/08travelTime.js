function travelTime(travels) {
    let travel = {}
    for (const line of travels) {
        let [country, city, price] = line.split(" > ")
        if (!travel.hasOwnProperty(country)) {
            travel[country] = city
        }

        if(!travel[country].hasOwnProperty(city)) {
         travel[country][city]=price;
        }
    }
    console.table(travel)
}

travelTime([

    "Bulgaria > Sofia > 500",

    "Bulgaria > Sopot > 800",

    "France > Paris > 2000",

    "Albania > Tirana > 1000",

    "Bulgaria > Sofia > 200"

]);