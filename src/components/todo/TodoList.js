import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const TodoList = () => {
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } =
        useContext(ThemeContext);

    const theme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <div
            style={{
                background: theme.background,
                color: theme.text,
                textAlign: 'center',
            }}
        >
            <p className='item'>Plan the family trip</p>
            <p className='item'>Go shopping</p>
            <p className='item'>Go for a walk</p>
            <button className='ui button primary' onClick={changeTheme}>
                Toggle Theme
            </button>
        </div>
    );
};

export default TodoList;
