function is_leap_year(year){

if (year % 4 == 0){
if(year % 100 ==0 & year % 400 != 0){
return "Not a leap year"
}
return "Leap year"

}else{
return "Not a leap year"
}

}


console.log(is_leap_year(1900))
