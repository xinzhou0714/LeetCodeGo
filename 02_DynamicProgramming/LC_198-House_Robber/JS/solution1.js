/**
 * 递推
 *
 * 执行用时：60 ms, 在所有 JavaScript 提交中击败了65.92%的用户
 * 内存消耗：40.9 MB, 在所有 JavaScript 提交中击败了86.82%的用户
 *
 * 关键关系
 *   位置i能到最大值有两种情况
 *     情况一， 位置i偷了， 位置i-2也偷了
 *     情况二， 位置i-1偷了， 导致 位置i不能偷
 *   两种情况取最大值
 *
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  //edge case
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return nums[0] >= nums[1] ? nums[0] : nums[1];
  //main logic
  let pocket = new Array(nums.length);
  pocket[0] = nums[0];
  pocket[1] = nums[0] >= nums[1] ? nums[0] : nums[1];

  for (let pos = 2; pos < nums.length; pos++) {
    pocket[pos] = Math.max(pocket[pos - 2] + nums[pos], pocket[pos - 1]);
  }

  return pocket[nums.length - 1];
};

const money = rob([2, 7, 9, 3, 1]);
console.log("money:", money);
