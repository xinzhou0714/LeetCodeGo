/**
 * 从尾巴开始变量，组单词 ，末尾额外处理一次
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了61.40%的用户
 * 内存消耗：49.3 MB, 在所有 JavaScript 提交中击败了15.79%的用户
 *
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
  let ans = "";
  let word = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      word = s[i] + word;
      if (i === 0) {
        ans = ans + word;
      }
    } else {
      ans = ans + word + " ";
      word = "";
    }
  }

  for (let i = 0; i < s.length; i++) {
    s[i] = ans[i];
  }
};

const str = [
  "t",
  "h",
  "e",
  " ",
  "s",
  "k",
  "y",
  " ",
  "i",
  "s",
  " ",
  "b",
  "l",
  "u",
  "e",
];
reverseWords(str);
console.log("s:", str);
