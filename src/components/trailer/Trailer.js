import React from "react";
import {Modal} from "react-bootstrap";
import PropTypes from "prop-types";

const Trailer = ({trailer_key, show, handleClose}) => {

    return (
        <div className={"trailer-container"}>
            <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${trailer_key}`} allowFullScreen title={trailer_key}/>
                </div>
            </Modal>
        </div>
    );
}

Trailer.propTypes = {
    show : PropTypes.bool,
    trailer_key : PropTypes.string,
    handleClose : PropTypes.func
};

export default Trailer;
