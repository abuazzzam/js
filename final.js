function calculateMoney(ticketSale) {
    if( ticketSale < 0) {
        return 'Invalid Number'; 
    } else {
    const securityCost = 500;
    const lunchCost = 8 * 50;
    const totalCost = securityCost + lunchCost;
    const totalSellEarn = ticketSale * 120;
    const inHand = totalSellEarn - totalCost;
    return inHand;
} 
    
}

function checkName(sname) {
    if(typeof sname !== 'string' || typeof sname === 'number'){
        return 'invalid';
    }
   const compareLetters = ['A', 'y', 'i', 'e', 'o', 'u', 'w'];
    let lastletter = mname[mname.length - 1];
    if(compareLetters.includes(lastletter)){
        return 'good name';
    } else
            return 'bad name';

}

function deleteInvalids(array) {
        if (Array.isArray(array) !==true) {     
        return 'invalid';
            }    let newNumber = [];
            for (arr of array) {
                if (typeof arr === 'number' && !isNaN(arr)) {
                    newNumber.push(arr);
                }
                // console.log(arr);
            }
            return newNumber;    
}
function password(obj) {
        if(typeof obj !== 'object' || !obj.name || !obj.birthYear || !obj.siteName || obj.birthYear.toString().length !== 4){
            return 'invalid';
        } else {
        // Google#kolimuddin@1999
            let name = obj.name;
            let birthYear = obj.birthYear;
            let siteName = obj.siteName;  
            let newName = siteName.charAt(0).toUpperCase() + siteName.slice(1);       
            let pw = newName + '#'+ name + '@' + birthYear;
            return pw;
        }
}