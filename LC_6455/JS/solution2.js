/**
 * 算法: 走一遍，每次不管代价多少，翻转之后位置i+1前(包括i+1)的字符都是相同的 累加本次翻转最小代价就好
 *
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：45.4 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 * @param {string} s
 * @return {number}
 */
var minimumCost = function (s) {
  let accum = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) {
      const cost = Math.min(i + 1, s.length - i - 1);
      accum += cost;
    }
  }
  return accum;
};

const cost = minimumCost("010101");
console.log("cost:", cost);
