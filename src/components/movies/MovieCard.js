import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button, Card} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import {Link} from "@reach/router";
import PropTypes from "prop-types";


const useStyles = makeStyles(theme => ({
    grid: {
        borderWidth: '1px',
        width: '100%',
        borderColor: '#e8e8e8',
        borderStyle: 'solid',
        borderRadius: '6px',
        height: 'auto',
        textAlign: 'center',
    },
    cardButton: {
        marginTop: '10px',
        marginBottom: '10px',
        marginLeft: '10px',
        width: '115px',
        backgroundColor: '#010103'
    },
    cardTitle: {
        marginTop: '10px',
    },
    cardText: {
        marginBottom: '-4px',
        textAlign: 'left',
        paddingLeft: '10px',
        paddingRight: '10px',
        fontSize: '15px',
        marginTop: '-5px',
        lineHeight: '122%'
    },
    reactStars: {
        marginLeft: '10px'
    },
}));

const MovieCard = ({movie}) => {
    const classes = useStyles();

    return (
        <Card className={`view-details ${classes.grid}`}>
            <Card.Img variant="top" style={{ height: '220px' }} src={
                movie.backdrop_path || movie.backdrop_path ?
                    `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`
                    : "/images/not-found.png"}/>
            <Card.Title className={classes.cardTitle}>
                {
                    movie.title.length < 23 ?
                        movie.title :
                        movie.title.slice(0, 20) + "..."
                }
            </Card.Title>
            <Card.Text className={classes.cardText}>
                Some quick example text to build on the card title, build on the card title build on the card title
            </Card.Text>

            <ReactStars edit={false}
                        className={classes.reactStars}
                        value={movie.vote_average / 2}
                        color2={'#dc3545'}
                        count={5}
                        size={24}/>

            <Link to={`/movie/${movie.id}`} style={{textAlign: 'left'}}>
                <Button className={classes.cardButton} variant="dark">View details</Button>
            </Link>
        </Card>
    );
}

export default MovieCard;

MovieCard.propTypes = {
    movie : PropTypes.shape({
        id : PropTypes.number.isRequired,
        backdrop_path : PropTypes.string,
        poster_path : PropTypes.string,
        title : PropTypes.string.isRequired,
        vote_average : PropTypes.number,
    })
};

MovieCard.defaultProps = {
    vote_average : 0
};
