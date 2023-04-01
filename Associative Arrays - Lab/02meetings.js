function meetings(input) {
    let meetings = {};

    for (const line of input) {
        let [day, name] = line.split(' ');

        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
            continue;
        }

        meetings[day] = name
        console.log(`Scheduled for ${day}`);
    }

    for (const [day, name] of Object.entries(meetings)) {
        console.log(`${day} -> ${name}`);
    }

}
meetings(['Monday Peter',

    'Wednesday Bill',

    'Monday Tim',

    'Friday Tim'])