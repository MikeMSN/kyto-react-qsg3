import React from 'react'
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function TodoListBox(props){

    return (
        <ul style={styles.ul}>
            {
                props.todos.map((todo, index) => {
                    return <TodoItem key = {todo.id} todo={todo} index = {index} />
                })
            }
        </ul>
    )
}