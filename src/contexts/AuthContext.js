import { Component, createContext } from 'react';

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
    state = {
        isLoggedIn: false,
    };

    changeAuthStatus = () => {
        this.setState({ isLoggedIn: !this.state.isLoggedIn });
    };

    render() {
        return (
            <>
                {/* value describes what data should be shared with the child components */}
                <AuthContext.Provider
                    value={{
                        ...this.state,
                        changeAuthStatus: this.changeAuthStatus,
                    }}
                >
                    {/* this.props.children means return the children components inside the <AuthContextProvider> tag */}
                    {this.props.children}
                </AuthContext.Provider>
            </>
        );
    }
}
