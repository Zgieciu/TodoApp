import React, { useContext } from 'react';

import DoneTask from './DoneTask';
import { TaskContext } from '../TaskContext';

import '../styles/DoneTasks.css';


const DoneTasks = () => {

    const listOfDoneTasks = useContext(TaskContext).tableOfDoneTasks;
    const handleDelete = useContext(TaskContext).handleDelete;

    return ( 
        <div className="done-tasks">
            <h3>Finished Tasks</h3>
            <div className="first-column">Task</div>
            <div className="second-column">Finish Date</div>
            <div className="third-column">Delete</div>
            {listOfDoneTasks.map(task => 
                <DoneTask 
                    key={task.id}
                    id={task.id}
                    context={task.context}
                    delete={handleDelete} 
                />
            )}
        </div>
     );
}
 
export default DoneTasks;