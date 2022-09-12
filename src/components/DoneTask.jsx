import React from 'react';

const DoneTask = props => {

    const doneDate = new Date().toISOString().slice(0, 10);

    return ( 
        <>
            <div className="first-column">{props.context}</div>
            <div className="second-column">{doneDate}</div>
            <div className="third-column">
                <button onClick={() => props.delete(props.id)}>X</button>
            </div>
        </>
     );
}
 
export default DoneTask;