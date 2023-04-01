function requiredReading(pages, pagesReadInOneHour, days) {
    let totalTime = pages / pagesReadInOneHour;
    let timePerDay = totalTime / days;
    console.log(timePerDay)
}

requiredReading(212,
    20,
    2);