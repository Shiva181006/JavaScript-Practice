let arr = [9,2,3,1,5];

let isSorted = true;

for(let num = 0 ; num < arr.length; num++){

  if(arr[num] > arr[num+1]){
    isSorted = false;
    
  }

}
console.log(isSorted)