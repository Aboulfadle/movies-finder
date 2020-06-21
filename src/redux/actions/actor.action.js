import {FETCH_ACTOR_DETAILS, FETCH_ACTOR_POPULAR} from "../actionsType";
import {client} from "../../client/client";

export function fetchActorDetails(actorId) {
    return dispatch => {
        dispatch({
            type: FETCH_ACTOR_DETAILS,
            payload: client.get(`/person/${actorId}`)
        });
    };
}

export function fetchActorPopularMovies(actorId) {
    return dispatch => {
        dispatch({
            type: FETCH_ACTOR_POPULAR,
            payload: client.get(`/person/${actorId}/movie_credits`)
        });
    };
}
