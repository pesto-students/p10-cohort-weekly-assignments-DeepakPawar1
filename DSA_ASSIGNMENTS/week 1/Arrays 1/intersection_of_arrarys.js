

function find_intersection(first,second){
const mySet= new Set()

for (let i = 0; i < first.length; i ++){
console.log(mySet.add(first[i]))
}

let result = []
for (let j =0 ; j < second.length; j ++){
if (mySet.has(second[j])== true){
result.push(second[j])
}
}
return result;
}

console.log(find_intersection([3,4,5,8,6,9],[8,6,3,5]))
