import React, {useEffect} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import MainSlider from "../components/MainSlider";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Trailer from "../components/Trailer";
import MovieCardList from "../components/MovieCardList";
import CommonTitle from "../components/CommonTitle";
import static_movies from "../static_data/static_movies";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "../redux/actions/movies.action";


const useStyles = makeStyles(theme => ({
    rootGridContainer: {
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
        padding: '0 7%',
        marginTop: '50px',
        marginBottom: '50px',
        justifyContent: 'center',
        overflow: 'none',
        backgroundColor: theme.palette.background.paper,
    },
}));

const HomePage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { movies } = useSelector(state => state.moviesStore);
    useEffect(() => {
        dispatch(fetchMovies(1, "now_playing"));
    }, [dispatch]);

    return (
        <>
            <MainSlider movies={static_movies} />
            <CommonTitle title={"Latest Trailers"} />

            <div style={{width: '100%', marginTop: '50px'}}>
                <GridList cellHeight={190} cols={4} spacing={0}>
                    {static_movies.map((movie) => (
                        <GridListTile key={movie.id}>
                            <Trailer title={movie.title} backdrop_path={movie.poster_path} trailer_path={movie.trailer_url} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>

            <CommonTitle title={"Now playing movies"} />
            <div className={classes.rootGridContainer}>
                <MovieCardList movies={movies.slice(0,12)}/>
            </div>
        </>
    );
}

export default HomePage;
