import React, { Component } from 'react';
import {Theme, WithStyles} from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
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
    textBox: {
        width: "100%"
    },
    button: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: theme.spacing.unit * 2,
        width: 55,
        height: 55,
        marginTop: theme.spacing.unit * 2
    },
    wrapper: {
        position: "static",
        height: 55 + theme.spacing.unit * 4,
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
            this.props.submit(value);
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
                            id={"outlined-search"}
                            type={"search"}
                            margin={"normal"}
                            placeholder={"Search"}
                            variant={"outlined"}
                            className={this.props.classes.textBox}
                            onChange={this.handleChange}
                        />
                    </div>
                    <Button
                        variant={"contained"}
                        color={"primary"}
                        type={"submit"}
                        className={this.props.classes.button}
                    >
                        <SearchIcon />
                    </Button>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(Search);