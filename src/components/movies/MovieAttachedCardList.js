import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import MovieAttachedCard from "./MovieAttachedCard";

const useStyles = makeStyles(theme => ({
    bottomRef: {
        width: '100%',
        height: '0px !important'
    }
}));

const MovieAttachedCardList = ({movies, containerRef, bottomRef}) => {
    const classes = useStyles();

    return (
        <GridList cols={5} spacing={0} ref={containerRef}>
            {movies.map((movie) => (
                <GridListTile key={movie.id}>
                    <MovieAttachedCard movie={movie} />
                </GridListTile>
            ))}
            <div ref={bottomRef} className={classes.bottomRef} />
        </GridList>
    );
}

export default MovieAttachedCardList;

MovieAttachedCardList.propTypes = {};

MovieAttachedCardList.defaultProps = {};
