/*  
JavaScript Operators
        - Plus          +
        - Times         *
        - Power         **
        - Dot           .
        - Assignment    =
        - Comparison    ==
                        ===

        Used to:
            - Assign
            - Compare
            - Arithmetic (maths)
            - Logical 
            - Conditionals
 */

// Equal To: ==, checks value
"3" == 3;
console.log("3" == 3); // true
console.log("4" == 4); // false

// Strict Equal To: ===, checks value and data type
console.log("3" === 3); // false
console.log("hello" === "hello"); //true

// Not Equal and Strict Not Equal: !=, !==
console.log("2" != 2); //false
console.log("2" != 3); // true
console.log("2" !== 2); //true

// Greater Than / Less Than: > < , true/false return
let y = 3 > 2;
console.log("Greater Than: ", y);

// Greater Than or Equal To: >=
console.log(3 >= 2, 5 >= 10, 5 >=5);

// Less Than or Equal To:
console.log(2 <= 2, 1 <= 2, 5 <= 2);

//  And: &&, both must be true
console.log(2 < 10 && 2 > 1); // true
console.log(5 < 3 && 2 > 1); // false
// console.log("And: ", 2 && 3);

// Or: || , one must be true
console.log(2 || 4);
console.log(3 <1 || 5 > 3); // true

//* Logical Operators: determine the logic between variables or values
// Ex w/ reassignment

let a = 1; // 1
a = a + 1;
console.log(a); // 2
a = a + 1;
console.log(a); // 3

// Ex without reassignment
let g = 100;
console.log(g + 50); // 150
console.log(g); // 100
g = g + 100
console.log(g); // 200

// Addition:
r += 1; // r = r + 1

let s = 50;
console.log(s += 5); // s = 50 + 5
console.log(s); // 55


// Subtraction
r -= 1; // r = r -1

// Multiplication
r *= 2; // r = r * 2;

// Division: /
r /+ 3; // r = r / 3;

// Remainder (modulus %)
r %= 1; // r = 

console.log(3 % 2); // 1

// Exponential
r **= 1; // r = r * r;

console.log(2 ** 3) // 8
