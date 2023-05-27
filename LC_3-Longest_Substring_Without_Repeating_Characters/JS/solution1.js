/**
 * 双指针法
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了92%的用户
 * 内存消耗：44.3 MB, 在所有 JavaScript 提交中击败了70%的用户
 *
 * 思路
 * 维护一个队列，不断将字符放入队列的头部，
 *  统计头部出现的次数
 *  如果头部出现重复字符，将队列左侧字符不断清空，直至本次循环中队列中不存在重复字符
 *  PS: 收缩条件是最左边字符不等于最右边 ，
 *      到刚好等于的时候还要再收缩一格才满足条件
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const queue = [];
  const table = new Map();
  let maxLen = 0;
  let head = 0;
  let tail = 0;
  for (let i = 0; i < s.length; i++) {
    head = i;
    table.set(s[head], (table.get(s[head]) || 0) + 1); // counting up the same char
    queue.push(s[head]);
    // if find duplicated
    if (table.get(s[head]) > 1) {
      while (s[tail] !== s[head]) {
        table.set(s[tail], 0);
        queue.shift();
        tail++;
      }
      // s[tail] === s[head]
      table.set(s[tail], 1);
      queue.shift();
      tail++;
    }
    maxLen = queue.length > maxLen ? queue.length : maxLen;
  }
  return maxLen;
};

const len = lengthOfLongestSubstring("abcabcbb");
console.log("len:", len);
