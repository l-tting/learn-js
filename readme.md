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