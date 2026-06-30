/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }

    return result;
};

// Test Case 1
let arr1 = [0, 10, 20, 30];

function greaterThan10(n, i) {
    return n > 10;
}

console.log(filter(arr1, greaterThan10)); // [20, 30]

// Test Case 2
let arr2 = [1, 2, 3];

function firstIndex(n, i) {
    return i === 0;
}

console.log(filter(arr2, firstIndex)); // [1]

// Test Case 3
let arr3 = [-2, -1, 0, 1, 2];

function positive(n, i) {
    return n > 0;
}

console.log(filter(arr3, positive)); // [1, 2]