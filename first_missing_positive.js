// https://leetcode.com/problems/first-missing-positive/
// Runtime: 48 ms, faster than 95.76% of JavaScript online submissions for First Missing Positive.
// Memory Usage: 33.8 MB, less than 91.67% of JavaScript online submissions for First Missing Positive.

var firstMissingPositive = function(nums) {
  if (nums.length <= 1)  return nums[0] == 1 ? 2 : 1;

  const max = Math.max(...nums);
  for (let i = 1; i <= max + 1; i++) {
      if (!nums.includes(i)) return i;
  }
  return 1; //every other case, ie all n in nums are < 0
};
