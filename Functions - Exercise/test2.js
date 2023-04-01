function spiralMatrix(rows, cols) {
 
    let newArr = [];
   
    for (let row = 0; row < rows; row++) {
      newArr[row] = [];
      for (let col = 0; col < cols; col++) {
        newArr[row][col] = 0;
      }
    }
   
   
    let count = 1;
   
    let row = 0;
    let col = 0;
   
    let isRow = true;
    let isRReversed = false;
    let isCReversed = false;
   
    while (newArr.some(x => x.includes(0))) {
   
      if (isRow) {
   
        if (!isRReversed) {
          for (let i = 0; i < cols; i++) {
            if (newArr[row][i] === 0) {
              newArr[row][i] = count;
              col = i;
              count++;
            }
          }
   
          isRow = false; 
          isRReversed = true; 
        }
   
        else {
          for (let i = col; i >= 0; i--) {
            if (newArr[row][i] === 0) {
              newArr[row][i] = count;
              col = i;
              count++;
            }
          }
   
          isRow = false; 
          isRReversed = false;
        }
      }
   
      else {
   
        if (!isCReversed) {
          for (let i = 0; i < rows; i++) {
            if (newArr[i][col] === 0) {
              newArr[i][col] = count;
              row = i;
              count++;
            }
          }
   
          isRow = true;
          isCReversed = true; 
        }
   
        else {
          for (let i = row; i >= 0; i--) {
            if (newArr[i][col] === 0) {
              newArr[i][col] = count;
              row = i;
              count++;
            }
          }
   
          isRow = true;
          isCReversed = false; 
        }
      }
    }
   
    for (let row of newArr) {
      console.log(row.join(' '));
    }
  }