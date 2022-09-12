import React, { useContext } from 'react';

import Task from './Task';
import { TaskContext } from '../TaskContext';

import '../styles/TaskList.css';

const TaskList = () => {

    const listOfTasks = useContext(TaskContext).tableOfTasks;
    const handleDone = useContext(TaskContext).handleDone;
    const handleEdit = useContext(TaskContext).handleEdit;

    let tasks = [...listOfTasks].sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0))
    tasks = [...tasks].sort((a, b) => (a.important < b.important) ? 1 : ((b.important < a.important) ? -1 : 0))

    return ( 
        <ul>
            {tasks.map(task => 
                <Task 
                    key={task.id}
                    id={task.id}
                    context={task.context}
                    date={task.date} 
                    important={task.important}
                    done={handleDone}
                    edit={handleEdit}
                />
            )}
        </ul>
     );
}
 
export default TaskList;