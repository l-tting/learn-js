let x = 50; // global variable x
let y = 200;
let z = x + y;
console.log(z); //250

let a = 4;
let b = 3;
let c = a + b;
console.log(c);

let a = 12;

function add_numbers(x, y) {
  let z = x + y;
  return z;
}

let sum1 = add_numbers(3, 4); //function call
let sum2 = add_numbers(100, 200);
let sum3 = add_numbers(50, 200);
console.log(sum1);
console.log(sum2);
// console.log(sum3)

// Write a program which accepts email as form input or from terminal.
//  Validate the email by checking if it's a valid email.
// Hint: Check if it contains an “@” symbol and “.” symbol.

let email = prompt("Enter email");

function verify_email(email) {
    let result
  if (email.includes("@") && email.includes(".")) {
    result = "valid email"
  } else {
    result = "Invalid email"
  }
  return result
}

let check_mail = verify_email(email)
console.log(check_mail)


let add = (a,b) =>{
    return a + b
}
let sum4 = add(12,12)
console.log(sum4)

let add2 = (a,b) => a + b

let double = x => x * 2


const mail_check = (email) =>{
     let result
  if (email.includes("@") && email.includes(".")) {
    result = "valid email"
  } else {
    result = "Invalid email"
  }
  return result
}
