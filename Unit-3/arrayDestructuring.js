/* 
?   Array Destructuring

    -  Allows us to unpack values from arrays into distinct variables.
    -  Similar syntax to array literals, but the square brackets [] are on the left side of the assignment operator (=)
    - Great way to pull info from the array and assign to its own variable
*/

// WITHOUT Destructuring
//  const fullName = ["Mallyn", "Mayville"];
//  const firstName = fullName[0];
//  const lastName = fullName[1];
//  console.log(firstName, lastName);

// WITH Destructuring
const fullName = ["Mallyn", "Mayville"];
let [firstName, lastName] = fullName;
console.log(firstName); // Mallyn
console.log(lastName);  // Mayville
console.log(firstName, lastName); // Mallyn Mayville

// ---------------------------------------------------------------------
/* 
?   Spread Operator

    - The Spread Operator basically pulls out the elements of an array as a standalone list of elements
    
    Denoted by three consecutive periods:  ...Array
The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.
*/

const myName = ["Mallyn", "Mayville"];

const copiedName = [...myName]; // The spread operator inserts the elements from fullName
console.log("Copied w/ spread operator:", copiedName); // Copied with spread operator: [`Mallyn`, `Mayville`]
console.log(copiedName[0]); 

const anotherCopy = [myName];  // insets the array as a whole
console.log("Copied w/o spread operator:", anotherCopy); // Copied w/o spread operator: [ [`Mallyn`, `Mayville`] ]
console.log(anotherCopy[0][0]);

// An Example with numbers:
// let numberArray = [];

// for (i=0; i <=20; i++) {
//     numberArray.push(i);
// }
// console.log(numberArray);

// const newNumberArray = [...numberArray];
// console.log(newNumberArray);

// the spread operator "copied" the first state of my name, the copy did not update but the original can
myName.unshift("Miss");
console.log("My Name:", myName);  // My Name: [`Miss`, `Mallyn`, `Mayville]
console.log("Copied Name:", copiedName); // Copied Name [`Mallyn`, `Mayville`]

// Math.min - Returns the smaller of a set of supplied numeric expressions.
console.log(Math.min(1, 5, 13, -3)); // -3 

const prices = [10.99, 5.99, 3.99];
console.log(Math.min(prices));  // NaN, cant perform Math.min on an array, array is not equal to number
console.log(Math.min(...prices)); // 3.99, spread operator was able to unpack the numerical values from the array to process with Math.min

// * Example changing the original and copied array

const persons = [
    {
      name: "Jane",
      age: 28,
    },
    {
      name: "John",
      age: 35,
    },
  ];

// old way of copying persons:
// const copiedPersons = persons.map((person) => ({
//     name: person.name,
//     age: person.age
// }));

// Using spread operator:
const copiedPersons = [...persons];

// Test using push on persons array, does copiedPersons change
persons.push({name: "Anna", age: 29});

console.log("Persons Array:", persons); // Includes Anna object in array

console.log("Copied Persons Array:", copiedPersons); // Copy does not include Anna, created before Anna was added