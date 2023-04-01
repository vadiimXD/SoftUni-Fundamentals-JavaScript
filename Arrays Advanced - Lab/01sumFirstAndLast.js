function sumFirstAndLast(arr){

    let firstElement=Number(arr.shift());
    let lastElement=Number(arr.pop());

    console.log(firstElement + lastElement)
}

sumFirstAndLast(['20', '30', '40']);