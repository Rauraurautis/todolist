import React from 'react'

export default function TodoTable({deleteTodo, todos}) {
    return (

        <table>
            <tbody>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                </tr>
                {todos.map((todo, index) => {
                    return <tr key={index}>
                        <td>{todo.date}</td>
                        <td>{todo.description}</td>
                        <td onClick={() => deleteTodo(index)}><button>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>

    )
}
