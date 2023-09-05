
function reverse_number(number){
let reversed = 0;
while (number != 0){
console.log(number%10)
reversed = reversed*10 + number % 10 
number = Math.floor(number / 10)
}
return reversed
}
console.log(reverse_number(151321))
