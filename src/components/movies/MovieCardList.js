import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import MovieCard from "./MovieCard";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import PropTypes from "prop-types";


const useStyles = makeStyles(theme => ({
    gridContainer: {
        width: '100%'
    },
    gridItem: {
        height: 'auto !important'
    },
}))

const MovieCardList = ({movies}) => {
    const classes = useStyles();

    return (
        <GridList cols={4} className={classes.gridContainer} spacing={20}>
            {movies.map(movie =>
                <GridListTile className={classes.gridItem} key={movie.id}>
                    <MovieCard movie={movie} />
                </GridListTile>
            )}
        </GridList>
    );
}

export default MovieCardList;

MovieCardList.propTypes = {
    movies : PropTypes.arrayOf(PropTypes.object)
};
