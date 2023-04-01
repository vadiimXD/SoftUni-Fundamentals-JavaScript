function sortAnArrayBy2Criteria(arr) {
    arr.sort((a, b) => {
        if (a.length - b.length == 0) {
            return a.localeCompare(b);


            // return a.length - b.length
        } else {
            return a.length - b.length

        }
    });
    console.log(arr.join("\n"))
}
// console.log(arr.join("\n"))

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);