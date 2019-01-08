import React, { Component } from 'react';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Search from "./components/Search";

const muiTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#23995c"
        },
        secondary: {
            main: "#FF005E",
        },
    },
});

interface State {
    info: string;
}

class App extends Component<{}, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            info: "",
        };
    }

    public readonly getSearch = (searchText: string) => {
        this.setState({ info: searchText });
    };

    render() {
        return (
            <div className="App">
                <MuiThemeProvider theme={muiTheme}>
                <Search submit={this.getSearch}/>
                <p>{this.state.info}</p>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
