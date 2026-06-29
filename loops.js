for(let i = 1; i <=20 ;i++){
    console.log(i)
}
// 1++
// 2++
// 3++
// 4++


// 19++
// 20++

//output using a loop values from 200 to 100
for(let j = 200; j >= 100; j--){
    console.log(j)
}

// 200--
// 199-
// 198-
// // ...
// 101--
// 100--

//looping through arrays
let arr = ['mango','orange','peach']

for(let i = 0;i < arr.length ;i++ ){
    console.log(arr[i])
}


//use a for loop to place / add all even numbers between 1 and 50
//  in a new array called even

let even = []

for(let i=1; i <= 50; i++){
    if(i %2 ==0){
        even.push(i)
    }
}

console.log(even)
//(25) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50]


for(let i=1; i <= 10; i++){
     for(let j= 2 ; j<= 8; j++){
          console.log(i,j)
     }
}
1,2
1,3
1,4
1,5
1,5
1,6
1,7
1,8
2,2
2,3

//summing numbers from 1 to 10
let sum = 0
let i = 1
while (i <= 10){
    sum +=i
    i++
}
console.log(sum)
let x = 5