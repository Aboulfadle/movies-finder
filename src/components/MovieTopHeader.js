import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import PropTypes from "prop-types";


const useStyles = makeStyles(theme => ({
    topHeaderContainer: {
        display: 'flex',
        height: '60px',
        padding: '10px 50px',
        textAlign: 'center'
    },
}));

const MovieTopHeader = ({movie}) => {

    const classes = useStyles();

    return (
        <div className={classes.topHeaderContainer}>
            <div className={"topHeaderElement"}>
                <p>Status</p>
                <label>{movie.status}</label>
            </div>
            <div className={"topHeaderElement"}>
                <p>Original Language</p>
                <label>English</label>
            </div>
            <div className={"topHeaderElement"}>
                <p>Budget</p>
                <label>${movie.budget}</label>
            </div>
            <div className={"topHeaderElement"}>
                <p>Revenue</p>
                <label>${movie.revenue}</label>
            </div>
        </div>
    );
}

export default MovieTopHeader;

MovieTopHeader.propTypes = {
    movie : PropTypes.shape({
        status : PropTypes.string,
        budget : PropTypes.number,
        revenue : PropTypes.number
    })
};
