// https://leetcode.com/problems/ransom-note/
// Runtime: 64 ms, faster than 94.72% of JavaScript online submissions for Ransom Note.
// Memory Usage: 38.4 MB, less than 33.33% of JavaScript online submissions for Ransom Note.

var canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  let charMap = [];
  for (let i = 0; i < ransomNote.length; i++) {
      if (magazine.indexOf(ransomNote[i]) == -1) return false;
      let char = ransomNote.codePointAt(i);
      charMap[char] = charMap[char] - 1 || -1;
  }

  for (let i = 0; i < magazine.length; i++) {
      let char = magazine.codePointAt(i);
      charMap[char] = charMap[char] + 1 || 1;
  }
  for (const charCount of charMap) if (charCount < 0) return false;
  return true;
};
