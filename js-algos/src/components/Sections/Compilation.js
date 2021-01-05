import React from 'react';
import './Documentation.css';

const Compilation = (props)=> {
    return(
        <div id={props.sectionUrl} className="documentation">
            <h4>{props.title}</h4>
            <ul>
                <li><span className='code'>g++ main.cpp -o main</span></li>
                <li><span className='code'>./main</span></li>
            </ul>
        </div>
    )
}

export default Compilation;