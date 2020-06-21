import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";


const useStyles = makeStyles(theme => ({
    actorCardBody: {
        textAlign: "center",
        fontSize: '12px',
        padding: '10px 5px 5px'
    },
    actorReelName: {
        marginBottom: '-4px',
        color: '#c62e2e',
    },
    actorCharacterName: {

    }
}));

const ActorCard = ({ actor }) => {
    const classes = useStyles();

    const customSlice = (text, limit) => {
        return text.length <= limit ? text : text.slice(0, limit-3) + '...';
    }

    return (
        <Card>
            <Card.Img style={{height: '80px'}} variant="top" src={actor.profile_path ? `https://image.tmdb.org/t/p/w276_and_h350_face${actor.profile_path}` : "/images/not-found.png"} />
            <Card.Body className={classes.actorCardBody}>
                <Card.Text className={classes.actorReelName}>
                    {customSlice(actor.name, 18)}
                </Card.Text>
                <Card.Text>{customSlice(actor.character, 18)}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ActorCard;

ActorCard.propTypes = {
    actor : PropTypes.shape({
        profile_path : PropTypes.string,
        name : PropTypes.string,
        character : PropTypes.string
    })
};
