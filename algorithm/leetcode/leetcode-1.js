/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        if (map.hasOwnProperty(nums[i])) { // hasOwnProperty用来判断object中是否存在某个key
            return [map[nums[i]], i] // map[nums[i] 才是 下标
        }
        const returnNum = target - nums[i];
        map[returnNum] = i;
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function(nums, target) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return [i, map.get(nums[i])]
        } else {
            map.set(target - nums[i], i)
        }
    }
};

console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
console.log(twoSum([2,7,11,15], 9))
