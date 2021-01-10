const GlobalEnv = `// The Global Environment and The Global Object ----------------------------------------------

/* 
    Whenever code is run in JS it runs inside an EXECUTINON CONTEXT (GLOBAL)
    As we learned the EXECUTINON CONTEXT is a JS wrapped in which the intepreter does parsing, compilation and execution.
    There is more than one EXECUTINON CONTEXT, but the main is the GLOBAL EXECUTINON CONTEXT.
    The GLOBAL EXECUTINON CONTEXT is where everythin in our code is accessible

    The GLOBAL EXECUTINON CONTEXT creates two things for us:
        1- A Global Object
        2- The 'this' keyword
    The JS Engine create the Global Object and the 'this' keyword whenever our code is run (Inside an Execution Context)
    
    Even if we run an empty script on our browser the EXECUTINON CONTEXT is still created and we have access to 'this' and the global scope:
        - Typing 'this' into the console we will get:
        - Window {0: Window, 1: global, window: Window, self: Window, document: document, name: "", location: Location, …}
        - Windows is the GLOBAL OBJECT inside the browser
        - Note: If we use Nodejs the GLOBAL OBJECT will be the module itself
        - If we have different tabs opened we will have different global object since each Window will have its own EXECUTINON CONTEXT.
        - The Global Object at the browser level will be always Window and at the global execution context 'this' always refers to the Global Object Window.
        - window === this always true inside the GLOBAL EXECUTINON CONTEXT. Global does not mean something inside a function tho.

        Example: The code below is in the Global Execution Context

        var a = 'Hello World!';

        function b(){}

        If we open Window we will find the 'a' variable as well as the b() function.
        If I type window.a we will get the String 'Hello World!' back on the console.
        Global variable and functions like 'a' and b() will be automatically attached to the global object

*/

var a = 'Hello World!';

function b(){}

return window.a;

`;

export default GlobalEnv;