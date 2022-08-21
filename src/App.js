import NavBar from './components/navbar/NavBar';
import TodoList from './components/todo/TodoList';
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
    return (
        <div className='App'>
            <div className='ui raised very padded text container segment'>
                {/* wrap all the components that needed to share same values with the same tag ex: <ThemeContextProvider> */}
                <AuthContextProvider>
                    <ThemeContextProvider>
                        <NavBar />
                        <TodoList />
                    </ThemeContextProvider>
                </AuthContextProvider>
            </div>
        </div>
    );
}

export default App;
