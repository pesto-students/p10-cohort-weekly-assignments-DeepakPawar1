
function transpose_of_matrix(row,col,array){
let output_arr = []
for (let i =0 ; i < col;i++){
for(let j =0;j < row;j++){
console.log(((j* row)+ i),"index in array",i,"i",j,"j",col,"col")
output_arr.push(array[(j * col)+ i])
}
}
return output_arr;
}

console.log(transpose_of_matrix(2,2,[1,2,3,4]))
