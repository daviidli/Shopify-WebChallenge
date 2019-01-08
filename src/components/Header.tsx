import React from 'react';
import {Theme, WithStyles} from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";

const styles = (theme: Theme) => createStyles({
    root: {
        height: 125,
        lineHeight: "125px",
        marginTop: theme.spacing.unit * 2,
        textAlign: "center",
        background: "linear-gradient(to right, #1d5895, #23995c)"
    },
    title: {
        display: "inline-block",
        verticalAlign: "middle",
        color: "#fff"
    }
});

export interface Props extends WithStyles<typeof styles> {

}

function Header(props: Props) {
    return (
        <div className={props.classes.root}>
            <Typography
                variant={"h4"}
                align={"center"}
                className={props.classes.title}
            >
                <b>Toronto Waste Lookup</b>
            </Typography>
        </div>
    );
}

export default withStyles(styles)(Header);