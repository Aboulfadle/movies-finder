import React, {useEffect} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../components/common/Loader";
import PropTypes from "prop-types";
import {fetchActorDetails, fetchActorPopularMovies} from "../redux/actions/actor.action";
import {Col, Image, Row} from "react-bootstrap";
import HdSharp from "@material-ui/icons/HdSharp";
import MovieCardList from "../components/movies/MovieCardList";

const useStyles = makeStyles(theme => ({
    root: {
        fontFamily: 'Yanone Kaffeesatz',
        width: '100%',
        padding: '30px 4%',
    },
    actorMainImage: {
        width: '370px',
        height: '450px',
        borderRadius: '7px',
    },
    rootGridContainerHeader: {
        fontFamily: 'Yanone Kaffeesatz'
    },
    hdLogo: {
        color: '#dc3545',
        fontSize: '30px'
    },
    description: {
        lineHeight: '120%',
        paddingRight: '20px'
    },
    actorsContainer: {
        width: '100%',
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(0.5)
        }
    },
    actorCardContainer: {
        height: 'auto !important'
    },
    popularMovieImage: {
        height: '200px',
        borderRadius: '6px',
        width: '160px'

    }
}));

const ActorPage = ({actorId}) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { actor, popularMovies, loading } = useSelector(state => state.actorStore);

    useEffect(() => {
        dispatch(fetchActorDetails(actorId));
        dispatch(fetchActorPopularMovies(actorId));
        console.log(actor)
    }, [dispatch, actorId]);

    return (
        <div>
            { loading ?
                <Loader />
                :
                <div className={classes.root}>
                   <Row>
                       <Col>
                           <Image className={classes.actorMainImage} src={actor.profile_path ? `https://image.tmdb.org/t/p/w1280/${actor.profile_path}` : "/images/not-found.png"}/>
                           <div className={classes.description}>
                               <h3 className={"mgb-bold-10"}>Place/Date of Birth :</h3>
                               {actor.birthday} in {actor.place_of_birth}
                           </div>
                           <div className={classes.description}>
                               <h3 className={"mgb-bold-10"}>Biography :</h3>
                               {actor.biography}
                           </div>
                       </Col>

                       <Col className={"col-8"}>
                           <HdSharp className={classes.hdLogo} />
                           <h1 className={classes.rootGridContainerHeader}>{actor.name} !!</h1>
                           <h3 className={"mgb-bold-10"}>Known for :</h3>
                           <MovieCardList movies={popularMovies.slice(0, 12)} numberOfCols={3} />
                       </Col>
                   </Row>
                </div>
            }
        </div>
    );
}

export default ActorPage;

ActorPage.prototype = {
    actorId: PropTypes.number,
};
