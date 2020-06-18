import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import MainSlider from "../components/MainSlider";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Trailer from "../components/Trailer";
import MovieCardList from "../components/MovieCardList";
import axios from "axios";
import ApplicationConstant from "../constants/ApplicationConstant";
import CommonTitle from "../components/CommonTitle";
import static_movies from "../static_data/static_movies";


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
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(`${ApplicationConstant.BASE_URL}movie/now_playing?api_key=${ApplicationConstant.API_KEY}&language=en-US&page=1`)
            .then(response => {
                console.log(response.data);
                 setMovies(response.data.results.slice(0, 8))
            });
    }, []);

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
                <MovieCardList movies={movies}/>
            </div>
        </>
    );
}

export default HomePage;
