/**
 * 栈
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了73.85%的用户
 * 内存消耗：41.8 MB, 在所有 JavaScript 提交中击败了28.02%的用户
 *
 * 左括号为键， 右括号为值
 * 是键
 *  压入栈顶
 * 是值
 *  尝试和栈顶的值做匹配 (栈顶必须有元素)
 *  匹配成功 消去栈顶
 *  匹配失败 停止读取下一个字符
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  const pair = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (pair.has(s[i])) {
      stack.push(s[i]);
    } else {
      if (stack.length === 0 || pair.get(stack[stack.length - 1]) !== s[i]) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
};

const valid = isValid("()[]{}");
console.log("valid:", valid);
