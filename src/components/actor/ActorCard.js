import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import {Link} from "@reach/router";
import slice from "../../utils/stringUtils";


const useStyles = makeStyles(theme => ({
    actorCardBody: {
        textAlign: "center",
        fontSize: '12px',
        padding: '10px 5px 5px'
    },
    actorReelName: {
        marginBottom: '-4px',
    },
}));

const ActorCard = ({ actor }) => {
    const classes = useStyles();

    return (
        <Card>
            <Link to={`/actor/${actor.id}/${actor.name}`}>
                <Card.Img style={{height: '80px'}} variant="top" src={actor.profile_path ? `https://image.tmdb.org/t/p/w276_and_h350_face${actor.profile_path}` : "/images/not-found.png"} />
            </Link>
            <Card.Body className={classes.actorCardBody}>
                <Card.Text className={classes.actorReelName}>
                    {slice(actor.name, 18)}
                </Card.Text>
                <Card.Text>{slice(actor.character, 18)}</Card.Text>
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
