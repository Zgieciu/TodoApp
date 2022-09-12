import React, { useState } from 'react';

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { TaskContext } from './TaskContext';

import './styles/App.css';
import DoneTasks from './components/DoneTasks';

const App = () => {
  const [tableOfTasks, setTableOfTasks] = useState([]);

  const [tableOfDoneTasks, setTableOfDoneDasks] = useState([]);

  const [numberOfDoneTasks, setNumberOfDoneTasks] = useState(0);

  const [editedTask, setEditedTask] = useState([]);

  const handleDone = taskID => {
    let newId = 0;
    for(let i = 0; i < tableOfDoneTasks.length; i++) {
      if(tableOfDoneTasks[i].id >= newId) newId = tableOfDoneTasks[i].id+1;
    }

    const doneTask = tableOfTasks.filter(task => task.id === taskID);

    setTableOfDoneDasks([...tableOfDoneTasks, {
      id: newId, 
      context: doneTask[0].context,
    }]);
    setTableOfTasks(tableOfTasks.filter(task => task.id !== taskID));
    setNumberOfDoneTasks(numberOfDoneTasks + 1);
  }

  const handleDelete = taskID => {
    setTableOfDoneDasks(tableOfDoneTasks.filter(task => task.id !== taskID));
  }

  const handleAdd = (context, date, important) => {
    if(context === '' && date === '') {
      alert('You must add Task Name and select Date');
      return null;
    }
    if(context === '') {
      alert('You must add Task Name');
      return null;
    }
    if(date === '') {
      alert('You must select Date');
      return null;
    }

    let newId = 0;
    for(let i = 0; i < tableOfTasks.length; i++) {
      if(tableOfTasks[i].id >= newId) newId = tableOfTasks[i].id+1;
    }
    setTableOfTasks([...tableOfTasks, {
      id: newId,
      context, 
      date,
      important,
    }]);
  }

  const handleEdit = taskID => {
    setEditedTask(tableOfTasks.filter(task => task.id === taskID));
    setTableOfTasks(tableOfTasks.filter(task => task.id !== taskID));
  }

  return ( 
    <div className='to-do-app'>
        <h1>Todo app</h1>
        <TaskContext.Provider value={{
            tableOfTasks, 
            tableOfDoneTasks, 
            editedTask, 
            handleAdd, 
            handleDone, 
            handleDelete, 
            handleEdit,
          }}>
          <AddTask/>
          {tableOfTasks.length !== 0 && <TaskList/>}
          {tableOfDoneTasks.length !== 0 && <DoneTasks/>}
        </TaskContext.Provider>
        <h3>Number of completed tasks: {numberOfDoneTasks}</h3> 
      </div>
   );
}

export default App;