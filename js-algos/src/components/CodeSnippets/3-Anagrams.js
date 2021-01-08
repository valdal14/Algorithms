// /* 
//     Given two strings write a function to determine whether the second is an anagram of the first one.
//     Return true if it is or false if it is not.

//     Example: 'cinema', 'iceman' return true
// */

// function anagram(strOne, strTwo){
//     if(strOne.length !== strTwo.length){
//         return false;
//     }

//     const first = strOne.split('').sort();
//     const second = strTwo.split('').sort();

//     for (let i = 0; i < first.length; i++) {
//         if(first[i] !== second[i]){
//             return false;
//         }
//     }

//     return true;
// }

// const test = anagram('cinema', 'iceman');
// return test;

const Anagrams = `/* 
Given two strings write a function to determine whether the second is an anagram of the first one.
Return true if it is or false if it is not.

Example: 'cinema', 'iceman' return true
*/

function anagram(strOne, strTwo){
    if(strOne.length !== strTwo.length){
        return false;
    }

    const first = strOne.split('').sort();
    const second = strTwo.split('').sort();

    for (let i = 0; i < first.length; i++) {
        if(first[i] !== second[i]){
            return false;
        }
    }

    return true;
}

const test = anagram('cinema', 'iceman');
return test;

`;

export default Anagrams;