import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import HdSharp from "@material-ui/icons/HdSharp";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        paddingTop: '30px',
        paddingLeft: '7%',
        paddingRight: '7%'
    },
    rootGridContainerHeader: {
        fontFamily: 'Yanone Kaffeesatz'
    },
    hdLogo: {
        color: '#dc3545',
        fontSize: '30px'
    },
    description: {
        width: '50%',
        lineHeight: '120%'
    }
}));

const CommonTitle = ({title}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{marginTop: '50px'}}>
                <HdSharp className={classes.hdLogo} />
                <h1 className={classes.rootGridContainerHeader}>
                    {title} !!
                </h1>
                <p className={classes.description}>
                    Who better to judge the best movies of all time than the people who make them? Studio chiefs, Oscar winners and TV royalty
                    all were surveyed as THR publishes its first definitive entertainment-industry ranking of cinema's most superlative.
                    <br/>
                    After all, there are other movie lists. Lots and lots of others. So many lists, you couldn't list them all. But this
                    is the first to ask the entertainment industry itself to pick its choices for the best pictures ever made.
                </p>
            </div>
        </div>
    );
}

CommonTitle.propTypes = {};

CommonTitle.defaultProps = {
    title : PropTypes.string.isRequired
};

export default CommonTitle;
