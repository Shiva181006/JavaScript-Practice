let a = 'hello my name is shivaaaa q  ';
// Done using while loop
let i = a.length-1;
let length = 0 ;
// For skip the space from the back


while(i>=0 && a[i]===' '){
  i--;
}

// Length of last word
while(i >= 0 && a[i] !== ' '){
  length++;
  i--;
}
console.log(length);