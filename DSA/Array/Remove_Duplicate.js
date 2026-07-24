// First using set

let arr = [1,1,2,3,4,4,4,5,5,6];

function removeDuplicate(arr){
  // new set(arr) creates new set 
  // ... convert to array
  // const set = new Set(arr);
  // return set;  OR

  return [...new Set(arr)];
}
let a = removeDuplicate(arr);
console.log(a);