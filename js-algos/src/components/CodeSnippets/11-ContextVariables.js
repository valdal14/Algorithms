const ContextVariables = `// Functions, Context, and Variable Environments

/*
    Variable Environments means where the variables leave and how they relate to each other in memory.

    Example:

    function b(){
        var myVar; // the value of myVar = undefined
    }

    function a(){
        var myVar = 2; // the value of myVar = 2;
        b();
    }

    var myVar = 1; // the value of myVar = 1 in the Global Execution Context
    a();

    EXECUTION STACK --------------------------------

        0- The Global Execution Context is created
        1- myVar in the Global scope is now part of the Window Object as well as a() and b()
        2- a() is invoked and a new Execution Context is created as well a new Execution Stack where a() is place on top
        3- The body of function a() is executed until we reach b() 
        4- Invoking b() inside of a() will create a new execution context and place b() on top of the stack
        5- The body of b() is executed and both b() and a() remove from the Stack
        6- myVar will be undefined inside both a() and b() and 

*/

function b(){
    var myVar; // the value of myVar = undefined
    console.log(myVar);
}

function a(){
    var myVar = 2; // the value of myVar = 2;
    console.log(myVar);
    b();
}

var myVar = 1; // the value of myVar = 1 in the Global Execution Context
return myVar;
a();
`;

export default ContextVariables;