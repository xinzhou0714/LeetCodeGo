/**
 *
 * 用对象代替Map 效果也不是很明显
 * 执行用时：60 ms, 在所有 JavaScript 提交中击败了88.05%的用户
 * 内存消耗：41.1 MB, 在所有 JavaScript 提交中击败了87.88%的用户
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  const pair = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (pair[s[i]]) {
      stack.push(s[i]);
    } else if (pair[stack.pop()] !== s[i]) {
      return false;
    }
  }
  return stack.length === 0;
};

const valid = isValid("()[]{}");
console.log("valid:", valid);
