
const arr =  [ 5000 , 2000 , 9000, 1000];
const livingCost = 5400;

function monthlySavings(incomes , livingCost) {
    if(Array.isArray(incomes) !== true || typeof livingCost !== 'number'){
        return 'invalid input'
    }
        let bellowSum = 0;
        let upperSum = 0;
    for(num of incomes){
        if(num < 3000 ){
            bellowSum = bellowSum + num;
    } else if (num >= 3000){
        upperSum = upperSum + num; 
            const tax = upperSum * 20 / 100;
            const totalIncome = bellowSum + upperSum - tax;
            const handSavings = totalIncome - livingCost;
            if(handSavings >= 0){
                return handSavings;
            }
            else return "earn more"
    }  
    }
    }
    
    const inMyHand = monthlySavings(arr,livingCost);
    console.log(inMyHand);