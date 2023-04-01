function smallestOfTwoNumbers(arr) {
    let sortedAscending = arr.sort((a, b) => a - b);
    console.log(sortedAscending.slice(0, 2).join(' '));
  }
  

smallestOfTwoNumbers([30, 15, 50, 5]);
smallestOfTwoNumbers([3, 0, 10, 4, 7, 3])