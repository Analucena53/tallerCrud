import React, { useState } from 'react'
import "./Task.css"


const Task = ({ task, deleteTask }) => {
    const [complete, setComplete] = useState(false)
    return (
        <div className={complete ? 'containerTask containerTaskCompleted' : 'containerTask'}>
            <h2 className={complete ? 'complete' : 'noComplete'}> {task.task}</h2>
            <button id='complete' onClick={() => setComplete(!complete)}>{complete ? 'No completada' : 'Completada'}</button>
            <button onClick={() => deleteTask(task.id)} id='delete'>Eliminar</button>
        </div>
    )
}

export default Task