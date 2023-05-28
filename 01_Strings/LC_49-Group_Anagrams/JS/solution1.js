/**
 * 哈希表
 * 执行用时：104 ms, 在所有 JavaScript 提交中击败了83.43%的用户
 * 内存消耗：51.8 MB, 在所有 JavaScript 提交中击败了34.30%的用户
 *
 * 用排序后的字符作为key
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const geneKey = (str) => {
    return str.split("").sort().join("");
  };
  const table = new Map();
  strs.forEach((str) => {
    const key = geneKey(str);
    const groupArr = table.get(key) || [];
    groupArr.push(str);
    table.set(key, groupArr);
  });

  const res = [];
  table.forEach((value) => {
    res.push(value);
  });
  return res;
};

const res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log("res", res);
