

function nonduplicate(...args){
const arr  = []
let result = 0;
for(let i = 0; i< args.length;i++){
arr.push(args[i])
}

for(let j =0 ; j < arr.length;j++){
 result ^= arr[j]
console.log(result)
}
console.log(result,"******")
}
nonduplicate(1,1,9,4,4,5,6,6,7,7,5)

