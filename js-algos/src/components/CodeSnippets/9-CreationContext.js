const Creation = `// The Execution Context - Code Execution

/*
    We already mentioned that when we execute a JS script an Execution Context is created and that there are two phases:
        - Creation: Where the Global Execution Context is created and the Global Object, 'this' and eventually Outer Envs are created
        - Execution: In this phase we have already the above things but in addition our code will be executed

    JS is a single threaded synch execution (one command at the time and in order)

    Example:
*/

function b(){
    console.log('Called b()');
}

b(); // Called b()

console.log(a); // Undefined

var a = 'Hello World!';

console.log(a); // Hello World!

return a;
`;

export default Creation;