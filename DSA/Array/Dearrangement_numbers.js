let num = 3;

if(num === 1){
  return 0;
}
if(num === 2){
  return 1;
}
let prev2 = 0 ;
let prev1 = 1;
let curr = 0;
for(let i =3 ;i<= num ;i++){
  curr = (i - 1) * (prev1 + prev2);
  prev2 = prev1;
  prev1 = curr;
}
console.log(prev1);