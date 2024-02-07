// write a fun

function matchfinder(string1, string2){

if(typeof string1 !== 'string' || string2 !== 'string'){
    return "Provide String"

 else{
    const result = string1.includes(string2)
        return result;
    }
}
}

console.log(matchfinder('john','ahn'))