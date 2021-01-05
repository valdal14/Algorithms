import React from 'react';
import './Documentation.css';

const Code = (props)=> {
    return(
        <div id={props.sectionUrl} className="documentation">
            <h4>{props.title}</h4>
            <textarea name="" id="" cols="120" rows={props.size} className="code" defaultValue={props.exampleOne}></textarea>
        </div>
    )
}

export default Code;