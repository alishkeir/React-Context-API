import { ThemeContext } from '../../contexts/ThemeContext';
import { AuthContext } from '../../contexts/AuthContext';

import React, { Component } from 'react';

class NavBar extends Component {
    // how we set what context we need to use in a component
    // static contextType = ThemeContext;

    render() {
        return (
            <>
                {/* another way to use context data using context consumer */}
                <AuthContext.Consumer>
                    {(authContext) => {
                        return (
                            <ThemeContext.Consumer>
                                {(themeContext) => {
                                    const {
                                        isDarkTheme,
                                        darkTheme,
                                        lightTheme,
                                    } = themeContext;
                                    const theme = isDarkTheme
                                        ? darkTheme
                                        : lightTheme;

                                    const { isLoggedIn, changeAuthStatus } =
                                        authContext;
                                    return (
                                        <nav
                                            style={{
                                                background: theme.background,
                                                color: theme.text,
                                                height: '120px',
                                            }}
                                        >
                                            <h2 style={{ textAlign: 'center' }}>
                                                Ali Shkeir
                                            </h2>
                                            <p onClick={changeAuthStatus}>
                                                {isLoggedIn
                                                    ? 'Logged in'
                                                    : 'Logged out'}
                                            </p>
                                            <div className='ui three buttons'>
                                                <button className='ui button'>
                                                    Overview
                                                </button>
                                                <button className='ui button'>
                                                    Contact
                                                </button>
                                                <button className='ui button'>
                                                    Support
                                                </button>
                                            </div>
                                        </nav>
                                    );
                                }}
                            </ThemeContext.Consumer>
                        );
                    }}
                </AuthContext.Consumer>
            </>
        );
    }
}

export default NavBar;
