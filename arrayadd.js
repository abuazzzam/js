// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

// Task-5:
// Generate a random number between 10 to 20.

function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            // console.log(number);
            odds.push(number);
        }
    }

let sum = 0;
    for (const number of odds) {
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;
}

// const numbers = [42, 13, 58, 65, 81, 96, 7];
// const avg = oddAverage(numbers);
// console.log('average of the odd numbers is: ', avg);

const numbers = [5,6,11,12,98,5];

function arrayAddition (numbers){
    let sum = 0;
    let odd = [];
    let even = [];
    for(const num of numbers){
         sum = sum + num;
         if( num % 2 === 1){
            odd.push(num);
         }
         else 
            even.push(num);
    }

    let count = odd.length;
    let avgodd = 
    return even;
}

const lion = arrayAddition(numbers);
console.log(lion);


