const ScopeChain = `// SCOPE CHAIN -----------------------------------------------

// Every Execution Context has a reference to it's Outer Environment.
// In the case of function b() its Outer Env is the Global Execution Context 
// This allow b() to access myVar in the Global Scope.
// The b() function seats in the Lexical env (where the code is written) that is exactly the Global Scope as myVar
// The JS runtime env automatically creates a reference to the Outer Env based where the code was physically written
// This is how the Scope chain works in JS
// When the b() body is executed the interpreter looks at myVar, it does not find it in the same execution context and goes down to the scope chain until it reaches the Global Execution Context where myVar was defined.

// function b(){
//     console.log(myVar); // it will print 1 since my var is declared in the Global Execution Context
//     return "myVar inside function b() value is: " + myVar;
// }

// function a(){
//     var myVar = 2; // the value of myVar = 2;
//     console.log(myVar);
//     return b();
// }

// var myVar = 1; // the value of myVar = 1 in the Global Execution Context
// return a();

// If we change the Lexical Env of function b() like so:

    // - In this scenario the Outer Env of b() became the Execution Context of a()
    // - The value of myVar will be 2 since when it went down to the Scope chain it found myVar in its directly Outer Env a().

function a(){

    function b(){
        console.log(myVar); // it will print 1 since my var is declared in the Global Execution Context
        return "myVar inside function b() value is: " + myVar;
    }

    var myVar = 2; // the value of myVar = 2;
    console.log(myVar);
    return b();
}

var myVar = 1; // the value of myVar = 1 in the Global Execution Context
return a();


`;

export default ScopeChain;