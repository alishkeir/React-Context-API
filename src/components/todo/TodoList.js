import React, { Component } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export class TodoList extends Component {
    // how we set what context we need to use in a component
    static contextType = ThemeContext;

    render() {
        const { isDarkTheme, darkTheme, lightTheme, changeTheme } =
            this.context;
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
    }
}

export default TodoList;
