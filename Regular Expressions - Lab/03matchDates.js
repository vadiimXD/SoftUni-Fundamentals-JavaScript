function matchDates(dates) {
    let ragex = /\b(?<day>\d{2})(?<delimiter>[-.\/])(?<month>[A-Z][a-z]{2})\k<delimiter>(?<year>\d{4})\b/g
    for (let index = 0; index < dates.length; index++) {
        const text = dates[index];
        let match = [...text.matchAll(ragex)];
        for (let i = 0; i < match.length; i++) {
            let day = match[i].groups.day;
            let month = match[i].groups.month;
            let year = match[i].groups.year;
            let result = `Day: ${day}, Month: ${month}, Year: ${year}`
            console.log(result)
        }
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);