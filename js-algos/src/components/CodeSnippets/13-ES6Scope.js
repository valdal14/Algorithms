const ES6Scope = `// Scope is where a variable is available in our code and if it is truly the same variable or a new copy
// For instance calling a function twice does not mean we do have the same variables since each call produces a new Execution Context inside the Execution Stack

// NOTE: In ES6 LET was introduced
// Let allows the JS engine to use Block Scoping
// We basically cannot access to a variable before it has been declared

// console.log(a);
// let a;
// Uncaught SyntaxError: Identifier 'a' has already been declared

// When a let variable is declared inside a block 

if(true) {
    // only available inside this block
    let c = 2;
    return c;
}

`;

export default ES6Scope;