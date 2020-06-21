import React, {useEffect} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import MovieHeader from "../components/movies/MovieHeader";
import ActorCardList from "../components/actor/ActorCardList";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchMovieCasts,
    fetchMovieDetails,
    fetchMovieKeywords,
    fetchMovieRecommendations,
    fetchMovieTrailer
} from "../redux/actions/movie.action";
import Loader from "../components/common/Loader";
import {Col, Row} from "react-bootstrap";
import MovieCardList from "../components/movies/MovieCardList";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import {Link} from "@reach/router";


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
    const {movie, actors, trailer, loading, keywords, recommendations} = useSelector(state => state.movieStore)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovieDetails(movieId));
        dispatch(fetchMovieTrailer(movieId));
        dispatch(fetchMovieCasts(movieId));
        dispatch(fetchMovieKeywords(movieId));
        dispatch(fetchMovieRecommendations(movieId));

    }, [dispatch, movieId]);

    return (
        <div>
            {
                loading ?
                <Loader />
                :
                <div className={classes.root}>
                     <MovieHeader movie={movie} trailer={trailer} />
                     <div className={classes.rootGridContainer}>
                         <Row>
                             <Col className={"col-9"}>
                                 <h3 className={classes.rootGridContainerHeader}>Recommendations</h3>
                                <MovieCardList movies={recommendations.slice(0, 12)} />
                             </Col>

                             <Col className={"col"}>
                                 <h3 className={classes.rootGridContainerHeader}>Keywords</h3>
                                 <section className="keywords right_column">
                                     <GridList>
                                         {
                                             keywords.map((keyword) =>
                                                 <GridListTile key={keyword.id}>
                                                     <Link to={`/keyword/${keyword.id}/${keyword.name}`}>{keyword.name}</Link>
                                                 </GridListTile>
                                             )
                                         }
                                     </GridList>
                                 </section>
                                 <br/>
                                 <h3 className={classes.rootGridContainerHeader}>Top billed Cast</h3>
                                 <ActorCardList actors={actors}/>
                             </Col>
                         </Row>
                     </div>
                </div>
            }
        </div>
    );
}

export default MoviePage;

MoviePage.propTypes = {
    movieId : PropTypes.string
};
