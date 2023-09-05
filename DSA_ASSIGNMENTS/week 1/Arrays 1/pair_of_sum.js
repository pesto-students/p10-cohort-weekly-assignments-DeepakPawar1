

let output = []
function pair_of_sum(arr  , number){
let j = 0;
for (let i = 0 ; i < (arr.length-1) ; i ++){
	for (let j = 0; j < (arr.length); j ++){
	if (i != j && (arr[i]+ arr[j]==number)){
	output.push([arr[i],arr[j]])
}
	
}

}

}

pair_of_sum([1,2,3,4,5,6],7)
console.log(output)
