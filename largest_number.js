//https://leetcode.com/problems/largest-number/
//Runtime: 60 ms, faster than 91.89%  of JavaScript online submissions
//Memory Usage: 35.3 MB, less than 100.00%  of JavaScript online submissions

var largestNumber = function(nums) {
  if (Math.max(...nums) == 0) return '0';

  const res = nums.map(String).sort((a, b) => {
    if (a.length !== b.length) {
      const aStr = a + b;
      const bStr = b + a;
      return bStr - aStr;
    }
    return b - a;
  }).join('');

  return res;
};
