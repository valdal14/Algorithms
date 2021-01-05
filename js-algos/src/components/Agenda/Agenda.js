import React from 'react';
import './Agenda.css';

const Agenda = (props)=> {

    return(
        <div className="container">
            <div className="agenda">
                <h3>Topics</h3>
                <div>
                    <ol>
                        {props.agendaTopics.map(topic => (<li key={topic.id}><a  href={'#' + topic.url}>{topic.title}</a></li>))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Agenda;