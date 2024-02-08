


const mname = { name:'rafee'}

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
    const result =  checkName(mname);
    console.log(result);