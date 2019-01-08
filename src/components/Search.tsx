import {Theme, WithStyles} from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import React, { Component } from 'react';
import Button from "@material-ui/core/Button/Button";

const styles = (theme: Theme) => createStyles({
    form: {
        position: "relative",
    },
    input: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: theme.spacing.unit * 2,
        right: 60 + theme.spacing.unit * 4
    },
    text: {
        width: "100%"
    },
    button: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: theme.spacing.unit * 2,
        width: 60,
        height: 60,
        marginTop: theme.spacing.unit * 1.5
    },
    wrapper: {
        position: "static"
    }
});

export interface Props extends WithStyles<typeof styles> {
    submit: any;
}

interface State {
    searchText: string;
}

class Search extends Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            searchText: "",
        };
    }

    handleChange = (e: any) => {
        const value = e.target.value;

        if (value == "") {
            console.log("empty");
        }

        this.setState({
            searchText: value,
        });
    };

    handleSubmit = (e: any) => {
        e.preventDefault();

        this.props.submit(this.state.searchText);
    };

    public render() {
        return (
            <div className={this.props.classes.wrapper}>
                <form onSubmit={this.handleSubmit} className={this.props.classes.form}>
                    <div className={this.props.classes.input}>
                        <TextField
                            id="outlined-search"
                            type="search"
                            margin="normal"
                            placeholder="Search"
                            variant="outlined"
                            className={this.props.classes.text}
                            onChange={this.handleChange}
                        />
                    </div>
                    <Button variant="contained" color="primary" type="submit" className={this.props.classes.button}>
                        <SearchIcon />
                    </Button>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(Search);