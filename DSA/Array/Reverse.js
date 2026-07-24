let arr = [];
arr[0] = 2;
arr[1] = 3;
arr[2] = 9;
arr[3] = 4;

console.log(arr);

// let left = 0;
// let right = arr.length-1;

// First method without using extra space 

// while(left < right ){
//   let temp = arr[left];
//   arr[left] = arr[right];
//   arr[right] = temp;
//   left++;
//   right--;
// }

// let reverse = [];

// // Second Method using extra space 

// for(let i = arr.length-1 ;i >= 0  ;i--){
//   reverse.push(arr[i]);
// }
// console.log(reverse);


// Third method using destructuring 

let array = [9,8,7,6,5,4];

let left = 0;
let right = array.length-1;

while(left < right){
  [array[left] , array[right]] = [array[right] , array[left]];
  left++;
  right--;
}

console.log(array);