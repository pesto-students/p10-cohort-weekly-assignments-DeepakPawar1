
function sum_of_two_matrix(f_row,f_col,f_matrix,s_row,s_col,s_matrix){

let op_arr = []
for (let i=0;i < f_row; i ++)
{
let local_arr = []
for (let j =0 ; j < f_col; j++)
{
local_arr.push(f_matrix[(i * f_col)+ j] + s_matrix[i * f_col+ j])
}
console.log(local_arr)
op_arr.push(local_arr)
}
return op_arr;
}


console.log(sum_of_two_matrix(2,3,[1,2,3,4,5,6],2,3,[7,8,9,10,11,12]))
