

// const obj = {name: "kolimuddin", 
//              birthYear: 1999, 
//              siteName: "google"}
const obj = { name: "rahat" , birthYear: 2002, siteName: "Facebook" }

function password(obj) {
    if(typeof obj !== 'object' || !obj.name || !obj.birthYear || !obj.siteName || obj.birthYear.toString().length !== 4){
        return 'invalid';
    }
    // Google#kolimuddin@1999
        let name = obj.name;
        let birthYear = obj.birthYear;
        let siteName = obj.siteName;  
        let newName = siteName.charAt(0).toUpperCase() + siteName.slice(1);       
        let pw = newName + '#'+ name + '@' + birthYear;
      return pw;
    }

const pass = password(obj);
console.log(pass);