/**
 * 滚动数组法
 *
 * 执行用时：56 ms, 在所有 JavaScript 提交中击败了82.87%的用户
 * 内存消耗：40.7 MB, 在所有 JavaScript 提交中击败了88.68%的用户
 *
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 3) return n;
  const array = [1, 2, 3];
  for (let i = 4; i <= n; i++) {
    array[0] = array[1];
    array[1] = array[2];
    array[2] = array[0] + array[1];
  }
  return array[2];
};

const steps = climbStairs(6);
console.log("steps:", steps);
