
function lcm_hcf(numberone, numbertwo){
let lcmnumber_one = numberone
let lcmnumber_two = numbertwo
let remainder = 10 ;
let hccf = 0;
let lcm = 0;
while (remainder != 0 ){
remainder = numberone % numbertwo

if (remainder==0){
hccf = numbertwo
}
numberone= numbertwo
numbertwo = remainder;

}
lcm = (lcmnumber_one * lcmnumber_two)/hccf
return {"hcf":hccf,"lcm":lcm,"product": hccf*lcm}
}

console.log(lcm_hcf(6,8))
