let x = Number(prompt("Enter a random number"))

if (x % 2 == 0){
    console.log("Even number")
}else{
    console.log("Odd number")
}



let even = x % 2== 0 ? "Even number" : "Odd number"
console.log(even)

//using a ternary operator write a program to check whether 
// a citizen is eligible to vote (age must be 18 or over to vote)

let age = Number(prompt("Enter age"))
let check_voter  = age >= 18 ? "eligible" : "not eligible"
console.log(check_voter)



let num1 = Number(prompt("Enter num1"))
let num2 = Number(prompt("Enter num2"))
let num3 = Number(prompt("Enter num3"))



if ((num1 > num2) && (num1 > num3)){
    console.log("Num1 is the largest")
}else if( (num2 > num1) && (num2 > num3)){
    console.log("Num2 is the largest")
}else{
    console.log("Num3 is the largest")
}




let value1 = Number(prompt("Enter a value"))
let value2 = Number(prompt("Enter a value"))


if((value1>=10 && value1 <=20) && (value2 > 100)){
    console.log("Conditions met")
}else{
    console.log("Conditions not met")
}