//https://leetcode.com/problems/integer-break/
//Runtime: 48 ms, faster than 93.94% of JavaScript online submissions for Integer Break.
//Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Integer Break.

var integerBreak = function(n) {
  if (n < 4) return n - 1;

  let times3 = Math.floor(n / 3);
  let diff = n - (times3 * 3);

  if (diff == 0) {
    return 3 ** times3;
  } else if (diff == 1) {
    return (3 ** (times3 - diff) * (3 + diff));
  } else { //diff == 2
    return (3 ** times3 / (3 + diff) * 10);
  }
};
