import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { TodoListContext } from '../../contexts/TodoListContext';

const TodoList = () => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', text });
        setText('');
    };

    const { isDarkTheme, darkTheme, lightTheme, changeTheme } =
        useContext(ThemeContext);

    const { todos, dispatch } = useContext(TodoListContext);

    const theme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <div
            style={{
                background: theme.background,
                color: theme.text,
                textAlign: 'center',
            }}
        >
            {todos?.length ? (
                todos.map((todo) => {
                    return (
                        <p
                            id={todo.id}
                            key={todo.id}
                            className='item'
                            onDoubleClick={(e) => {
                                dispatch({
                                    type: 'REMOVE_TODO',
                                    id: e.target.id,
                                });
                            }}
                        >
                            {todo.text}
                        </p>
                    );
                })
            ) : (
                <h3>You do not have any todo</h3>
            )}

            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                onSubmit={(e) => handleSubmit(e)}
            >
                <label
                    style={{ marginTop: '0.3rem', marginBottom: '1rem' }}
                    htmlFor='toddo'
                >
                    Add Todo
                </label>
                <input
                    style={{ marginTop: '0.3rem', marginBottom: '1rem' }}
                    type='text'
                    id='todo'
                    className='ui input'
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <input
                    style={{ width: '9rem', marginBottom: '1rem' }}
                    type='submit'
                    className='ui button primary'
                    value='Add new todo'
                />
            </form>

            <button className='ui button primary' onClick={changeTheme}>
                Toggle Theme
            </button>
        </div>
    );
};

export default TodoList;
