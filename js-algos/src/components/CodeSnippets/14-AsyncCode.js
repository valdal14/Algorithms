const AsyncCode = `// The JS Engine does not exist by itself inside the browser
// Inside the browser there are other components such as the rendering engine
// HTTP requests 
// The JS Engine has hooks to these components
// Even tho these 'related-operations' are happening asynch the JS engine is still synch

// EVENT QUEUE -------------------------------------------------------------------------

// There is also another component inside the JS engine known as the Event Queue
// When the browser (Not the JS engine) has an event (click) we want to be notified by it
// It will be placed inside the event queue whether or not we have a function ready to respond to that event
// If we have a function that is supposed to respond to that event the event queue is looked up by the JS engine when the Execution Stack is empty
// When the execution stack is empty periodically JS looks up to the event queue and waits for something to be there
// If something is there, the JS engines looks at function that may be written to respond to that event and create a new Execution context for that specific event
// Remember that the Event Queue will not be processed by the JS engine until the execution stack is empty
// Until JS has finished running all the code
// JS is not asynch, what happens is that the browser itself is asynch putting things inside the event queue but the JS code is still running line by line
// When the Execution context are all gone then eventually process the events

function waitThreeSeconds(){
    var ms = 3000 + new Date.getTime();
    while (new Date() < ms) {}
    return 'Finished long running task';
}

function clickHandler(){
    console.log('click');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('Execution completed');

// The order in which the above Execution Stack will be processed is:
    - waitThreeSeconds() is in the Global Execution stack therefore it will be executed as soon as we run the script
    - After 3 secs we will see 'Execution completed' since it is placed below the long running function
    
// What happen if we click while the page is executing the long running task?
    - The 'Execution completed' will be printed first since it will be executed in the Global Execution scope
    - 'Finished long running task' will be probably print after if we do not click anywhere since it will be executed by invoking the function
    - Finally we get the 'click' only when we press the button

    - The function waitThreeSeconds() execution completed, then the Global code completed and only at the end created an execution context for the click event
    - This is becuase the JS event will not look at the event queue until the execution stack is empty
    - The event will be process in seguence:
        - click event first 
        - Http request after and so on

`;




export default AsyncCode;