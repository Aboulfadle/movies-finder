import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ActorCard from "./ActorCard";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles(theme => ({
    actorsContainer: {
        width: '100%',
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(0.5)
        }
    },
    actorCardContainer: {
        width: '11.6% !important',
        height: 'auto !important'
    }
}));

const ActorCardList = ({actors}) => {

    const classes = useStyles();

    return (
        <GridList cols={8} spacing={0} className={classes.actorsContainer}>
            {
                actors.slice(0, 8).map(actor =>
                    <GridListTile className={classes.actorCardContainer} key={actor.id}>
                        <ActorCard actor={actor} />
                    </GridListTile>
                )
            }
        </GridList>
    );
}

export default ActorCardList;

ActorCardList.propTypes = {};

ActorCardList.defaultProps = {};
