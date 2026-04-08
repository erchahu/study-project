/**
给定一个表示 大整数 的整数数组 digits，其中 digits[i] 是整数的第 i 位数字。
这些数字按从左到右，从最高位到最低位排列。这个大整数不包含任何前导 0。
将大整数加 1，并返回结果的数字数组。
 */

/**
示例 1：
输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
加 1 后得到 123 + 1 = 124。
因此，结果应该是 [1,2,4]。

示例 2：
输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
加 1 后得到 4321 + 1 = 4322。
因此，结果应该是 [4,3,2,2]。

示例 3：
输入：digits = [9]
输出：[1,0]
解释：输入数组表示数字 9。
加 1 得到了 9 + 1 = 10。
因此，结果应该是 [1,0]。
 */

/**
 * 改进
 * 当我们对数组 digits 加一时，我们只需要关注 digits 的末尾出现了多少个 9 即可。我们可以考虑如下的三种情况：

  如果 digits 的末尾没有 9，例如 [1,2,3]，那么我们直接将末尾的数加一，得到 [1,2,4] 并返回；

  如果 digits 的末尾有若干个 9，例如 [1,2,3,9,9]，那么我们只需要找出从末尾开始的第一个不为 9 的元素，即 3，将该元素加一，得到 [1,2,4,9,9]。随后将末尾的 9 全部置零，得到 [1,2,4,0,0] 并返回。

  如果 digits 的所有元素都是 9，例如 [9,9,9,9,9]，那么答案为 [1,0,0,0,0,0]。我们只需要构造一个长度比 digits 多 1 的新数组，将首元素置为 1，其余元素置为 0 即可。

 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let index = digits.length - 1;
  let flag = false;
  while (index >= 0) {
    if (index === digits.length - 1) {
      if (digits[index] + 1 === 10) {
        digits[index] = 0;
        flag = true;
      } else {
        digits[index] = digits[index] + 1
      }
    } else {
      if (flag === true) {
        if (digits[index] + 1 === 10) {
          digits[index] = 0;
        } else {
          digits[index] = digits[index] + 1
          flag = false;
          break;
        }
      }
    }
    if (index === 0 && digits[index] === 0) {
      digits.unshift(1);
    }
    index--;
  }
  return digits;
};

console.log(plusOne([1,2,3]))
console.log(plusOne([4,3,2,1]))
console.log(plusOne([9]))
console.log(plusOne([9,9]))