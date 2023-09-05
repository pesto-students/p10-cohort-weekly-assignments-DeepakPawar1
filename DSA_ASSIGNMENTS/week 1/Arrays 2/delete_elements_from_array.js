

function deleteElements(array ){

const filtered = array.filter((num,index)=>{
//console.log(num/2 , num , num/3);
if ((num % 3)!=0 && (num%2) !=0 ){
return num

}
})
return filtered;
}


console.log(deleteElements([2,3,4,5,6,7,8,9]))
