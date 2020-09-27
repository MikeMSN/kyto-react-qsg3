import React from 'react';
import TodoListBox from "./Todo/TodoListBox";
import Context from "./context";


function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'Купить хлеб'},
        {id: 2, completed: false, title: 'Купить масло'},
        {id: 3, completed: false, title: 'Купить молоко'},
    ])

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }))

    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <Context.Provide value={{removeTodo}}>
            <div className='wrapper'>
                <h1>React tutorial</h1>
                <TodoListBox todos={todos} onToggle={toggleTodo}/>
            </div>
        </Context.Provide>
    )
}

export default App;
