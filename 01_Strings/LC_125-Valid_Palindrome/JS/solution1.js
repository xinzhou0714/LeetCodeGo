/**
 * 第一版通过
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了68.91%的用户
 * 内存消耗：44.1 MB, 在所有 JavaScript 提交中击败了60.38%的用户
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let sPure = "";
  for (c of s.toLowerCase()) {
    if ((c >= "a" && c <= "z") || (c >= "0" && c <= "9")) {
      sPure += c;
    }
  }
  if (sPure.length === 0) return true;
  let p1 = 0;
  let p2 = sPure.length - 1;
  while (p1 <= p2) {
    if (sPure.charAt(p1) !== sPure.charAt(p2)) {
      return false;
    }
    p1++;
    p2--;
  }

  return true;
};

isPalindrome("0P");
