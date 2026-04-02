/**
 * @param {number} x
 * @return {boolean}
 */

// 可优化的点
/**
 * 1. % 10 = 0, 也可以提前排除, 120 ---> 021
 * 2. 可以不通过 xLength 进行判断,而是通过 X 与 returnNumber 的大小进行比较
 * 3. returnNumber 最后可以不重新赋值,而是直接x/10
 */
var isPalindrome = function(x) {
    if (x === 0) {
      return true;
    } else if (x < 0) {
      return false;
    } else {
      const xLength = x.toString().length;
      let returnNumber = 0;
      let i = 0;
        while (i < Math.floor(xLength / 2)) {
          returnNumber = x % 10 + returnNumber * 10;
          // x = Math.floor(x / 10)
          x = x / 10
          i = i + 1;
        }

        if (xLength % 2 !== 0) {
          returnNumber = x % 10 + returnNumber * 10
        }
        return returnNumber === x;
    }
};

console.log(isPalindrome(123))