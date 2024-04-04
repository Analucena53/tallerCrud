import React, { useState } from 'react';
import "./Task.css";

const Task = ({ task, deleteTask, updateTask }) => {
    const [complete, setComplete] = useState(false);
    const [updatedTaskText, setUpdatedTaskText] = useState(task.task);
    const [isEditing, setIsEditing] = useState(false);

    const handleUpdateClick = () => {
        updateTask(task.id, updatedTaskText);
        setIsEditing(false);
    };

    const handleTaskInputChange = (e) => {
        setUpdatedTaskText(e.target.value);
    };

    return (
        <div className={complete ? 'containerTask containerTaskCompleted' : 'containerTask'}>
            {isEditing ? (
                <input
                    type="text"
                    value={updatedTaskText}
                    onChange={handleTaskInputChange}
                />
            ) : (
                <h2 className={complete ? 'complete' : 'noComplete'}>{task.task}</h2>
            )}
            <button className='buy' onClick={() => setComplete(!complete)}>
                {complete ? (
                    "No comprado"
                ) : (
                    <img className='check' src="/comprado.jpg" alt="Comprado" />
                )}
            </button>
            <button className='delete' onClick={() => deleteTask(task.id)} id='delete'>
                <img className='refuse' src="/refuse.jpg" alt="Eliminar" />
            </button>

            <button className='edit' onClick={() => setIsEditing(!isEditing)}>
                <img className='pencil' src="/edit.jpg" alt="Editar" />
            </button>
            {isEditing && (
                <button className='updateclick' onClick={handleUpdateClick}>
                    <img className='update' src="/update.jpg" alt="Actualizar" />
                </button>
            )}

        </div>
    );
};

export default Task;
