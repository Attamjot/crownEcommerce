import React from 'react';

export const ThemeContext = React.createContext({});

export default class ThemeProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light'
        }
    }

    setDarkTheme = () => {
        this.setState((state) => {
            console.log('state', state);
            return {theme: 'dark'}
        });
    }

    render() {
        return (
            <ThemeContext.Provider 
             value={{
                 theme: this.state.theme,
                 setDarkTheme: this.setDarkTheme
             }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}