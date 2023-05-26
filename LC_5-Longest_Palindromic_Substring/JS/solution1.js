/**
 * 第一版 中心扩展法
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了79.08%的用户
 * 内存消耗：49.2 MB, 在所有 JavaScript 提交中击败了26.40%的用户
 * 思路是枚举回文中心， 从中心按照奇数偶数分别向外扩散
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return s[0];
  if (s.length === 2) return s[0] === s[1] ? s : s[0];
  const diffuseFromCenter = (left, right) => {
    if (s[left] !== s[right]) return [1, left, left];
    let p1 = left;
    let p2 = right;
    while (p1 >= 0 && p2 <= s.length - 1) {
      if (s[p1] !== s[p2]) {
        //收缩
        p1++;
        p2--;
        return [p2 - p1 + 1, p1, p2];
      }
      //外扩
      p1--;
      p2++;
    }
    //收缩
    p1++;
    p2--;
    return [p2 - p1 + 1, p1, p2];
  };
  let currenMax = 0;
  let curentStart, currentEnd;

  for (let center = 0; center < s.length; center++) {
    const res1 = diffuseFromCenter(center, center);
    const res2 = diffuseFromCenter(center, center + 1);
    if (res1[0] > currenMax) {
      currenMax = res1[0];
      curentStart = res1[1];
      currentEnd = res1[2];
    }
    if (res2[0] > currenMax) {
      currenMax = res2[0];
      curentStart = res2[1];
      currentEnd = res2[2];
    }
  }

  return s.substring(curentStart, currentEnd + 1);
};

const text = longestPalindrome("cbbd");
console.log("text:", text);
