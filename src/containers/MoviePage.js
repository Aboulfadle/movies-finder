import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import axios from "axios";
import ApplicationConstant from "../constants/ApplicationConstant";
import MovieHeader from "../components/MovieHeader";
import ActorCardList from "../components/ActorCardList";
import HdSharp from "@material-ui/icons/HdSharp";
import PropTypes from "prop-types";


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
    const [movie, setMovie] = useState({});
    const [actors, setActors] = useState([]);

    useEffect(() => {
        axios.get(`${ApplicationConstant.BASE_URL}movie/${movieId}?language=en-US&api_key=${ApplicationConstant.API_KEY}`)
            .then(response => setMovie(response.data));
            axios.get(`${ApplicationConstant.BASE_URL}movie/${movieId}/credits?api_key=${ApplicationConstant.API_KEY}`)
                .then(response => {
                    console.log(response.data.cast)
                    setActors(response.data.cast)
                });
    }, [movieId]);

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
