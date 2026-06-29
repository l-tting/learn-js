*INTRODUCTION TO JAVASCRIPT*
=> JS : a programming language that lets us build dynamic and interactive web pages
=> JS has 2 purposes:
1.User Interactivity => the ability  to perform some actions(events) when using an     application e.g. clicking , submit a form, type, scroll, focus, hover
  
2.Reactivity -> JS automatically updates content without requiring a manual reload / refresh

*Building clocks of a web page*
HTML - skeleton structure
CSS. - styling
JS - interactivity & reactivity

*Where to write JS?*
1.Inside a html file (internal JS) :
  -> in the body section
  -> in the head section
2.As a separate JS file with .js extension (external JS)=> when you have a lot of JS to write 

*Variables*
-> A named container used to store values 

*Declaring variables in JS*
1.let keyword  - allows you to declare a variable and change it later on
2.const keyword - allows you to declare a variable that remains unchanged throughout the program
3.var keyword - works just like let but was popular with older versions of browsers(replaced by let)
*Data Types in JS*
1.String - sequence of alphanumeric char(s) wrapped in single or double quotes
2.Number - numeric values -> represents both floats and integers
3.Boolean - represents Truth values (true and false)

*Output in JS*
console.log() -> outputs in the console window

*determine data types in JS*
-> typeof() : returns the datatype of a value / variable 

*Comments in code*
-> A way for you to document code
1.Single line comments -> //
2.Multiline / Block comments  -? /*  */
 


0714056473 - Brian

*string methods*
1.length -> determine the no of char(s) of a string 
2.accessing values in strings -> index
     -> indexing starts from 0
     N/B:- JS does not support -ve indexing
3.concat -> joining / combining two or more strings
        "+" or concat() method
4.Template  literals -> how to embed variables inside a string
         -> this is the equivalent of f-string in Python
5.slice -> taking a portion of a string -> use indexing
        -> slice(start, end) 
6.toUpperCase() -> converts all string chars to uppercase format
7.toLowerCase() ->  converts all string chars to lowercase format
8.trim() -> removes whitespaces from a string 
       trimStart(). trimEnd()

9.split() -> splits a string into substrings stored in an array
         -> split uses a specified char




*OPERATORS IN JS*
1.Logical Operators
  logical and -> && - returns true only if all conditions are true
  logical or  -> || - returns true if at least one is true
  logical not -> ! - returns the opposite of a boolean value

2.Arithmetic operators 
  => + , - , / , * , ** , % , 
   * ++ * -> increase by 1
   * -- * -> decrease by 1

3.Comparison Operators -> compares values
   :- > , < , >= , <= 
    == : loose equality -> checks whether two variables are equal in value(allows for type coercion)
    != : loose inequality
    === : strict equality -> checks for both value and data type(doesnt allow for type coercion)
    !== : strict inequality

4.Assignment Operators
    = -> default assignemt operator
    += 
    -=
    /=
    *=
    **=
    %=


+ => concat
  => add / sum

*Coverting data types from one to another*
1.Type coercion -> automatic conversion of data from one type to another
         -> done by JS (implicit)
2.Type conversion -> explicit conversion of data from one type to another
         -> done by the programmer


*Polymorphism* -> where a value / object / operator takes more than one form
     -> operator overloading
         


*Task*
1.includes()
2.replace()
3.indexOf()
4.startsWith()
5.endsWith()
6. Task on slide 56


*CONDITIONAL STATEMENTS IN JS*
-> They enable a program to make decisions based on some predefined condition
-> We have the following types of conditional statements:
1.if statements -> uses the if key word
2.ternary operator  -> ?
     -> a simpler way of writing simple if-else statements
     -> only used when there is one condition


let variable = condition ? what happens if true : what happens if not true

*syntax of if *
if(condition){
   // what happens if condition is true / met
}else{
   // what happens if condition is not met
}

if(condition 1){
   // what happens if condition 1 is met
}else if( condition 2){
   // what happens if condition 2 is met
}else if( condition 3){
   // what happens if condition 3 is met
}else{
   // what happens if all conditions are not met
}

*prompt()* -> used to take user input 
    -> Any data coming from user input is always a string

*task on slide 69*


*DATA STRUCTURES*
-> We have 2 data structures:
1.Array
2.Object

*Arrays*
-> A data structure that can hold multiple values of any data type 
-> JS arrays are the equivalent of Python lists 

*properties of arrays*
1.Can hold multiple values of any data type
2.They are ordered - use indexing to access values
3.They are mutable - can be changed / altered
4.JS arrays dont support -ve indexing by default

*Array methods*
1.Create an array -> use []
2.Accessing array values -> use indexing
       -> by default -ve indexing isnt supported unless
       when using the at() method
3.determine no of values in an array -> length
4.slice() - extracts a portion of an array slice(start,end)
5.adding items in array
      ->push() - adds values at the end of an array
      ->unshift() - adds values at the begining of an array
6.removing items from an array
      -> pop() -> removes the last item
      -> shift() - removes the first item
7.splice() -> adds , removes or replaces depending on the arguments passed
           -> splice(start, delete count , items to add)
8.includes() - checks whether an element is contained in an array and returna boolean
9.reverse() -> reverses the order of an array
10.sort() - sorts arrays in alphabetical order evaluating them as strings
11.join() - combines array elements into a string

*OBJECTS*
-> are data structures that store data in key-value pairs
-> They are the equivalent of Python dictionaries

*Properties of Objects*
1.Stores data in key value pairs
2.Keys are used to access the values
3.Keys are unique
4.Keys are of string type
5.Values can be of any data type

-> represented using { }
-> properties in keys are comma-separated

property => key + value

*accessing values in objects*
1.Dot notation -> uses .
         -> used when the key follows identifier naming rules
2.Bracket notation -> uses []
         -> used regardless of whether keys follow variable naming rules or not

*Object Methods*
1.Adding new properties - use bracket or dot notation
2.Object.keys() - returns all your keys in an array
3.Object.values() - returns all your values in an array
4.Object.entries() -> returns key-value pairs in arrays

*Task*
1.Arrays -slide 72 & 73
2.Objects - slide 78 & 79


Assignment 2: Extract Subarray
Given an array “sourceArray”, extract a subarray “extractedArray” from index 2 to index 4 using the .slice() method. Then, modify the extractedArray by replacing its elements with 'x', 'y', and 'z' using the .splice() method. Finally, display both the sourceArray and the modified extractedArray.


5. Reverse 987 to 789 without using an inbuilt -method or Assigning 789 manually.
my_arr= [23, “Jane”, 560, [“Lesson”, “Maths”, {“currency” : “KES”}], 987, 76,”John”]
Displa



*LOOPS*
-> A block of code that executes repeatedly as long as a specified condition is met
-> eliminate redundancy in code 
*Types of Loops*
1.for loop - used when we know the no of iterations
2.while loop - loops as long as the condition is met

*for loop syntax*
for(initialization; condition; update){
    //block of code to be executed repeatedly
}

*initialization* - defines the starting point of your loop
*condition* - specifies the condition to be met
       -> as long the condition is met , the loop keeps executing
*update* -> increment / decrement after each iteration / loop (++ / --)


*Nested Loops*
-> A loop within a loop
-> for each iteration of the outer loop, the inner loop must execute exhaustively
before going back to the outer loop


*task on loops*
1.slide 82
2.Write a program that calculates the total stock in a company from the array/list below if we know that the stock is the last digit in every array/list.
let prods = [[‘omo’,’30kshs’,’300’], [‘milk’,’50kshs’,’200’],[‘bread’,’45kshs’,’359’], [‘coffee’,’5kshs’,’79’]]


Using the link HERE , copy the array of JSON objects containing countries with their populations. Display in an object showing how many countries have population between 0 - 50m, 51m - 100m, > 100m as the keys
e.g pops = { “0-50m” : 216, “51-100m” : 16, ” >100m” : 13 }


*while loops*
-> Only concerns its iteration scheme with the condition specified
-> uses the while keyword



*FUNCTIONS*
-> A reusable block of code meant to execute a specific task

*why use functions?*
1.Reusability - use parameters
2.Modularity
3.Code organization & Maintainability
4.Better debugging
5.Better scaling

*Syntax of a function in JS*
function function_name(){
   //block of code
}

*Parts of a function*
1.Function definition -> function keyword + function name + possible parameters
       e.g *function add_numbers()*, *function add_numbers(x,y)*
2.Function body -> the block of code to be executed by the function
     e.g. function add_numbers(x,y){
             return x + y ---> *function body*
     }
3.Function call -> calling a function by its name so that it executes its task
        e.g add_numbers()

*types of functions*
1.Inbuilt functions - come with the programming language and have fixed purposes
        e.g. console.log(), typeof(),
2.User-defined functions -> custom functions created by a programmer for custom purposes
        e.g. add_numbers(), get_user(), find_grade()


*Global vs Local Scope*
*scope* -> determines where a variable is accessible in a program
*Global scope* -> contains global variables and data which are accessible in the 
entire program
*Local scope* -> contains local variables and data which are only accessible in their 
defined scope / block

*Parameters vs Arguments*
*parameter* - a placeholder value / variable used in place of real values to make functions reusable -> passed in function definition
*argument* - a real value passed in place of parameters when calling a function

*N/B* -> The order and number of parameters matches the no and order of arguments



*Functions Task*
on slide 83 -> intermediate questions
do the following: 1,2,4,7 -> using functions