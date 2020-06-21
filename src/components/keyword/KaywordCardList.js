import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import PropTypes from "prop-types";
import KeywordCard from "./KeywordCard";


const useStyles = makeStyles(theme => ({
    gridContainer: {
        width: '100%'
    },
    gridItem: {
        height: 'auto !important'
    },
}))

const KeywordCardList = ({movies}) => {
    const classes = useStyles();

    return (
        <GridList cols={2} className={classes.gridContainer} spacing={15}>
            {movies.map(movie =>
                <GridListTile className={classes.gridItem} key={movie.id}>
                    <KeywordCard movie={movie} />
                </GridListTile>
            )}
        </GridList>
    );
}

export default KeywordCardList;

KeywordCardList.propTypes = {
    movies : PropTypes.arrayOf(PropTypes.object)
};
