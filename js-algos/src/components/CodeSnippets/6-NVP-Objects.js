const Nvp = `// Name/Value Pairs and Objects -------------------------------------------------------------

/* 
    NAME-VALUE PAIR IS A NAME WHICH MAPS TO A UNIQUE VALUE

    The name may be defined more than once, but it can only have one value in any given context.
    That value can be also an additional name-value pair.
    
    In any particular execution context (A section of code that is running) a name can only exists and be defined with 1 value,
    however that value can hold an additional name-value pair.

    Example:
*/

// one name-value pair
var address = 'Main Street';

// OBJECTS -----------------------------------------------------------------------------------------

/*
    AN OBJECT IS A COLLECTION OF NAME-VALUE PAIRS

    Example:
*/

var name = {
    name: {
        name: 'Valerio'
    }
}

return name.name.name;
`;

export default Nvp;