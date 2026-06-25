let person ={
    name : "Alice",
    address :"123 Kimathi St",
    "age" : 27,
    'is student': true
}

console.log(person)
console.log(person.name)
console.log(person["is student"])
console.log(person['address'])

person.phone_number = '0712345678'
console.log(person) //{name: 'Alice', address: '123 Kimathi St', age: 27, is student: true, phone_number: '0712345678'}


console.log(Object.keys(person))// ['name', 'address', 'age', 'is student', 'phone_number']
console.log(Object.values(person)) //(5) ['Alice', '123 Kimathi St', 27, true, '0712345678']
console.log(Object.entries(person))