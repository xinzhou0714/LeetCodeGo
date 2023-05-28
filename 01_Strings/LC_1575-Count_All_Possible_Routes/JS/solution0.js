/**
 * 官方解
 * 执行用时：128 ms, 在所有 JavaScript 提交中击败了97.14%的用户
 * 内存消耗：43.1 MB, 在所有 JavaScript 提交中击败了68.57%的用户
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var dfs = function (locations, start, end, fuel, cache, mod) {
  if (cache[start][fuel] != -1) {
    return cache[start][fuel];
  }
  if (fuel == 0 && start != end) {
    cache[start][fuel] = 0;
    return 0;
  }
  let hasNext = false; // 主要用于判断任意位置不可达的情况
  for (let cityIndex = 0; cityIndex < locations.length; cityIndex++) {
    if (cityIndex != start) {
      let needFuelToNext = Math.abs(locations[cityIndex] - locations[start]);
      if (fuel >= needFuelToNext) {
        hasNext = true;
        break;
      }
    }
  }
  if (fuel != 0 && !hasNext) {
    // 有油量，但是不能往下走
    cache[start][fuel] = start === end ? 1 : 0;
    return cache[start][fuel];
  }
  let sum = start === end ? 1 : 0;
  for (let cityIndex = 0; cityIndex < locations.length; cityIndex++) {
    if (cityIndex != start) {
      let needFuelToNext = Math.abs(locations[cityIndex] - locations[start]);
      if (fuel >= needFuelToNext) {
        sum += dfs(
          locations,
          cityIndex,
          end,
          fuel - needFuelToNext,
          cache,
          mod
        );
        sum = sum % mod;
      }
    }
  }
  cache[start][fuel] = sum;
  return sum;
};
var countRoutes = function (locations, start, finish, fuel) {
  let cache = new Array(locations.length)
    .fill(-1)
    .map((item) => new Array(fuel + 1).fill(-1));
  let mod = 1000000007;
  return dfs(locations, start, finish, fuel, cache, mod);
};

// for test
//const paths = countRoutes([4, 3, 1], 1, 0, 6);
const paths = countRoutes([1, 2, 3], 0, 2, 40);
//const paths = countRoutes([2, 3, 6, 8, 4], 1, 3, 5);

console.log("paths:", paths);
