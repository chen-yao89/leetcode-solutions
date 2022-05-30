var missingNumber = function(nums) {
    const newNums = new Set(nums)
    for (let i = 0; i <= nums.length; i++) {
        if (!newNums.has(i)) {
            return i
        }
    }
};
