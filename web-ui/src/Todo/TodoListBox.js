import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TodoListBox(props){

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

TodoListBox.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoListBox