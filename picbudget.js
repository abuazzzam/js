

function picnicBudget(participants) {

    if (typeof participants !== "number" || participants < 0) {
        return "valid positive number"
    } else {

        let first100Cost = 0;
        let seceond101To200Cost = 0;
        let remainingCost = 0;
        let totalCost = 0;

        if(participants <= 100) {
            first100Cost = participants * 5000;
            return first100Cost;
        }
        else if (participants <=200){
            first100Cost = participants * 5000;
            seceond101To200Cost =(participants-100) * 4000;
            totalCost = first100Cost + seceond101To200Cost;
            return totalCost;
        }
    }
}
console.log(picnicBudget(110));
