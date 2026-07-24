let arr = [1,1,1,1,2,2,2,2,3,3,3];


function frequency(arr){

  const map = new Map();
  
  for(let num of arr){

    // First method 

    // if(map.has(num)){
    //   map.set(num,map.get(num)+1);
    // }else{
    //   map.set(num,1);
    // }


    map.set(num,(map.get(num) || 0) +1);
  }

  return map;
}
const result = frequency(arr);
console.log(result)
