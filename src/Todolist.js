
import React, { useState, useRef } from 'react';
import TodoTable from './TodoTable';

const Todolist = () => {
    const [todoInfo, setTodoInfo] = useState({ description: "", date: "", priority: "" });
    const [todos, setTodos] = useState([{ description: "Do the dishes", date: "28/11/2021", priority: "High" }, { description: "Clean the house", date: "29/22/2021", priority: "Medium" }]);



    const addTodo = (event) => {
        event.preventDefault();

        const todo = {
            description: todoInfo.description,
            date: todoInfo.date,
            priority: todoInfo.priority
        }

        setTodos([...todos, todo]);
        setTodoInfo({ description: "", date: "", priority: "" });
        console.log(gridRef.current)
    }

    const gridRef = useRef();

    const deleteTodo = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTodos(todos.filter((todos, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex))
        } else {
            alert("Select row first")
        }

    }










    return (
        <div className="add-todo">
            <form onSubmit={addTodo}>
                <label>Description:</label><input type="text" onChange={(e) => setTodoInfo({ ...todoInfo, description: e.target.value })} value={todoInfo.description} />
                <label>Date:</label><input type="text" onChange={(e) => setTodoInfo({ ...todoInfo, date: e.target.value })} value={todoInfo.date} />
                <label>Priority:</label>
                <select onChange={(e) => setTodoInfo({ ...todoInfo, priority: e.target.value })} value={todoInfo.priority} selected="" >
                    <option value="" selected disabled hidden>Choose here</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
                <input type="submit" value="Add" />
                <input type="button" value="Delete" onClick={() => deleteTodo()} />
            </form>
            <TodoTable deleteTodo={deleteTodo} todos={todos} gridRef={gridRef} />
        </div>

    );
};

export default Todolist;