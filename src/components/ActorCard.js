import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";


const useStyles = makeStyles(theme => ({
    actorCardBody: {
        textAlign: "center",
        padding: '10px 5px 5px'
    },
    actorReelName: {
        marginBottom: '-4px'
    },
    actorCharacterName: {

    }
}));

const ActorCard = ({ actor }) => {
    const classes = useStyles();

    return (
        <Card>
            <Card.Img style={{height: '170px'}} variant="top" src={actor.profile_path ? `https://image.tmdb.org/t/p/w276_and_h350_face${actor.profile_path}` : "/images/not-found.png"} />
            <Card.Body className={classes.actorCardBody}>
                <Card.Text className={classes.actorReelName}>
                    {actor.name.length <= 20 ? actor.name : actor.name.slice(0, 17) + '...'}
                </Card.Text>
                <Card.Text>{actor.character.length <= 24 ? actor.character : actor.character.slice(0, 21) + '...'}</Card.Text></Card.Body>
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
