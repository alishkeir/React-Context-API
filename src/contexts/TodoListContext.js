import { createContext, useReducer } from 'react';
import { TodosReducer } from '../reducers/TodosReducer';

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
    //

    const [todos, dispatch] = useReducer(TodosReducer, [
        { text: 'Plan the family trip', id: 1 },
        { text: 'Go shopping', id: 2 },
        { text: 'Go for a walk', id: 3 },
    ]);

    return (
        <TodoListContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoListContext.Provider>
    );
};

export default TodoListContextProvider;
