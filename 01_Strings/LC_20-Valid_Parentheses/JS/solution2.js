/**
 * ASCII版
 * 执行用时：60 ms, 在所有 JavaScript 提交中击败了88.00%的用户
 * 内存消耗：41.4 MB, 在所有 JavaScript 提交中击败了70.47%的用户
 *
 * 注意到左右括号ASCII嘛只差1或者2
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (const ch of s) {
    const ascii = ch.charCodeAt(0);
    if (ascii === 40 || ascii === 91 || ascii === 123) {
      stack.push(ascii);
    } else {
      if (
        stack.length === 0 ||
        !(
          ascii - stack[stack.length - 1] === 1 ||
          ascii - stack[stack.length - 1] === 2
        )
      ) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
};

const valid = isValid("()[]{}");
console.log("valid:", valid);

// ASCII CODE  40 41 91 93 123 125
let text = "()[]{}";

for (ch of text) {
  console.log(ch.charCodeAt(0));
}
