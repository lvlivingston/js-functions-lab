// 1. Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
// or more "elegantly" using the fantastic ternary expression!
// return  x >= y ? x : y;
}
console.log(maxOfTwoNumbers(3, 9));


// 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
const maxOfThree = function(x,y,z) {
    if (x >= y && x >= z) {
        return x;
    } else if (y >= x && y >= z) {
        return y;
    } else {
        return z
    }
};
console.log(maxOfThree(1,7,3));


// 3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(x) {
    //change input to lowercase
    x = x.toLowerCase();
    if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
        return true;
    } else {
        return false;
    }
}
console.log(isCharAVowel('o'));
console.log(isCharAVowel('f'));


// 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.
const sumArray = function(array) {
    return array.reduce((total, current) => total + current, 0);
};
console.log(sumArray([2, 4, 5]));


// 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.
function multiplyArray(array) {
    return array.reduce((total, current) => total * current, 1);
}
console.log(multiplyArray([2, 4, 5]));


// 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
const numArgs = function() {
    return arguments.length;
};
console.log(numArgs(1, 2, 6));
console.log(numArgs('x', 'y', 'z'));


// 7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string “ratskcor”.
let word = 'example';
function reverseString() {
    return word.split('').reverse().join('');
}
console.log(reverseString());


// 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
const longestStringInArray = function(array) {
    let longest = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i];
        }
    }
    return longest;
}
console.log(longestStringInArray('cat', 'ball', 'watermelon'));


// 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
function stringsLongerThan(array, length) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > length) {
            result.push(array[i]);
        }
    }
    return result;
}
const inputStrings = ['say', 'hello', 'in', 'the', 'morning'];
const minLength = 3;
console.log(stringsLongerThan(inputStrings, minLength));