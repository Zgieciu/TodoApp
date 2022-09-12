import React from 'react';

import '../styles/Task.css';

const Task = props => {
    return (
        <li 
            className={props.important ? 'important' : ''}
        >
            {props.context} / {props.date} 
            <button onClick={() => props.done(props.id)}>Done Task</button>
            <button onClick={() => props.edit(props.id)}>Edit</button>
        </li>
    )
}

export default Task;