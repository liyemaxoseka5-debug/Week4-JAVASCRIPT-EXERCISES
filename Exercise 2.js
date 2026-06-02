// TODO: Create a function called sum. The function will take in a parameter and 
// calculate all the numbers from 0 -> the parameter. You must check if the parameter 
// is an integer first before any calculation is made. If the parameter is not a number, 
// return a message stating, “The value passed is not a number”. 
// You are NOT allowed to use methods(!Number.isInteger(n)) or regular expressions.

function sum(number) {
    // Check if the type is not a number OR if the remainder of division by 1 is not 0 (meaning it's a float)
    // This handles the integer check manually without using Number.isInteger()
    if (typeof number !== 'number' || number % 1 !== 0) {
        return "The value passed is not a number";
    }

    let total = 0;
    // Loop from 0 up to the parameter number
    for (let i = 0; i <= number; i++) {
        total += i;
    }
    return total;
}

// TODO: Create a function called ‘factorial’ that takes in a number as a parameter. 
// The function will print the factorial of the entered number, e.g. factorial(4) -> 4*3*2*1 //output 24

function factorial(number) {
    let result = 1; 
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
 
}

// TODO: Create a function called funkyMath. If this function is called with 2 arguments 
// the function will subtract the first from the second. If the function is called with 3 arguments 
// it will add all 3 numbers together. If the function is called with 4 arguments it will add together 
// argument 1 and 2, 3 and 4 separately. Then divide them accordingly, 
// eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,25

function funkyMath() {
    const args = arguments;
    const len = args.length;

    if (len === 2) { 
        // Subtract first (arg 0) from second (arg 1)
        return args[1] - args[0];
    } else if (len === 3) {
        // Add all 3 numbers
        return args[0] + args[1] + args[2];
    } else if (len === 4) {
        // Add arg 1 & 2, divide by sum of arg 3 & 4
        const sum1 = args[0] + args[1];
        const sum2 = args[2] + args[3];
        return sum1 / sum2;
    } else { 
        return "Invalid number of arguments";
    }
}

// TODO: Create a loop that will remove all the odd numbers from the array and 
// add them to a new array. Use the current array [1, 2 , 33, 45, 6,44]. 
// Bonus: Make sure to arrange them from smallest to biggest.

const currentArray = [1, 2, 33, 45, 6, 44];
const oddNumbersArray = [];

for (let i = 0; i < currentArray.length; i++) {
    // Check if number is odd using modulo operator
    if (currentArray[i] % 2 !== 0) {
        oddNumbersArray.push(currentArray[i]);
    }
}

// Bonus: Sort from smallest to biggest
oddNumbersArray.sort((a, b) => a - b);

// TODO: Create an object called ‘me’ with properties of first name, last name, age, favourite colour, dream car

const me = {
    firstName: "Alex",
    lastName: "Smith",
    age: 28,
    favouriteColour: "Blue",
    dreamCar: "Aston Martin"
};

// TODO: Create and add a new property and value of ‘favourite food’ to the object.

me.favouriteFood = "Pizza";

// TODO: Now delete the age property from the object.

delete me.age;


// *******************************************************
// TESTING CODE
// *******************************************************

console.log("--- Testing sum function ---");
console.log("sum(5):", sum(5));          // Expected: 15 (0+1+2+3+4+5)
console.log("sum(10):", sum(10));        // Expected: 55
console.log("sum('hello'):", sum('hello')); // Expected: The value passed is not a number
console.log("sum(4.5):", sum(4.5));      // Expected: The value passed is not a number (not an integer)

console.log("\n--- Testing factorial function ---");
console.log("factorial(4):", factorial(4)); // Expected: 24
console.log("factorial(5):", factorial(5)); // Expected: 120

console.log("\n--- Testing funkyMath function ---");
console.log("funkyMath(10, 2):", funkyMath(10, 2));       // Expected: -8 (2 - 10)
console.log("funkyMath(10, 5, 5):", funkyMath(10, 5, 5)); // Expected: 20 (10+5+5)
console.log("funkyMath(8, 2, 3, 5):", funkyMath(8, 2, 3, 5)); // Expected: 1.25 (10 / 8)

console.log("\n--- Testing Array Loop (Odds removed and sorted) ---");
console.log("Original Array:", currentArray);
console.log("Odd Numbers Array:", oddNumbersArray);

console.log("\n--- Testing Object Manipulation ---");
console.log(me);
console.log("Age property deleted?", me.age === undefined); // Expected: true