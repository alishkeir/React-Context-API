import { createContext, useState } from 'react';

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        { text: 'Plan the family trip', id: 1 },
        { text: 'Go shopping', id: 2 },
        { text: 'Go for a walk', id: 3 },
    ]);

    const addTodo = (text) => {
        setTodos([...todos, { text, id: todos.length + 1 * Math.random() }]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== Number(id)));
    };

    return (
        <TodoListContext.Provider value={{ todos, addTodo, removeTodo }}>
            {children}
        </TodoListContext.Provider>
    );
};

export default TodoListContextProvider;
