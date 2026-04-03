/**
 * 给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，
 * 使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。
 * 考虑 nums 的唯一元素的数量为 k。去重后，返回唯一元素的数量 k。
 * nums 的前 k 个元素应包含 排序后 的唯一数字。下标 k - 1 之后的剩余元素可以忽略。
 * 判题标准:
 * int[] nums = [...]; // 输入数组
 * int[] expectedNums = [...]; // 长度正确的期望答案
 * int k = removeDuplicates(nums); // 调用
 * assert k == expectedNums.length;
 * for (int i = 0; i < k; i++) {
 *  assert nums[i] == expectedNums[i];
 * }
 */

/**
 * 输入：nums = [1,1,2]
 * 输出：2, nums = [1,2,_]
 * 
 * 输入：nums = [0,0,1,1,1,2,2,3,3,4]
 * 输出：5, nums = [0,1,2,3,4,_,_,_,_,_]
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// 非严格递增排列
/**
 * 
 class Solution {
    public int removeDuplicates(int[] nums) {
        int n = nums.length;
        int j = 0;
        for (int i = 0; i < n; i++) {
            if (nums[i] != nums[j]) {
                nums[++j] = nums[i];
            }
        }
        return j + 1;
    }
}
 */
var removeDuplicates = function(nums) {
   const numsMap = new Set();
   for (let i = 0; i < nums.length; i++) {
      if (!numsMap.has(nums[i])) {
        nums[numsMap.size] = nums[i]
        numsMap.add(nums[i]);
      }
   }

   return numsMap.size;
};

console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))