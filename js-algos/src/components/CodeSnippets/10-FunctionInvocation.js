const FunctionInvocation = `// Function Invocation and the Execution Stack

/*
    INVOCATION simply means running our function.
        - In JS just using parenthesis ()
    
    Let's see what happen with an example:

    function b(){
        console.log('Called function b()');
    }

    function a(){
        b();
    }

    a();

    Execution Stack:

        1- A Global Execution Context is created
        2- Creation Phase:
            - Inside the Global Object the function b() and a() are hoisted 
        3- When the parser reach a() and it is supposed to invoke a() a NEW EXECUTION CONTEXT (create and execute) is created and placed inside the EXECUTION STACK
        4- EXECUTION STACK is just a stack, one on top of the other
            - The one on top of the stack is what will be executed
        5- Anytime we execute or invoke a function in JS a new EXECUTION CONTEXT is created and placed on the EXECUTION STACK
        6- If like in our example, we have a function invocation inside a function a brand new EXECUTION CONTEXT is created and placed on top of the EXECUTION STACK and that code will be executed
        7- Once a function execution is completed it will be pop out from the top of the stack until we are back to the Global Execution Context
        8- Does not matter which function lexical order we have, the execution stack will be created based on the function execution:

        Example: In this case the function a() is lexically declared first but they are already in memory and the stack order is determined by the
        the function that will be executed

            function a(){
                b(); // EC: Step 2 - New Execution Context and jump to EC: Step 3
                var c;
            }

            function b(){ // EC: Step 3 - Run the body of the function
                var d; // After the body of the function is completed it will run the rest of function a() body
            }

            a(); // EC: Step 1
            var d; // this will not be executed after a() is invoked since JS is synch and it will run the body of the function a() inside it's own execution context
*/

`;

export default FunctionInvocation;