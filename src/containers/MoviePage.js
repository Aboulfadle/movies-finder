import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {client} from "../client/client";
import MovieHeader from "../components/MovieHeader";
import ActorCardList from "../components/ActorCardList";
import HdSharp from "@material-ui/icons/HdSharp";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovieCasts, fetchMovieDetails} from "../redux/actions/movie.action";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    rootGridContainer: {
        width: '100%',
        padding: '50px',
        fontFamily: 'Yanone Kaffeesatz',
    }
}));

const MoviePage = ({movieId}) => {

    const classes = useStyles();
    const {movie, actors} = useSelector(state => state.movieStore)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovieDetails(movieId));
        dispatch(fetchMovieCasts(movieId));
    }, [dispatch, movieId]);

    return (
        <div className={classes.root}>
            <MovieHeader movie={movie} />
            <div className={classes.rootGridContainer}>
                <h1 className={classes.rootGridContainerHeader}>
                    <HdSharp style={{color: '#dc3545', fontSize: '30px'}} /> Top billed Cast !!
                </h1>
                <ActorCardList actors={actors} />
            </div>
        </div>
    );
}

export default MoviePage;

MoviePage.propTypes = {
    movieId : PropTypes.string
};
