/**
 * 执行用时：92 ms, 在所有 JavaScript 提交中击败了45.61%的用户
 * 内存消耗：48.5 MB, 在所有 JavaScript 提交中击败了33.33%的用户
 *
 * 先反转单词，在反转整个数组
 *
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
  if (s.indexOf(" ") < 0) return s;
  const reverse = (s, start, end) => {
    while (start < end) {
      let temp = s[start];
      s[start] = s[end];
      s[end] = temp;
      start++;
      end--;
    }
  };

  let flag = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      reverse(s, flag, i - 1);
      flag = i + 1;
    }
    if (i === s.length - 1) {
      reverse(s, flag, i);
    }
  }

  reverse(s, 0, s.length - 1);
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
