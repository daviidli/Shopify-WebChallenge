import React, { Component } from 'react';
import {Theme, WithStyles} from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid/Grid";
import IconButton from "@material-ui/core/IconButton/IconButton";
import StarIcon from '@material-ui/icons/Star';
import {IInfo} from "../controller/ILookup";

const styles = (theme: Theme) => createStyles({
    grid: {
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        maxWidth: "98%"
    }
});

export interface Props extends WithStyles<typeof styles> {
    results: IInfo[];
    addFavourites: any;
    removeFavourites: any;
}

class Results extends Component<Props, {}> {
    private setFav = (current: boolean, key: string) => {
        if (current) {
            this.props.removeFavourites(key);
        } else {
            this.props.addFavourites(key);
        }
    };

    render() {
        return (
            <Grid
                container
                direction={"column"}
                justify={"center"}
                alignItems={"center"}
                className={this.props.classes.grid}
            >
                {this.props.results.map((value: IInfo) => (
                    <Grid
                        container
                        direction={"row"}
                        spacing={0}
                        key={value.key}
                    >
                        <Grid item xs={2} md={1} key={"star"}>
                            <IconButton
                                aria-label="Favourite"
                                onClick={() => {this.setFav(value.fav, value.key)}}
                                style={{color: value.fav ? "#23995c" : "#aaa"}}
                            >
                                <StarIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={3} md={3} key={"title"}>
                            <p>{value.title}</p>
                        </Grid>
                        <Grid item xs={6} md={8} key={"desc"}>
                            <div dangerouslySetInnerHTML={{ __html: value.body}}>
                            </div>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export default withStyles(styles)(Results);