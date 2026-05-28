// TODO: Create a function called ‘multiply’ that will take in 3 parameters and multiply all 3 numbers together. 
// Note: The argument passed must NOT be the same number.
function multiply(num1, num2, num3) {
    // Check if any of the arguments are the same
    if (num1 === num2 || num2 === num3 || num1 === num3) {
        return "Error: The arguments passed must not be the same number.";
    }
    return num1 * num2 * num3;
}

// TODO: Create a function expression called ‘convertToSeconds’ that takes in a number of minutes 
// as an argument and returns the amount in seconds.
const convertToSeconds = function(minutes) {
    return minutes * 60;
};

// TODO: Create a function called fahrenheitToCelsius that takes the temperature as a parameter 
// and returns the equivalent temperature in Celsius.
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
};

// TODO: Create a function that takes a string as a parameter and returns the reverse of the string.
function reverseString(str) {
    return str.split('').reverse().join('');
};

// TODO: Create a function that takes in a string and returns the number of Vowels in the sentence.
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
};

// TODO: Create a “isPrime” function that takes a number as a parameter and returns true if the number is prime, 
// and false otherwise. Make sure to test your code with 4 numbers.
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    // Loop from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

// --- Testing the functions ---

// 1. Test multiply (try changing values to be equal to see the error message)
console.log("Multiply Test (2, 3, 4):", multiply(2, 3, 4)); 
console.log("Multiply Test (5, 5, 2):", multiply(5, 5, 2)); 

// 2. Test convertToSeconds
console.log("Convert 5 minutes to seconds:", convertToSeconds(5));

// 3. Test fahrenheitToCelsius
console.log("32°F to Celsius:", fahrenheitToCelsius(32));

// 4. Test reverseString
console.log("Reverse 'Hello':", reverseString("Hello"));

// 5. Test countVowels
console.log("Vowels in 'Javascript':", countVowels('Javascript'));

// 6. Test isPrime with 4 numbers
console.log("Is 7 prime?", isPrime(7));      // true
console.log("Is 10 prime?", isPrime(10));    // false
console.log("Is 13 prime?", isPrime(13));    // true
console.log("Is 1 prime?", isPrime(1));      // false

