import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [lightTheme] = useState({
        text: '#222222',
        background: '#d8ddf1',
    });
    const [darkTheme] = useState({
        text: '#fff',
        background: '#5c5c5c',
    });

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <ThemeContext.Provider
            value={{ isDarkTheme, lightTheme, darkTheme, changeTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
