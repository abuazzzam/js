// function oddAverage(numbers){
//     const sum = 0;
//     const findOdd = numbers % 2 ===1;
//     const sum = sum + findOdd;

// }

// const numbers =[13, 15, 12, 16, 18, 19, 21, 20, 99];
// const sum = 0;
// const findOdd = numbers % 2 ===1;
// const sum = sum + findOdd;

function oddAverage(numbers) {
  const odds = [];
  const evens = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number)}
      else { evens.push(number)
      // if (number % 2=== 0){
      //   evens.push(number)
      // }
    }
  }
    console.log(evens);
  // let sum = 0;
  // for (const number of odds) {
  //   sum = sum + number;
  // }
  // const count = odds.length;
  // console.log(sum, count);
  // const avg = sum / count;
  // return avg;
}
const numbers = [13, 15, 12, 16, 18, 19, 21, 20, 199, 101, 55];

const avg = oddAverage(numbers);
console.log("average of Odd", avg);
