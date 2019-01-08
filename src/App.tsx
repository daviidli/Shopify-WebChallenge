import React, { Component } from 'react';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {Theme, WithStyles} from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Search from "./components/Search";
import Header from "./components/Header";
import Lookup from "./controller/Lookup";
import Results from "./components/Results";
import Typography from "@material-ui/core/Typography/Typography";

const muiTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#23995c"
        },
        secondary: {
            main: "#1d5895",
        },
    },
    typography: {
        useNextVariants: true,
    }
});

const styles = (theme: Theme) => createStyles({
    title: {
        color: "#23995c",
        marginLeft: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 2
    },
    fav: {
        backgroundColor: "#f7fefa",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "block"
    },
    favResults: {
        overflowY: "auto",
        overflowX: "hidden"
    }
});

export interface Props extends WithStyles<typeof styles> {

}

interface State {
    results: any[];
    favourites: any[];
}

class App extends Component<Props, State> {
    private lookup: Lookup;

    constructor(props: any) {
        super(props);

        this.lookup = new Lookup();
        this.lookup.loadData();

        this.state = {
            results: [],
            favourites: []
        };
    }

    public readonly getSearchTerm = (searchText: string) => {
        if (searchText === "") {
            this.setState({ results: [] });
        } else {
            this.setState({results: this.lookup.searchItem(searchText)});
        }
    };

    public readonly addFavourites = (key: string) => {
        this.setState({ favourites: this.lookup.addFavourite(key) })
    };

    public readonly removeFavourites = (key: string) => {
        this.setState({ favourites: this.lookup.removeFavourite(key) })
    };

    private readonly showFavourites = () => {
        if (this.state.favourites.length !== 0) {
            return (
                <div
                    className={this.props.classes.fav}
                    style={{height: this.state.results.length === 0 ? "70%" : 200}}
                >
                    <Typography
                        variant={"h5"}
                        align={"left"}
                        className={this.props.classes.title}
                    >
                        <b>Favourites</b>
                    </Typography>
                    <div
                        className={this.props.classes.favResults}
                         style={{height: this.state.results.length === 0 ? "90%" : 155}}
                    >
                        <Results
                            results={this.state.favourites}
                            addFavourites={this.addFavourites}
                            removeFavourites={this.removeFavourites}
                        />
                    </div>
                </div>
            )
        } else {
            return;
        }
    };

    public render() {
        return (
            <div className="App">
                <MuiThemeProvider theme={muiTheme}>
                    <Header />
                    <Search submit={this.getSearchTerm} />
                    <div style={{paddingBottom: this.state.favourites.length === 0 ? 0 : 200}}>
                        <Results
                            results={this.state.results}
                            addFavourites={this.addFavourites}
                            removeFavourites={this.removeFavourites}
                        />
                    </div>
                    {this.showFavourites()}
                </MuiThemeProvider>
            </div>
        );
    }
}

export default withStyles(styles)(App);
