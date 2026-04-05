/**
 * 给你两个字符串 haystack 和 needle ，
 * 请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。
 * 如果 needle 不是 haystack 的一部分，则返回  -1 。
 */

/**
示例 1：
输入：haystack = "sadbutsad", needle = "sad"
输出：0
解释："sad" 在下标 0 和 6 处匹配。
第一个匹配项的下标是 0 ，所以返回 0 。

示例 2：
输入：haystack = "leetcode", needle = "leeto"
输出：-1
解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

  if (needle.length > haystack.length) {
    return -1;
  }

  if (haystack === needle) {
    return 0
  }

  for (let i = 0; i < haystack.length;i++) {
    let a = '';
    for (let j = 0; j < needle.length; j++) {
      a = a + haystack[i + j];
    }
    if (a === needle) {
      return i
    } else if (a !== needle && i + 1 == haystack.length) {
      return -1
    }
  }
};

console.log(strStr('sadbutsad', 'sad'))
console.log(strStr('leetcode', 'leeto'))
console.log(strStr('aaaa', 'bba'))
console.log(strStr('hello', 'll'))