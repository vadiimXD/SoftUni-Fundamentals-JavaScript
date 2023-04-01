function maxSequenceOfEqualElements(nums) {
    let biggestNum = nums[nums.length - 1];
    let biggestCount = 1;

    let currentNum = nums[nums.length - 1];
    let currentCount = 1;

    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] !== nums[i - 1]) {
            currentNum = nums[i - 1];
            currentCount = 1;
            continue;
        }

        currentCount++;

        if (currentCount >= biggestCount) {
            biggestCount = currentCount;
            biggestNum = currentNum;
        }
    }

    let string = '';
    for (let i = 0; i < biggestCount; i++) {
        string += `${biggestNum} `;
    }

    console.log(string);
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);