// ( 10 * 120) - ( 500 + (8 * 50) ) = 300


function calculateMoney(ticketSale) {
    if( ticketSale >= 0 ) {
    const securityCost = 500;
    const lunchCost = 8 * 50;
    const totalCost = securityCost + lunchCost;
    const totalSellEarn = ticketSale * 120;
    const inHand = totalSellEarn - totalCost;
    return inHand;
} else
    return 'invalid';  
}

console.log(calculateMoney(1055));