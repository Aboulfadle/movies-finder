import React from 'react';
import Image from "react-bootstrap/Image";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Carousel from "react-bootstrap/Carousel";
import PropTypes from 'prop-types';
import slice from "../../utils/stringUtils";

const useStyles = makeStyles(theme => ({
    mainImages: {
        width: '100%',
        height: '100vh'
    },
    mainImagesCard: {
        position: 'absolute',
        bottom: '80px',
        left: '50px',
        maxWidth: '350px',
        fontFamily: 'Titillium Web',
        paddingBottom: '10px',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '20px',
    },
    mainImagesCardText: {
        fontSize: '16px',
        paddingLeft: '10px',
        fontWeight: 'normal',
        paddingRight: '10px',
        textAlign: 'left',
        paddingTop: '10px'
    }
}));

const MainSlider = ({movies}) => {
    const classes = useStyles();
    return (
        <>
            <Carousel fade={true} controls={false} indicators={false} pause={false} interval={8000}>
                {
                    movies.map(movie =>
                        <Carousel.Item key={movie.id}>
                            <div className={classes.mainImages}>
                                <Image src={movie.poster_path} style={{border: 'none', width: '100%', height: '100%'}}/>
                                <p className={`text-center ${classes.mainImagesCard}`}>
                                    <label className={"main-card-image-title"}>{movie.title}</label>
                                    <label className={classes.mainImagesCardText}>{slice(movie.overview, 114)}</label>
                                </p>
                            </div>
                        </Carousel.Item>
                    )
                }
            </Carousel>
        </>
    );
}

MainSlider.propTypes = {
    movies : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            poster_path : PropTypes.string.isRequired,
            title : PropTypes.string.isRequired
        })
    )
};

export default MainSlider;
