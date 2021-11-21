
import React, { useState } from 'react';
import TodoTable from './TodoTable';

const Todolist = () => {
    const [todoInfo, setTodoInfo] = useState({ description: "", date: "" });
    const [todos, setTodos] = useState([]);

    const addTodo = (event) => {
        event.preventDefault();

        const todo = {
            description: todoInfo.description,
            date: todoInfo.date,
        }

        setTodos([...todos, todo]);
        setTodoInfo({ description: "", date: "", id: undefined });
    }

    const deleteTodo = (index) => {
        setTodos(todos.filter((todo, i) => i !== index))
    }



    return (
        <div className="add-todo">
            <form onSubmit={addTodo}>
                <label>Description:</label><input type="text" onChange={(e) => setTodoInfo({ ...todoInfo, description: e.target.value })} value={todoInfo.description} />
                <label>Date:</label><input type="text" onChange={(e) => setTodoInfo({ ...todoInfo, date: e.target.value })} value={todoInfo.date} />
                <input type="submit" value="Add" />
            </form>
            <TodoTable deleteTodo={deleteTodo} todos={todos} />
        </div>
    );
};

export default Todolist;