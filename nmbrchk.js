
// const array = [ 1 , 2 , -3 ];

// const array = [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]
const array = ["1" , {num:2} , NaN ];
// const array = { num: [1, 2, 3] };

function deleteInvalids(array) {
    if (Array.isArray(array)) {
        let newNumber = [];
        for (arr of array) {
            if (typeof arr === 'number' && !isNaN(arr)) {
                newNumber.push(arr);
            }
            // console.log(arr);
        }
        return newNumber;
    } else
    return 'invalid';
}
console.log(deleteInvalids(array));