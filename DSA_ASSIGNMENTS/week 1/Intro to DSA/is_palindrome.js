
function isPalindrome(number){
let reversed = 0;
let check_number = number;
while(number != 0){
reversed = reversed * 10 + number % 10
number = Math.floor(number /10)
}
if (reversed == check_number){
return "Its a palindrome"
}else{
return "not a palindrome"
}
}

console.log(isPalindrome(32123))
