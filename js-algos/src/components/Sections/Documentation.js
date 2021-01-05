import React from 'react';
import './Documentation.css';

const Documentation = (props)=> {
    return(
        <div id={props.sectionUrl} className="documentation">
            <h4>{props.title}</h4>
            <ol>
                <li><a href="http://www.cplusplus.com/reference/" target="_blank" rel="noreferrer">Standard C++ Library reference</a></li>
                <li><a href="https://github.com/isocpp/CppCoreGuidelines" target="_blank" rel="noreferrer">Cpp Core Guidelines</a></li>
                <li><a href="https://www.stroustrup.com/compilers.html" target="_blank" rel="noreferrer">An incomplete list of C++ compilers</a></li>
                <li><a href="https://www.gnu.org/software/make/manual/html_node/index.html#Top" target="_blank" rel="noreferrer">GNU make</a></li>
                <li><a href="https://cmake.org/" target="_blank" rel="noreferrer">CMake</a></li>
                <ul>
                    <li><a href="https://cmake.org/cmake/help/latest/guide/tutorial/index.html" target="_blank" rel="noreferrer">CMake Tutorial</a></li>
                </ul>
            </ol>
        </div>
    )
}

export default Documentation;