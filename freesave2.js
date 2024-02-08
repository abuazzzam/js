const arr = 5000;
const livingCost = 15400;

function monthlySavings(incomes, livingCost) {
  if (Array.isArray(incomes) !== true || typeof livingCost !== "number") {
    return "invalid input";
  }
  let bellow = [];
  let upper = [];
  let bellowSum = 0;
  let upperSum = 0;
  for (num of incomes) {
    if (num < 3000) {
        bellow.push(num);
      bellowSum = bellowSum + num;
    } else  {
        upper.push(num);
      upperSum = upperSum + num;
    }  
    }
        const tax = (upperSum * 20) / 100;
        const totalIncome = bellowSum + upperSum - tax;
        const handSavings = totalIncome - livingCost;
     
      if (handSavings >= 0) {
        return handSavings;
      } else return "earn more";
    
    
  }


const inMyHand = monthlySavings(arr, livingCost);
console.log(inMyHand);
