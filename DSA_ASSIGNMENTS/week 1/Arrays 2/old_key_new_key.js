
function old_key_new_key(arr,number_to_be_replaced,replaced_by){
for (let i = 0; i < arr.length;i++){
if (arr[i] == number_to_be_replaced){
arr[i] = replaced_by
}
}
return arr;
}

console.log(old_key_new_key([1,2,3,6,5,3,2],2,6))
