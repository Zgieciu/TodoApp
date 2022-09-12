import React, { useContext, useEffect, useState } from 'react';

import '../styles/AddTask.css';
import { TaskContext } from '../TaskContext';

const AddTask = () => {
    const [context, setContext] = useState('');
    const [date, setDate] = useState('');
    const [important, setImportant] = useState(false);

    const add = useContext(TaskContext).handleAdd;
    const listOfTasks = useContext(TaskContext).tableOfTasks;
    const editedTask = useContext(TaskContext).editedTask;

    const handleTextInput = e => {
        setContext(e.target.value);
    }

    const handleDateInput = e => {
        setDate(e.target.value);
    }

    const handleCheckbox = () => {
        setImportant(!important);
    }

    const currentDate = new Date().toISOString().slice(0, 10);
    
    useEffect(() => {
        setContext('');
        setDate('');
        setImportant(false);
    }, [listOfTasks]);

    useEffect(() => {
        if(editedTask[0]) {
            setContext(editedTask[0].context);
            setDate(editedTask[0].date);
            setImportant(editedTask[0].important);
        }      
    }, [editedTask])

    return ( 
        <div className="add-task">
            <label htmlFor="add">Task Name: </label>
            <input type="text" id="add" value={context} onChange={handleTextInput}/>
            <label htmlFor="date">Date: </label>
            <input type="date" id="date" value={date} onChange={handleDateInput} min={currentDate}/>
            <label htmlFor="checkbox">Important:</label>
            <div className="checkbox">
                <input type="checkbox" checked={important ? true : false} value={important} onChange={handleCheckbox}/>
            </div>
            <button onClick={() => add(context, date, important)}>Add Task</button>
        </div>
     );
}

export default AddTask;