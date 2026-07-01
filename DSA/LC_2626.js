/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result = init;

    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }

    return result;
};

// Test Case 1
let nums1 = [1, 2, 3, 4];

function sum(accum, curr) {
    return accum + curr;
}

console.log(reduce(nums1, sum, 0)); // 10

// Test Case 2
let nums2 = [1, 2, 3, 4];

function multiply(accum, curr) {
    return accum * curr;
}

console.log(reduce(nums2, multiply, 1)); // 24

// Test Case 3
let nums3 = [];

console.log(reduce(nums3, sum, 25)); // 25