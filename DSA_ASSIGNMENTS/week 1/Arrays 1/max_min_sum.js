function max_min_sum(...args){
let max = 0
let min = 0 

let arr = []

for(let i = 0 ; i < args.length ; i ++){
arr.push(args[i])
if (i == 0){
min = arr[i]
max= arr[i]
}
else{
if ( arr[i] < min){
min = arr[i]
}
if(max < arr[i]){
max = arr[i]
}
}
}
console.log(min+max)

}

max_min_sum(1,2,5,8,99)


