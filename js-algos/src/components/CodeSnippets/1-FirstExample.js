const FirstExample = 
        `/* 
#include is a preprocessor command which is executed before the code is compiled. 
It searches for the iostream header file and pastes its contents into the program.
*/
#include <iostream>
#include <string>
/*
Namespaces are a way in C++ to group identifiers (names) together. 
They provide context for identifiers to avoid naming collisions.

The using command adds std::cout to the global scope of the program. 
This way you can use cout in your code instead of having to write std::cout.
*/
using std::cout;
using std::string;

int main(){
    // Declaring and initializing an int variable.
    int a = 9;
    
    // Declaring a string variable without initializing right away.
    string b;
    
    // Initializing the string b.
    b = "Here is a string";

    cout << b;
    return 0;
}`;

export default FirstExample;