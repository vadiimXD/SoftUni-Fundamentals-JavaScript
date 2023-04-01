function triangleOfNums(n) {
    
    for (let rows = 1; rows <= n; rows++) {
        let buff = "";
        for (let cols = 1; cols <= rows; cols++) {
            buff += rows + "" +  " ";
        }
        console.log(buff)
    }

}

triangleOfNums(3);