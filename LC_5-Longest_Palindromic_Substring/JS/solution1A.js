/**
 * 第一版 中心扩展法 微调循环条件
 * 两条都能往外扩时， 先外扩
 * 如果首尾不相等 收缩 返回上一次回文长度
 * 外扩到最后一次时 不需要收缩 返回回文长度
 * PS: 边界条件 ，第一次开始扩展时如果 如果种子长度为2，要提前单独处理
 * PS: 不改进性能
 *
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
    while (p1 > 0 && p2 < s.length - 1) {
      //外扩
      p1--;
      p2++;
      if (s[p1] !== s[p2]) {
        //收缩
        p1++;
        p2--;
        return [p2 - p1 + 1, p1, p2];
      }
    }
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
