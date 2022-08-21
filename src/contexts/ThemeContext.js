import { Component, createContext } from 'react';

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
    state = {
        isDarkTheme: true,
        lightTheme: {
            text: '#222222',
            background: '#d8ddf1',
        },
        darkTheme: {
            text: '#fff',
            background: '#5c5c5c',
        },
    };

    changeTheme = () => {
        this.setState({
            isDarkTheme: !this.state.isDarkTheme,
        });
    };

    render() {
        return (
            <>
                {/* value describes what data should be shared with the child components */}
                <ThemeContext.Provider
                    value={{ ...this.state, changeTheme: this.changeTheme }}
                >
                    {/* this.props.children means return the children components inside the <ThemeContextProvider> tag */}
                    {this.props.children}
                </ThemeContext.Provider>
            </>
        );
    }
}
