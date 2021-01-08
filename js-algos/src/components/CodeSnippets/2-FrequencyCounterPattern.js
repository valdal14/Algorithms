// function same(arrOne, arrTwo){
//     const size = arrOne.length;
//     for (let i = 0; i < size; i++) {
//         if(arrOne[i]**2 !== arrTwo[i]){
//             return false;
//         }
//     }
//     return true;
// }

// const test = same([1,2,3], [1,4,9]);
// console.log(test);

const FrequencyCounterPattern = `/* Write a function called 'same' which accept two arrays.
The function returns true if every in the array has it's corresponding values squared in the second array.
The frquency of values must be the same.

Example: [2,3,4], [4, 9, 16] returns true [2,3,4], [4, 9, 4]  returns false 
*/

function same(arrOne, arrTwo){
    const size = arrOne.length;
    for (let i = 0; i < size; i++) {
        if(arrOne[i]**2 !== arrTwo[i]){
            return false;
        }
    }
    return true;
}

const test = same([1,2,3], [1,4,9]);
return test;
`;

export default FrequencyCounterPattern;