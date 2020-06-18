import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Image} from "react-bootstrap";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ReactStars from "react-rating-stars-component";
import {Link} from "@reach/router";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import MovieTopHeader from "./MovieTopHeader";


const useStyles = makeStyles(theme => ({
    movieHeaderContainer: {
        width: '100%',
        display: 'flex',
        color: 'white',
        height: 'auto',
        padding: '0 70px 20px',
        background: 'linear-gradient(to right, rgba(11, 11, 11) 150px, rgba(27.45%, 13.73%, 13.73%, 0.84) 100%)'
    },
    overviewLabel: {
        fontFamily: 'Yanone Kaffeesatz',
        fontSize: '25px',
        marginBottom: '-8px',
    },
    movieMainImage: {
        width: '370px',
        height: '86%',
        minHeight: '310px',
        borderRadius: '7px',
        marginTop: '30px'
    },
    reactStars: {
        margin: '14px 50px'
    },
    categoriesContainer: {
        display: 'flex', marginTop: '10px', marginBottom: '5px'
    },
    whiteColor: {
        color: "white"
    }
}));

const MovieHeader = ({movie}) => {

    const classes = useStyles();

    return (
        <>
            <MovieTopHeader movie={movie} />
            <div className={"header-background-container"}>
                <div className={classes.movieHeaderContainer}>
                    <Image className={classes.movieMainImage} src={movie.backdrop_path || movie.backdrop_path ? `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}` : "/images/not-found.png"}/>
                    <div className={"movie-header-infos"}>
                        <h1>{movie.title}</h1>
                        <label>11/27/2019 (US) 2h 11m</label>
                        <br/>
                        <label style={{fontSize: '14px'}}><PlayArrowIcon className={classes.whiteColor} /> Play Trailer</label>
                        <div className={classes.categoriesContainer}>
                            {
                                movie.genres && movie.genres.map((genre) =>
                                    <Link to={`/category/${genre.id}/${genre.name}`} key={genre.id} className={"movie-categories"}>
                                        {genre.name}
                                    </Link>
                                )
                            }
                        </div>

                        <Box position="absolute" display="inline-flex" style={{marginTop: '10px'}}>
                            <CircularProgress variant="static" value={movie.popularity} className={classes.whiteColor} />
                            <Box top={0} left={0} bottom={0} right={0} position="absolute" display="flex" alignItems="center" justifyContent="center">
                                <Typography variant="caption" component="div" className={classes.whiteColor}>
                                    {`${Math.round(movie.popularity,)}%`}
                                </Typography>
                            </Box>
                        </Box>

                        <ReactStars edit={false} size={24} color2={'#fdfdfd'} className={classes.reactStars} count={5} value={movie.vote_average / 2}/>
                        <p className={classes.overviewLabel}>Overview :</p>
                        <p style={{fontSize: '14px'}}>{movie.overview}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieHeader;

MovieHeader.propTypes = {};

MovieHeader.defaultProps = {};
