import React from 'react'

const Form = ({ handleChange, addTask, task }) => {
    return (
        <div>
            <form onSubmit={addTask}>
                <input type="text" value={task} placeholder='Ingresa la tarea... ' onChange={handleChange} />
                <button type='submit'>Agregar</button>
            </form>
        </div>
    )
}
export default Form