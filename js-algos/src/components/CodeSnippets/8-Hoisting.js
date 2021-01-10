const Hoisting = `// HOISTING -------------------------------------------------------------------------------

/*
    If we run the below code you will most probably expect to see as output:
    - Called b()
    - Hello World!
    And you are right this is what will happen.

    // var a = 'Hello World!';

    // function b(){
    //     console.log('Called b()');
    // }

    // b();
    // console.log(a);

    But what happens if I do the following:

    // b(); // 'Called b()'
    // console.log(a); // undefined

    // var a = 'Hello World!';

    // function b(){
    //     console.log('Called b()');
    // }

    Note: We will get the function call due to hoisting and a would be undefined.

    b(); // 'Called b()'
    console.log(a); // undefined

    let a = 'Hello World!';

    function b(){
        console.log('Called b()');
    }

    return a;

*/

    // Note: If we use the ECMA6 syntax and use Let instead of Var we will get a runtime error since Let is not going to be hoisted

    // b(); // 'Called b()'
    // console.log(a); // Cannot access 'a' before initialization

    // let a = 'Hello World!';

    // function b(){
    //     console.log('Called b()');
    // }

    // return a;

/*
    In order to understand it we have to dig into the creation phase of the EXECUTING CONTEXT:
    - The Execution Context is created in two phases:
        - The Creation phase that creates the Global Scope, 'this', and outer environment
        - During the creation phase the Lexical Parser reads and understand where we created variables and functions
        - A space is allocated in memory during the creation phase to host (hoisting) them
        - Hoisting does not really mean that the JS engine moves the declaration to the top
        - Only when the code is executed line by line the JS engine access them
    - The Execution Context execution phase:
        - Only during this pahse variable assignment is done and this is why we get undefined.
        - Undefined is the default value given by the JS engine during the Execution Context creation phases
        - While functions and function's body is allocated in memory during the creation phase variables are all sets to undefined by default
        - This is also why relying on Hoisting is not recommended.

*/

`;

export default Hoisting;