const SyntaxParser = `// SYNTAX PARSER ---------------------------------------------------------------------------------

/*
    A PROGRAM THAT READS YOUR CODE AND DETERMINES WHAT IT DOES AND IF ITS GRAMMER IS VALID (Compiler or/and interpreters)
    Compilers and Interpreters do the translation for us.
*/

// LEXICAL ENV  ----------------------------------------------------------------------------------

/*
    WHERE SOMETHING SITS PHYSICALLY IN THE CODE YOU WRITE.
    Lexical means having to do with words or grammar. A Lexical environment exists in programming languages in which where you write something is important.

    Example:
*/

// You may have a function with a variable inside of it. 
// The 'a' variable sists lexically inside the function, that it is physically the code that we are writing.
// The Compilers or Interpreters care where your code is physically placed.
// When we talk about the Lexical Env of something iside the code, we talk about where it is written and what's surrounds it.

function hello() {
    var a = 'Hello World';
    return a;
}

var a = hello();
return a;

// EXECUTION CONTEXT  ---------------------------------------------------------------------------------

/* 
    A WRAPPER TO HELP MANAGE THE CODE THAT IS RUNNING

    There are a lot of lexical environments. Which one is currently running is managed via the execution context. It does contain you code, but it can also contain
    things beyond what we have written in the code.
*/`;

export default SyntaxParser;