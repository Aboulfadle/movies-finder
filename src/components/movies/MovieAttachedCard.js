import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button} from "react-bootstrap";
import {Link} from "@reach/router";
import slice from "../../utils/stringUtils";

const useStyles = makeStyles(theme => ({
    trailerImageContainer: {
        position: 'relative',
        zIndex: 1,
        height: '100%'
    },
    trailerImage: {
        width: '100%',
        height: '100%'
    }
}));

const MovieAttachedCard = ({movie}) => {
    const classes = useStyles();

    return (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className={`trailer-image-container ${classes.trailerImageContainer}`}>
                <img className={classes.trailerImage} src={
                    movie.backdrop_path || movie.backdrop_path ?
                        `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`
                        : "/images/not-found.png"} alt={movie.title} />
                <div className={"trailer-image-overlay"}>
                    <p className={"overlay-title"}>{slice(movie.title, 25)}</p>
                    <p className={"overlay-description"}>{slice(movie.overview, 65)}</p>
                    <Button variant={"danger"}>Details</Button>
                </div>
            </div>
        </Link>
    );
}

export default MovieAttachedCard;

MovieAttachedCard.propTypes = {};

MovieAttachedCard.defaultProps = {};
