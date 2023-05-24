/**
 *
 * 执行用时：252 ms, 在所有 JavaScript 提交中击败了48.57%的用户
 * 内存消耗：51 MB, 在所有 JavaScript 提交中击败了11.43%的用户
 * 通过测试用例：109 / 109
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function (locations, start, finish, fuel) {
  const cache = Array(fuel + 1)
    .fill(0)
    .map(() => Array(locations.length).fill(null));
  const MOD = 10 ** 9 + 7;

  const accum = (rest, current) => {
    if (cache[rest][current] !== null) {
      return cache[rest][current];
    }

    cache[rest][current] = 0;
    if (Math.abs(locations[current] - locations[finish]) > rest) return 0;

    locations.forEach((value, index) => {
      if (current !== index) {
        const cost = Math.abs(locations[current] - locations[index]);
        if (cost <= rest) {
          cache[rest][current] += accum(rest - cost, index) % MOD;
        }
      }
    });
    if (current === finish) {
      cache[rest][current] += 1;
    }
    return cache[rest][current] % MOD;
  };
  return accum(fuel, start);
};

// for test
//const paths = countRoutes([4, 3, 1], 1, 0, 6);
const paths = countRoutes([1, 2, 3], 0, 2, 40);
//const paths = countRoutes([2, 3, 6, 8, 4], 1, 3, 5);

console.log("paths:", paths);
