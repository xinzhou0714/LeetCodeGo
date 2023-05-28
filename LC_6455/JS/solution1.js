/**
 * 失败的提交
 * 1564 / 1573 个通过测试用例
 * 状态：超出时间限制
 *
 * @param {string} s
 * @return {number}
 */
var minimumCost = function (s) {
  let accum = 0;
  const inv = new Map([
    ["0", "1"],
    ["1", "0"],
  ]);
  const isEqual = (arr) => {
    const firstCh = arr[0];
    for (ch of arr) {
      if (ch !== firstCh) return false;
    }
    return true;
  };

  const arr = s.split("");
  while (!isEqual(arr)) {
    let costForward = 0;
    let costBackward = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[0]) {
        break;
      }
      costForward++;
    }
    for (let i = arr.length - 1; i > 0; i--) {
      if (arr[i] !== arr[arr.length - 1]) {
        break;
      }
      costBackward++;
    }
    if (costForward <= costBackward) {
      for (let i = 0; i < costForward; i++) {
        arr[i] = inv.get(arr[i]);
      }
      accum += costForward;
    } else {
      for (let i = arr.length - 1; i > arr.length - 1 - costBackward; i--) {
        arr[i] = inv.get(arr[i]);
      }
      accum += costBackward;
    }
  }
  return accum;
};

const cost = minimumCost("010101");
console.log("cost:", cost);
