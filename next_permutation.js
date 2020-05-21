//https://leetcode.com/problems/next-permutation/
//Runtime: 52 ms, faster than 99.41% of JavaScript online submissions
//Memory Usage: 35 MB, less than 33.33% of JavaScript online submissions

var nextPermutation = function(nums) {
  for (let i = nums.length; i > 0; i--) {
    if (nums[i - 1] < nums[i]) {
      let nextHigherIdx = Infinity;
      for (let j = i; j < nums.length; j++) {
        if (nums[j] > nums[i - 1] && nums[j] <= (nums[nextHigherIdx] || Infinity)) {
          nextHigherIdx = j;
        }
      }
      //replacement must be in-place and use only constant extra memory
      [nums[i - 1], nums[nextHigherIdx]] = [nums[nextHigherIdx], nums[i - 1]];
      nums.splice(i, nums.length - i, ...nums.splice(i).reverse());
      return;
    }
  }
  //sorted in ascending order as fallback
  nums.sort((a, b) => a - b);
};
