import React, {useState} from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PropTypes from "prop-types";
import Trailer from "./Trailer";


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

const TrailerCard = ({title, backdrop_path, trailer_key}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const classes = useStyles();

    return (
        <div className={`trailer-image-container ${classes.trailerImageContainer}`}>
            <img className={classes.trailerImage} src={backdrop_path} alt={backdrop_path} />
            <div className={"trailer-image-overlay"} onClick={handleShow}>
                <p className={"overlay-title"}>{title}</p>
                <p className={"overlay-description"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                <PlayCircleOutlineIcon style={{color: '#dc3545', fontSize: '35px'}} />
            </div>
            <Trailer show={show} trailer_key={trailer_key} handleClose={handleClose}/>
        </div>
    );
}

TrailerCard.propTypes = {
    title : PropTypes.string,
    backdrop_path : PropTypes.string,
    trailer_path : PropTypes.string
};

export default TrailerCard;
