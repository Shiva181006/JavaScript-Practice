let arr = [9,3,5,2,3,5,0];

let largest  = arr[0];
let smallest = arr[0];


for(let i = 0; i < arr.length;i++){
  if(largest < arr[i]){
    largest = arr[i];
  }

  if(smallest > arr[i]){
    smallest = arr[i];
  }
}

console.log(largest);
console.log(smallest);

// second largest and second smallest

let array = [1,2,3,4,5,9,9,9,9];

let large = array[0];
let second_large = Infinity;

for(let i = 0 ;i < array.length;i++){
  if(large < array[i]){
    second_large = large;
    large = array[i];
  }
  else if (second_large < array[i] && array[i] < large){
    second_large = array[i];
  }
}

console.log(large,second_large);