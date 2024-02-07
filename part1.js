// const arry = [1, 2, 1, 3, 4, 3, 5];

// const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
// const duplicateElements = toFindDuplicates(arry);
// console.log(duplicateElements);

// const arry = [1, 2, 1, 3, 4, 3, 5];

// function findDuply (numbers){
//     const i = [];  
//     const d = []; 
//     for(const num of numbers){
//         if(i.includes(num) === false){
//         i.push(num);
         
//         }
//         else d.push(num);
//     }
//     return d.length;
// }

// const final = findDuply(arry);
// console.log(final);

array = [5,6,11,12,98, 5];

function moreThanOne (numbers){
    const deep = [];
    sum = 0
    for(const num of numbers ){
        // if( deep.includes(num) === false){
        //     deep.push(num);
            
        // }
        console.log(num);

    }
    return deep;
}

const multiple = moreThanOne (array);
console.log (multiple)

// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming