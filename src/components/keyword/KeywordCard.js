import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Card, Col, Row} from "react-bootstrap";
import {Link} from "@reach/router";
import PropTypes from "prop-types";
import slice from "../../utils/stringUtils";


const useStyles = makeStyles(theme => ({
    grid: {
        borderWidth: '1px',
        transition: 'all 0.3s cubic-bezier(.25,.8,.25,1);',
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
        textAlign: 'left'
    },
    cardText: {
        marginBottom: '-4px',
        textAlign: 'left',
        paddingRight: '10px',
        fontSize: '15px',
        marginTop: '-5px',
        lineHeight: '122%'
    },
    reactStars: {
        marginLeft: '10px'
    },
}));

const KeywordCard = ({movie}) => {
    const classes = useStyles();

    return (
        <Link className={"movie-card-link"} to={`/movie/${movie.id}`} >
            <Row className={`view-details ${classes.grid}`}>
                <Col>
                    <Card.Img variant="top" style={{ height: '200px' }} src={
                        movie.backdrop_path || movie.poster_path ?
                            `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`
                            : "/images/not-found.png"}/>
                </Col>
                <Col>
                    <Card.Title className={classes.cardTitle}>
                        {
                            slice(movie.title, 23)
                        }
                    </Card.Title>
                    <Card.Text className={classes.cardText}>
                        {slice(movie.overview, 215)}
                    </Card.Text>
                </Col>
            </Row>
        </Link>
    );
}

export default KeywordCard;

KeywordCard.propTypes = {
    movie : PropTypes.shape({
        id : PropTypes.number.isRequired,
        backdrop_path : PropTypes.string,
        poster_path : PropTypes.string,
        title : PropTypes.string.isRequired,
    })
};