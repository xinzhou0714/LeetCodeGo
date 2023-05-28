/**
 * 递归 + 缓存结果
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了39.29%的用户
 * 内存消耗：41.1 MB, 在所有 JavaScript 提交中击败了5.09%的用户
 *
 * 原理  递推关系 到达 楼层n 的方法等于 从n-1层跳一步  和从 n-2层跳两部过来的数量
 * 到达 楼层
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const cache = new Map([
    [1, 1],
    [2, 2],
  ]);
  const fromFloor = (n) => {
    if (cache.get(n) !== undefined) return cache.get(n);

    cache.set(n, fromFloor(n - 1) + fromFloor(n - 2));
    return cache.get(n);
  };

  return fromFloor(n);
};

const count = climbStairs(3);
console.log("count", count);
