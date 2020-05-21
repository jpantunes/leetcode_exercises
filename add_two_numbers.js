//https://leetcode.com/problems/add-two-numbers/
//Runtime: 96 ms, faster than 99.18% of JavaScript online submissions for Add Two Numbers.
//Memory Usage: 39.2 MB, less than 13.89% of JavaScript online submissions for Add Two Numbers.

var addTwoNumbers = function(l1, l2) {
  let num1Str = '';
  let num2Str = '';
  let node = l1;

  while (node) {
    num1Str = node.val + num1Str;
    node = node.next;
  }

  node = l2;
  while (node) {
    num2Str = node.val + num2Str;
    node = node.next;
  }

  const sum = BigInt(num1str) + BigInt(num2str);
  const sumStr = sum.toString();
  const resLst = new ListNode(sumStr[sumStr.length - 1]);

  node = resLst;
  for (let i = sumStr.length - 2; i >= 0; i--) {
    node.next = new ListNode(sumStr[i]);
    node = node.next;
  }
  return resLst;
};
