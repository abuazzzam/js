// canPay function creation which take two input 
// make sum of array
// comapre the sum with price of number if greater or equal is true else false.
// if 1st input empty return error

function canPay(changeArray, totalDue){
    if (changeArray.length == 0 || totalDue ==0){
        return 'invalid: Put Number'
    }

    let sum = 0;

    for(let i = 0; i < changeArray.length; i++){
        const element = changeArray[i];
        sum = sum + element;      

    }
    if(sum>= totalDue){
        return true;
    }
    else{
        return false;
    }
}

const pay = canPay([],11);
console.log(pay);
