function storage(arr) {
    let obj = {};
    for (const el of arr) {
        let toknes = el.split(" ");
        let product = toknes[0];
        let quantity = Number(toknes[1]);
      
        if (obj.hasOwnProperty(product)) {
            let curQ = quantity;
        
            obj[product] = obj[product] + curQ
        } else {
            obj[product] = quantity
        }
    }
    // console.log(obj)
    for (const key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`)
    }
}

storage(['apple 50', 

'apple 61', 

'coffee 115', 

'coffee 40'] )