let arr = [1,2,0,3,0,4,0,5,6];

// First Approach using two pointers 

let j = 0;


for (let i = 0;i<arr.length;i++){
  if(arr[i] !== 0){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
}
console.log(arr)