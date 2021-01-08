import React, { useState } from 'react';
import './Documentation.css';
import { Button } from 'react-bootstrap';

const Code = (props)=> {
    
    const codeResultId = props.resId;
    console.log(codeResultId);

    const [isRunnable, setIsRunnable] = useState(false);
    const [codeResult, setCodeResult] = useState('');

    const executeCode = (e)=> {
        var str = document.querySelector(`#${props.codeId}`).value;
        var res = new Function(str)();
        setIsRunnable(true);
        setCodeResult("Result: " + JSON.stringify(res));
    };

    return(
        <div id={props.sectionUrl} className="documentation">
            <h4>{props.title}</h4>
            <textarea name="" id={props.codeId} cols="120" rows={props.size} className="code" defaultValue={props.exampleOne}></textarea>
            <br />
            <div style={{float: 'right'}}>
                <Button onClick={executeCode}>run script</Button>
            </div>
            <br />
            <br />
            { isRunnable ? <p className="codeExecuted" id={codeResultId}>{codeResult}</p> : null }
        </div>
    )
}

export default Code;