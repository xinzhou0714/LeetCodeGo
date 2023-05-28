/**
 * 用Map统计字符出现次数， 顺序无关，第一个统计到的所有字符都要能在第二个中清空
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了88.45%的用户
 * 内存消耗：42.3 MB, 在所有 JavaScript 提交中击败了70.55%的用户
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const table = new Map();
  for (let i = 0; i < s.length; i++) {
    table.set(s[i], (table.get(s[i]) || 0) + 1);
  }
  for (let j = 0; j < t.length; j++) {
    table.set(t[j], (table.get(t[j]) || 0) - 1);
    if (table.get(t[j]) === 0) {
      table.delete(t[j]);
    }
  }
  return table.size === 0;
};

const valid = isAnagram("s", "a");
console.log("valid:", valid);
