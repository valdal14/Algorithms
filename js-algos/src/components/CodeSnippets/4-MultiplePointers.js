// /* Write a function called 'sumZero' which accept a sorted array of integers.
// The function should find the first pair of values which sum is 0 and return them or undefined if the pair does not exists.

// Example: [-3,-2,-1,0,1,2,3] return [-3,3]
//  */

//  function sumZero(sortedArray){
//     let pointerOne = 0;
//     let pointerTwo = 0;
//     let values = [];

//     while(pointerOne !== sortedArray.length) {
//         if((sortedArray[pointerOne] + sortedArray[pointerTwo + 1]) === 0){
//             values.push(sortedArray[pointerOne]);
//             values.push(sortedArray[pointerTwo + 1]);
//             break;
//         }

//         if(pointerTwo === sortedArray.length){
//             pointerOne += 1;
//             pointerTwo = 0;
//         }

//         if(pointerOne === sortedArray.length){
//             return undefined;
//         }

//         pointerTwo += 1;
//     }

//     return values;
//  }

//  const test = sumZero([-3,-2,-1,0,1,2,3]);
//  return test;

const MultiplePointers = `/* Write a function called 'sumZero' which accept a sorted array of integers.
The function should find the first pair of values which sum is 0 and return them or undefined if the pair does not exists.

Example: [-3,-2,-1,0,1,2,3] return [-3,3]
 */

 function sumZero(sortedArray){
    let pointerOne = 0;
    let pointerTwo = 0;
    let values = [];

    while(pointerOne !== sortedArray.length) {
        if((sortedArray[pointerOne] + sortedArray[pointerTwo + 1]) === 0){
            values.push(sortedArray[pointerOne]);
            values.push(sortedArray[pointerTwo + 1]);
            break;
        }

        if(pointerTwo === sortedArray.length){
            pointerOne += 1;
            pointerTwo = 0;
        }

        if(pointerOne === sortedArray.length){
            return undefined;
        }

        pointerTwo += 1;
    }

    return values;
 }

 const test = sumZero([-3,-2,-1,0,1,2,3]);
 return test;`;

export default MultiplePointers;