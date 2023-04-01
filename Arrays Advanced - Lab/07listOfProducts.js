function listOfProducts(input) {
    let counter = 1;
    input.sort().forEach(input => console.log(`${counter++}.${input}`));
}



listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
// listOfProducts(['Watermelon', 'Banana', 'Apples'])