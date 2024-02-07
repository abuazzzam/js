


const mname = 's';

function checkName(sname) {
    if(typeof sname !== 'string' || typeof sname === 'number'){
        return 'invalid';
    }

   const compareLetters = ['A', 'y', 'i', 'e', 'o', 'u', 'w'];
    let lastChar = mname[mname.length - 1];
    if(compareLetters.includes(lastChar)){
        return 'good name';
    } else
            return 'bad name';

    }
    const result =  checkName(mname);
    console.log(result);