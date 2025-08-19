import React, { useState } from 'react'

const TodosList = () => {

    const [todo, setTodo] = useState({})
    const [todosList, setTodosList] = useState([])

    const handleTodoChange = (e) => {
        setTodo({ ...todo, task: e.target.value })
    }
    const handleTodoDueChange = (e) => {
        setTodo({ ...todo, due: e.target.value })
    }

    const addTodo = (e) => {
        e.preventDefault()
        setTodosList([...todosList, todo])
        setTodo({})
    }

    const removeTodo = (todo) => {
        const updatedList = todosList.filter((tl) => {
            if (tl !== todo) {
                return tl
            }
        })

        setTodosList(updatedList)
    }
    console.log(todosList)
    return (
        <div>

            {
                todosList.map((tl) => {
                    return (
                        <div style={{ display: "flex", "justifyContent": "space-between" }}>
                            <div>
                                {tl.task}
                            </div>
                            <div>
                                {tl.due}
                            </div>
                            <button onClick={() => removeTodo(tl)}>Delete</button>
                        </div>

                    )
                })
            }
            <form onSubmit={addTodo}>
                <div>
                    <input type="text" name="todo" id="todo" onChange={handleTodoChange} placeholder='Enter todo text' value={todo.task} />
                </div>
                <div>
                    <input type="datetime-local" name="due" id="due" onChange={handleTodoDueChange} value={todo.due} />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodosList
