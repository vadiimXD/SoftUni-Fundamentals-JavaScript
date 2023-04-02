function solve(input) {

    let budget = Number(input[0]);
    let students = Number(input[1]);
    let flourPrice = Number(input[2]);
    let eggPrice = Number(input[3]);
    let apronPrice = Number(input[4]);

    let finalSum = apronPrice * (students + Math.ceil(students * 0.2)) + eggPrice * 10 *
        students + flourPrice * (students - (Math.floor(students * 0.2)));

    if (finalSum <= budget) {
        console.log(`Items purchased for ${finalSum.toFixed(2)}$.`);
    } else {
        console.log(`${(finalSum - budget).toFixed(2)}$ more needed.`);

    }
}
solve(([50,

    2,

    1.0,

    0.10,

    10.0]))