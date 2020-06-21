import React, {useState} from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PropTypes from "prop-types";
import Trailer from "./Trailer";
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

const TrailerCard = ({movie}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const classes = useStyles();

    return (
        <div className={`trailer-image-container ${classes.trailerImageContainer}`}>
            <img className={classes.trailerImage} src={movie.poster_path} alt={movie.poster_path} />
            <div className={"trailer-image-overlay"} onClick={handleShow}>
                <p className={"overlay-title"}>{movie.title}</p>
                <p className={"overlay-description"}>{slice(movie.overview, 120)}</p>
                <PlayCircleOutlineIcon style={{color: '#dc3545', fontSize: '35px'}} />
            </div>
            <Trailer show={show} trailer_key={movie.trailer_key} handleClose={handleClose}/>
        </div>
    );
}

TrailerCard.propTypes = {
    movie: PropTypes.shape({
        title : PropTypes.string,
        overview : PropTypes.string,
        poster_path : PropTypes.string,
        trailer_key : PropTypes.string
    })
};

export default TrailerCard;
