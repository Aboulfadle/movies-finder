import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PropTypes from "prop-types";


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

const Trailer = ({title, backdrop_path, trailer_path}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const classes = useStyles();

    return (
        <div className={`trailer-image-container ${classes.trailerImageContainer}`}>
            <img className={classes.trailerImage} src={backdrop_path} alt={backdrop_path} />
            <div className={"trailer-image-overlay"} onClick={handleShow}>
                <p className={"overlay-title"}>{title}</p>
                <p className={"overlay-description"}>Lots and lots of others pictures ever made, industry itself</p>
                <PlayCircleOutlineIcon style={{color: '#dc3545', fontSize: '35px'}} />
            </div>
            <div className={"trailer-container"}>
                <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={trailer_path} allowFullScreen title={trailer_path}/>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

Trailer.propTypes = {
    title : PropTypes.string,
    backdrop_path : PropTypes.string,
    trailer_path : PropTypes.string
};

export default Trailer;
