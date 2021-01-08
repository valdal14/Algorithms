// String.prototype.ignoreCases = (str)=> {
//     let string = "";
    
//     if(str === undefined || str === null) {
//         return 'Invalid string';
//     }

//     if(str.length > 0 && isNaN(str)) {
//         for (let i = 0; i < str.length; i++) {
//             string += str[i].toLowerCase();
//         }
//         return string;
//     } else {
//         return 'Invalid string';
//     }
// }

// function charCounts(string) {
//     // create a new instance of String
//     const str = new String();
//     // validate the string and ignore cases
//     const newStr = str.ignoreCases(string);
//     let obj = {};

//     if(newStr !== 'Invalid string'){
//         for (let i = 0; i < newStr.length; i++) {
//             if(obj.hasOwnProperty(newStr[i])){
//                 let value = obj[newStr[i]];
//                 value += 1;
//                 obj[newStr[i]] = value;
//             } else {
//                 obj[newStr[i]] = 1;
//             }
//         }

//         return obj;

//     } else {
//         return newStr;
//     }
// }

// const test = charCounts('A110292eeeDERsd3');
// console.log(test);

const FirstExample = `String.prototype.ignoreCases = (str)=> {
    let string = "";
    
    if(str === undefined || str === null) {
        return 'Invalid string';
    }

    if(str.length > 0 && isNaN(str)) {
        for (let i = 0; i < str.length; i++) {
            string += str[i].toLowerCase();
        }
        return string;
    } else {
        return 'Invalid string';
    }
}

function charCounts(string) {
    // create a new instance of String
    const str = new String();
    // validate the string and ignore cases
    const newStr = str.ignoreCases(string);
    let obj = {};

    if(newStr !== 'Invalid string'){
        for (let i = 0; i < newStr.length; i++) {
            if(obj.hasOwnProperty(newStr[i])){
                let value = obj[newStr[i]];
                value += 1;
                obj[newStr[i]] = value;
            } else {
                obj[newStr[i]] = 1;
            }
        }

        return obj;

    } else {
        return newStr;
    }
}

const test = charCounts('A110292eeeDERsd3');
return test;

`;

export default FirstExample;