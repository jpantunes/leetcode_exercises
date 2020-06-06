// https://leetcode.com/problems/valid-number/
// Runtime: 76 ms, faster than 92.92% of JavaScript online submissions for Valid Number.
// Memory Usage: 37.5 MB, less than 12.50% of JavaScript online submissions for Valid Number.

var isNumber = function(s) {

  const trimRegex = /(^\s+|\s+$)/g;
  const trimedS = s.replace(trimRegex, '')
  if (trimedS.length == 0) return false;

  const validCharsRegex = /[0-9e+-.]/;
  if (![...trimedS].every(e => e.match(validCharsRegex))) return false;

  const invalidPatternsRegex = /(^\.e|^\.$|^e.*?|e.+?\.+?|\..+?\.|.+?e$|\d+?[+-]\d.?|[+-]+?\.$|.+?[+-]$|.+?e+?.*?e+?|\+[e+-]+?|\-[e+-]+?|\.[.+-]+?|e\.+?)/gi;
  if (trimedS.match(invalidPatternsRegex)) return false;

  return true;
};


// var isNumber = function(s) {
//   if (s == ' ') return false;
//   return !isNaN(new Number(s));
// };
// Runtime: 80 ms, faster than 85.12%