let arr = [1, 2, 3, "JS", "Python", true, 34.78]
console.log(arr)
//(7) [1, 2, 3, 'JS', 'Python', true, 34.78]

console.log(arr[4])
console.log(arr.at(-3))
console.log(arr.at(3))

console.log(arr.length)//7

let subarr = arr.slice(2,5)
console.log(subarr)

arr.unshift(100,200,"false")
console.log(arr)//(10) [100, 200, 'false', 1, 2, 3, 'JS', 'Python', true, 34.78]

arr.push(1000,2000)
console.log(arr) //(12) [100, 200, 'false', 1, 2, 3, 'JS', 'Python', true, 34.78, 1000, 2000]

arr.pop()
console.log(arr)//(11) [100, 200, 'false', 1, 2, 3, 'JS', 'Python', true, 34.78, 1000]

arr.shift()
console.log(arr)//(10) [200, 'false', 1, 2, 3, 'JS', 'Python', true, 34.78, 1000]


//splice to add without replacement / deletion
arr.splice(5,0,"four","five","six")
console.log(arr) //(13) [200, 'false', 1, 2, 3, 'four', 'five', 'six', 'JS', 'Python', true, 34.78, 1000]

//splice to add with replacement
arr.splice(8,2,"Java","C++")
console.log(arr)//(13) [200, 'false', 1, 2, 3, 'four', 'five', 'six', 'Java', 'C++', true, 34.78, 1000]

//remove without replacement
arr.splice(4,2)
console.log(arr)//(11) [200, 'false', 1, 2, 'five', 'six', 'Java', 'C++', true, 34.78, 1000]

console.log(arr.includes('Java')) //true

let reversed = arr.reverse()
console.log(reversed) //(11) [1000, 34.78, true, 'C++', 'Java', 'six', 'five', 2, 1, 'false', 200]

let new_arr = [1,100,3,20,123]
console.log(new_arr.sort()) //(5) [1, 100, 123, 20, 3]

