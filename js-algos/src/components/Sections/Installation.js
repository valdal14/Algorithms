import React from 'react';
import './Documentation.css';

const Installation = (props)=> {
    return(
        <div id={props.sectionUrl} className="documentation">
            <h4>{props.title}</h4>
            <ul>
                <li><span className='code'>sudo apt update</span></li>
                <li><span className='code'>sudo apt install build-essential</span></li>
                <li><span className='code'>sudo apt install gdb</span></li>
            </ul>
        </div>
    )
}

export default Installation;